const { Op } = require("sequelize");
const db = require("../../database/models");
const UserModel = db.User;

const userService = {
    async getUser(id) {
        try {
            let user = await UserModel.findOne({
                where: {
                    id,
                }
            });
            return user;
        } catch (error) {
            console.log(error);
            return undefined;
        }
    },
    async getUsers(){
        try {
            let users = await UserModel.findAll();
            return users;
        } catch (error) {
            console.error(error);
            return undefined;
        }
    },
    async createUser(username, password) {
        try {
            let user = await UserModel.create({
                username: username,
                password: password,
            });
            return user;
        } catch (error) {
            console.log(error);
            return undefined;
        }
    },
    async updateUser(username, password, new_password){
        try {
            let userExist = await UserModel.findOne({
                where: {
                    [Op.or]: {
                        username,
                        password
                    },
                }
            });

            if(!userExist){
                console.log("Usuário não existe");
                return null;
            }

            userExist.password = new_password;
            await userExist.save();

            return userExist;

        } catch (error) {
            console.error(error);
            return undefined;
        }
    }, 
    async deleteUser(id){
        try {
            let user = await UserModel.destroy({
                where: {
                    id,
                }
            })

            return user;
        } catch (error) {
            console.error(error);
            return undefined;
        }
    }
}

module.exports = userService;