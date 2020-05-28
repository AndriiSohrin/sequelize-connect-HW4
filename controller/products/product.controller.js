const {productService} = require('../../services');


module.exports = {

    getAllProduct: async (req, res) => {

        try {

            let products = await productService.getAllProduct()
            res.json(products)

        } catch (error) {
            res.json(error)
        }

    },


    getProductById: async (req, res) => {
        const id = req.params.id;

        try {

            let product = await productService.getProductById(id);
            res.json(product)

        } catch (error) {
            res.json(error)
        }
    },


    deleteProduct: async (req, res) => {
        const name = req.params.name;

        try {
            await productService.deleteProduct(name)
        } catch (e) {
            res.json(e)
        }
        res.end()
    },


    createProduct: async (req, res) => {

        try {
            await productService.createProduct(req.body)
        } catch (e) {
            res.json(e)
        }
        res.end()
    },


    updateProduct: async (req, res) => {
        const {name, price} = req.query;

        try {
            await productService.updateProduct(name, price)
        } catch (e) {
            res.json(e)
        }
        res.end()
    }

};
