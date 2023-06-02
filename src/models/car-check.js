const mongoose = require('mongoose');

const CarCheckSchema = mongoose.Schema({
  id: String,
  brand: String,
  model: String,
  town: String,
  link: String,
  wantToCheckId: String,
  firstName: String,
  phone: String,
  email: String,
  checker: {
    checkerId: String,
    name: String,
    phone: String,
  },
});

const CarCheckModel = mongoose.model('carcheck', CarCheckSchema, 'carcheck');

module.exports = CarCheckModel;
