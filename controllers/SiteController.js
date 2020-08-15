const CONFIG = require('../config.json');


exports.getIndex = async function (req, res) {
    return res.render('site/index.ejs')
};


