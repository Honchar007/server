import mongoose from 'mongoose';

const BrandModelSchema = new mongoose.Schema({
  id: String,
  brand: String,
  models: Array,
});

const BrandModel = mongoose.model('models', BrandModelSchema, 'models');

module.exports = BrandModel;
