const Mealtype = require('../Models/Mealtype.json');

exports.getMealtypes = (req,res) => {
    res.status(200).json({
        message: 'Mealtypes loaded successfully',
        mealtypes: Mealtype
    })
}