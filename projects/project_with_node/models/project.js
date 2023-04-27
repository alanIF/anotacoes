import mongoose from 'mongoose';
const { Schema } = mongoose;

const projectSchema = new Project({
  title: String, 
  author: String,
});