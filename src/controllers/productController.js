const productService = require("../services/productService")

const productController = {
    async createProduct(req, res) {
        const { prod_name, prod_preco, prod_preco_desc, prod_qt_estoque, cate_id } = req.body;

        if(!prod_name || !prod_preco || !prod_preco_desc || !prod_qt_estoque || !cate_id) {
            return res.status(400).json({
                error: "parâmetros incompletos"
            });
        }
        
        if (typeof prod_name === "string" && typeof prod_preco === "number"){
            if (typeof prod_preco_desc === "number" && typeof prod_qt_estoque === "number") {                    
                if (typeof cate_id === "number") {
        
                    let product = await productService.createProduct(prod_name, prod_preco, prod_preco_desc, prod_qt_estoque, cate_id);
                    return res.json(product);
        
                }   
            }
            
        }
        
        return res.status(400).json({
            error: "parâmetros inválidos"
        });

    },
    async getProducts(req, res){
        let products = await productService.getProducts();
        return res.json(products);
    }
}

module.exports = productController;