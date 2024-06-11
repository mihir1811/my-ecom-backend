const Store = require("../models/storeModel")

exports.getStoreDetails = (req, res) => {
    try {
        console.log(req.body)
        res.send("hii")
    } catch (error) {
        console.log(error)
        res.status(500).send('Server error');
    }
}