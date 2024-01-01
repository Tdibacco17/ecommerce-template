import CreateProductComponent from "@/components/CreateProductComponent/CreateProductComponent";
import { FormDataInterface, FormImgDataInterface } from "@/types/productsTypes";
import { handleCreateProduct } from "@/utils/fetchFunctions";
import { ChangeEvent, FormEvent, useState } from "react";

export default function CreateProductContainer({ token }: { token: string }) {
    const [message, setMessage] = useState({
        ok: "",
        error: ""
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [formImgData, setFormImgData] = useState<FormImgDataInterface>({
        imageData: null,
        imagesData: null
    });
    const [formData, setFormData] = useState<FormDataInterface>({
        slug: "",
        name: "",
        price: "",
        oldPrice: "",
        discount: 0,
        stock: 0,
        description: [],
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, description: value.split("\n") }));
    };

    const handleImageInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files ? e.target.files[0] : null;
        setFormImgData((prevFormData) => ({ ...prevFormData, imageData: selectedFile }));
    };

    const handleImagesInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files;
        setFormImgData((prevFormData) => ({ ...prevFormData, imagesData: selectedFiles }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { imageData, imagesData } = formImgData;

        if (!imageData || !formData.slug || !formData.name || !formData.price || !formData.stock) {
            setMessage((prevMsgData) => ({
                ...prevMsgData,
                error: "Completar campos obligatorios."
            }));
            setTimeout(() => {
                setMessage({
                    ok: "",
                    error: ""
                })
            }, 2500)
            return
        }

        const formDataToSend = new FormData();

        if (formData.oldPrice && formData.oldPrice.trim().length > 0) {
            formDataToSend.append('oldPrice', formData.oldPrice.toString());
        }
        if (formData.discount > 0) {
            formDataToSend.append('discount', formData.discount.toString());
        }
        if (formData.description.length !== 0) {
            for (let i = 0; i < formData.description.length; i++) {
                formDataToSend.append('description', formData.description[i])
            }
        }
        if (imagesData && imagesData.length > 0) {
            for (let i = 0; i < imagesData.length; i++) {
                formDataToSend.append('imagesData', imagesData[i]);
            }
        }
        setLoading(true)
        formDataToSend.append('slug', formData.slug);
        formDataToSend.append('name', formData.name);
        formDataToSend.append('imageData', imageData);
        formDataToSend.append('price', formData.price.toString());
        formDataToSend.append('stock', formData.stock.toString());
        formDataToSend.append('token', token);

        try {
            const createProduct = await handleCreateProduct(formDataToSend)
            if (createProduct.status !== 200) {
                setMessage((prevMsgData) => ({
                    ...prevMsgData,
                    error: createProduct.message
                }));
                setTimeout(() => {
                    setMessage({
                        ok: "",
                        error: ""
                    })
                }, 2500)
                setLoading(false)
                return
            }
            setLoading(false)
            setFormImgData((prevFormImgData) => ({
                ...prevFormImgData,
                imageData: null,
                imagesData: null,
            }));
            setFormData({
                slug: "",
                name: "",
                price: "",
                oldPrice: "",
                discount: 0,
                stock: 0,
                description: [],
            })
            setMessage({
                ok: createProduct.message,
                error: ""
            });
            setTimeout(() => {
                setMessage({
                    ok: "",
                    error: ""
                })
            }, 2500)
        } catch (error) {
            console.error('Error sending images to Next.js backend:', error);
            setMessage((prevMsgData) => ({
                ...prevMsgData,
                error: `${error}`
            }));
        }
    };

    return <CreateProductComponent
        handleSubmit={handleSubmit}
        handleImageInputChange={handleImageInputChange}
        handleImagesInputChange={handleImagesInputChange}
        handleInputChange={handleInputChange}
        handleDescriptionChange={handleDescriptionChange}
        formData={formData}
        message={message}
        loading={loading}
    />
}