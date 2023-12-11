import { NewSaleRequestInterface } from "@/types/contactTypes"

export const newSaletemplateHtml = (body: NewSaleRequestInterface) => {
    const productsTableRows = Array.isArray(body.products)
        ? body.products.map(product => {
            const total = Number(product.quantity) * Number(product.unit_price);
            return `
            <tr>
                <td>${product.quantity}</td>
                <td>${product.title}</td>
                <td>$${product.unit_price}</td>
                <td>$${total}</td>
            </tr>
        `;
        }).join('')
        : 'Faltan los productos';

    return `
    <!DOCTYPE html>
    <html lang="es">
    
    <head>
        <style>
            body {
                color: black;
            }
            table {
                border-collapse: collapse;
                width: 100%;
            }
            th, td {
                border: 1px solid #dddddd;
                text-align: left;
                padding: 8px;
            }
            th {
                background-color: #f2f2f2;
                font-weight: bold;
            }
            h2, h3, p {
                color: black;
            }
            strong {
                font-weight: bold;
            }
            @media only screen and (max-width: 600px) {
                table {
                    font-size: 12px;
                }
            }
        </style>
    </head>
    
    <body>
        <div class="container">
            <p><strong>Nombre:</strong> ${body.name} ${body.lastname}</p>
            <p><strong>Teléfono:</strong> ${body.phone}</p>
            <p><strong>Correo Electrónico:</strong> ${body.email}</p>
            
            <h3>Productos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Cantidad</th>
                        <th>Producto</th>
                        <th>Precio Unitario</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    ${productsTableRows}
                </tbody>
            </table>
            
            <p><strong>Monto total de la Transacción:</strong> $${body.transaction_amount}</p>
            <p><strong>Estado:</strong> ${body.status}</p>
            <p><strong>Detalle del Estado:</strong> ${body.status_detail}</p>
        </div>
    </body>
    
    </html>
    `;
};
