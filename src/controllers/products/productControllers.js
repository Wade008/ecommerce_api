const products = [
    {
        title: "Bag",
        description: "Bag for all occasions",
        price: 42,
        stock: 10,
    },
    {
        title: "Ring",
        description: "Wedding Ring",
        price: 4200,
        stock: 5,
    },
    {
        title: "Wallet",
        description: "Wallet for all occasions",
        price: 420,
        stock: 15,
    },
]

function getProducts() {
    //this will get products form the database
    return products
}


function getProductById(productId) {
    //will get the product from the database with id = id
    const product = products[productId]
    return product
}

function createProduct(product) {
    //insert inot db and retrun xreated product

    const newProduct = {
        id: 4,
        ...product
    }
    return newProduct
}

module.exports = {
    getProducts,
    getProductById,
    createProduct
}