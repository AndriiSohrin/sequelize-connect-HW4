const {Router} = require('express');
const router = Router();

const {productController} = require('../../controller');
const {productMiddleware,productUpdateMiddleware}= require('../../middleware');



router.post('/',productMiddleware,productController.createProduct);

router.get('/',productController.getAllProduct);

router.get('/:id',productController.getProductById);

router.put('/',productUpdateMiddleware,productController.updateProduct);

router.delete('/:name',productController.deleteProduct);



module.exports = router;
