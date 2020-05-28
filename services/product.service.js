const db = require('../database').getInstance();

module.exports = {

    getAllProduct: () => {
        const ProductModel = db.getModel('Product');

        return ProductModel.findAll({})
    },


    getProductById: ( id ) => {
        const ProductModel = db.getModel('Product');

        return ProductModel.findAll({
            where: { id }
        })
    },


    createProduct: ( user ) => {
        const ProductModel = db.getModel('Product');

        return ProductModel.create( user )
    },


    updateProduct: ( name, newPrice ) => {
        const ProductModel = db.getModel('Product');

        return ProductModel.update(
            { price: newPrice },
            { where: { name } }
        );
    },


    deleteProduct: ( name ) => {
        const ProductModel = db.getModel('Product');

        return ProductModel.destroy({
            where: { name }
        })
    }

};
