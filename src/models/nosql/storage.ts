import {  Schema, model } from 'mongoose';

const StorageSchema = new Schema({
 url: {type: String},
 filename: {type: String} 
}, {
  timestamps: true,
  versionKey: false
});

const Storage = model('Storage', StorageSchema);

export default Storage;