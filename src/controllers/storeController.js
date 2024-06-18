const Store = require("../models/storeModel")

exports.getStoreDetails = async (req, res) => {
    try {
        console.log(req.body)
        // const store = await Store.findById(storeId).populate('owner', 'username email');

        // if (!store) {
        //   return res.status(404).json({ msg: 'Store not found' });
        // }
        // res.json(store);
        res.send("")
    } catch (error) {
        console.log(error)
        res.status(500).send('Server error');
    }
}