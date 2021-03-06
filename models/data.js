const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  premio: String,
  ip: String,
  cordsLat: Number,
  cordsLon: Number,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const Data = mongoose.model('Data', userSchema);

module.exports = Data;