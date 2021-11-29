const userController = require("../controllers/userController");
const productController = require("../controllers/productController");

const routes = require("express").Router();

// Listar todos os usuários
routes.get("/users", userController.getUsers);
// Busca por um usuário
routes.get("/user/:id", userController.getUser)
// Criar usuário
routes.post("/user", userController.createUser);
// Atualizar usuário
routes.put("/user", userController.updateUser);
// Excluir usuário
routes.delete("/user/:id", userController.deleteUser);


// Criar produto
routes.post("/product", productController.createProduct);
routes.get("/products", productController.getProducts);

module.exports = routes;