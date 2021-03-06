'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  uuid = require('node-uuid'),
  objectid = Schema.Types.ObjectId;

var ProductSchema = new Schema({
  brand: String,
  category: String,
  /*Choices available are 0 (No), 1 (Yes)*/
  catalog_only: Number,
  collection_group: {},
  description: {
    type: String,
    required: true,
    min: 0
  },
  depth: {
    type: Number,
    required: true,
    min: 0
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  height: {
    type: Number,
    required: true,
    min: 0
  },
  image_array : [],
  title: {
    type: String,
    index: true,
    unique: true
  },
  /*Choices available are 0 (No), 1 (Yes)*/
  requires_shipping: Number,
  sku: {
    type: String,
    required: true,
    default: uuid.v4()
  },
  slug: {
    type: String,
    required: true,
    default: uuid.v4()
  },
  sale_price: {
    type: Number,
    required: true
  },
  /*Choices available are 0 (Draft), 1 (Live)*/
  status: Number,
  stock_level: {
    type: Number,
    required: true,
    min: 0
  },
  /*Choices available are 0 (Unlimited), 1 (In Stock), 2 (Low Stock), 3 (Out Of Stock), 4 (More Stock Ordered), 5 (Discontinued)*/
  stock_status: Number,
  /*The tax band to use, choices available are 26 (None), 1 (Default)*/
  tax_band: Number,
  weight: {
    type: Number,
    required: true,
    min: 0
  },
  width: {
    type: Number,
    required: true,
    min: 0
  },
  image: String
});

module.exports = mongoose.model('Product', ProductSchema);
