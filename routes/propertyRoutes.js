const mongoose = require('mongoose');
// const GridFs = require('gridfs-stream');
// const bucket = require('../services/gridfs');
const requireLogin = require('../middlewares/requireLogin');

const Property = mongoose.model('properties');

module.exports = app => {
    
    app.get('/', async (req, res) => {
        const properties = await Property.find();

        res.json(property);
    });



    app.get('property', async (req, res) => {

      const {price, location, space} = req.body;

      const property = await Property.findOne({
            price,
            location,
            space,
      })
      res.json({property});
        
    });



    app.post('/api/properties' , async (req,res) => {

       const {title, price, location} = req.body;

    //    const file = req.file.image;
            const property = new Property({

                title,
                price,
                location,
                type,
                _user: req.user.id,
                fileId: fileId,
                date: Date.now()
              });
              
              await property.save();
              const user = await req.user.save();
       
              res.send(user).status(200);
              
              
            });
        

       
    
};