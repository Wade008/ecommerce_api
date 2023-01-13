const Product = require("../../models/product");



async function getProducts() {
    //this will get products form the database
    const products = await Product.find()
    return products
}


async function getProductById(productId) {
    //will get the product from the database with id = id
    try {
        const product = await Product.findById(productId)
        return product
    } catch (err) {
        //we can also return customized error message
        console.log(err)
    }
}

async function createProduct(product) {
    //insert inot db and retrun xreated product

    const newProduct = await Product.create(product)


    return newProduct
}

async function deleteProduct(productId){
     //deteleOne and deleteMany will delete but not return the records
    //findByIdAndDelete and findOneAndDelete will detele and return the deleted record
    const deletedProduct = await Product.findByIdAndDelete(productId)
    return deletedProduct
}



module.exports = {
    getProducts,
    getProductById,
    createProduct,
    deleteProduct,
}

// const products = [
//     {
//         title: "Bag",
//         description: "Bag for all occasions",
//         price: 42,
//         stock: 10,
//     },
//     {
//         title: "Ring",
//         description: "Wedding Ring",
//         price: 4200,
//         stock: 5,
//     },
//     {
//         title: "Wallet",
//         description: "Wallet for all occasions",
//         price: 420,
//         stock: 15,
//     },
// ]