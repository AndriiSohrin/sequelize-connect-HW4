const {Router} = require('express');
const router = Router();

const {productController} = require('../../controller');
const {productMiddleware}= require('../../middleware');



router.post('/',productMiddleware,productController.createProduct);

router.get('/',productController.getAllProduct);

router.get('/:id',productController.getProductById);

router.put('/',productMiddleware,productController.updateProduct);

router.delete('/:id',productController.deleteProduct);



module.exports = router;
