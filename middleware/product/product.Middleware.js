

module.exports = (req, res, next) => {
    try {
        const { name,price } = req.body;

        if (!name || !price) {
            throw new Error()
        }

        if (price < 0) {
            throw new Error()
        }

        if(name.length < 3 || name.length > 8){
            throw new Error();
        }

        next()
    } catch (e) {
        res.json('error middleware')
    }
};
