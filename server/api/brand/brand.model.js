'use strict';

var mongoose = require('mongoose'),
  uuid = require('node-uuid'),
  Schema = mongoose.Schema;

var BrandSchema = new Schema({
  created_at: {
    type: Date
  },
  description: {
    type: String,
    required: true
  },
  /*A unique identifier generally used as part of a URL.*/
  slug: {
    type: String,
    required: true,
    default: uuid.v4()
  },
  /*Choices available are 0 (Draft), 1 (Live).*/
  status: {
    type: Object,
    required: true
  },
  title: {
    type: String,
    required: true,
    index: true,
    unique: true
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Brand', BrandSchema);
