const { Schema, model } = require('mongoose')

const schema =
{
  original_url: { type: String },
  short_url: { type: String },
  title: { type: String, default: 'Unknown' },
  created: { type: Date, default: new Date },
  modified: { type: Date, default: new Date },
  favicon: { type: String },
  domain: { type: String }
}

module.exports = model('Url', new Schema(schema))