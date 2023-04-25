require('../models/database')
const Category = require('../models/Category')


// GET / Homepage
exports.homepage = async(req, res) => {
    try {
      const limitNumber = 5;
      const categories = await Category.find({}).limit(limitNumber);

  
      res.render('index', { title: 'Cooking Blog - Home', categories } );
    } catch (error) {
      res.satus(500).send({message: error.message || "Error Occured" });
    }
  }
