//Id maker
const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

//database
const products = {}

//functions
function saveMug (obj) {
    if(!obj.id) obj.id = sequence.id
    products[obj.id] = obj
    return obj
}

function getProducts(){
    return products
}

function getProduct(code){
    return products[code] || {}
}

function deleteProduct(code){
    const product = products[code]
    delete products[code]
    return product
}

//export module
module.exports = {saveMug, getProducts, getProduct, deleteProduct}