const db = require("../../database/models");
const productModel = db.product;

const productService = {
    async createProduct(prod_name, prod_preco, prod_preco_desc, prod_qt_estoque, cate_id) {
        try {
            let product = await productModel.create({
                prod_name: prod_name, 
                prod_preco: prod_preco, 
                prod_preco_desc: prod_preco_desc, 
                prod_qt_estoque: prod_qt_estoque, 
                cate_id: cate_id
            })
            return product;

        } catch (error) {
            console.log(error);
            return undefined;
        }
    },
    async getProducts(){
        try {
            let products = await productModel.findAll(/*{
                include: db.Categorie
            }*/);
            return products;
        } catch (error) {
            console.error(error);
            return undefined;
        }
    }
}

module.exports = productService