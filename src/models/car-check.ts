import mongoose from 'mongoose';

const CarCheckMonSchema = new mongoose.Schema({
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

const CarCheckModel = mongoose.model('carcheck', CarCheckMonSchema, 'carcheck');

module.exports = CarCheckModel;
