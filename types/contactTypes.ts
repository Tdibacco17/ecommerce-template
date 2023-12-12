export interface NewSaleRequestInterface {
    name: string,
    lastname: string,
    phone: string,
    email: string,
    products: {
        quantity: string,
        title: string,
        unit_price: string
    }[] | string,
    transaction_amount: number | string,
    status: string,
    status_detail: string
}