'use strict';

module.exports = app => {
  const { mongoose } = app;
  const Schema = mongoose.Schema;

  const CategorySchema = new Schema({
    id: { type: String, required: true, index: true, unique: true },
    name: { type: String, required: true },
  });

  return mongoose.model('Category', CategorySchema);

};
