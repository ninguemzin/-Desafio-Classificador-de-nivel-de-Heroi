let invoice = {
    name: "Emerson",
    age: 22,
    products: {
        0: ["Mouse Fortrek", 80.00],
        1: ["Teclado DELL", 50.00],
        2: ["Monitor LG", 890.00]
    },
    frete: 68.90
}

generateInvoice(invoice)
function generateInvoice(name, age, products, frete){
    console.log(`Nome: ${invoice.name}`)
    console.log(`Idade: ${invoice.age} anos`)
    console.log("-------------")

    for (let index in invoice.products){
        let [productName, productPrice] = invoice.products[index]
        console.log(`- ${productName}: R$ ${productPrice}`)
    }

    console.log(`- Frete: ${invoice.frete}`)
    console.log("-------------")
}