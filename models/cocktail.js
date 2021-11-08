import mongoose from 'mongoose'


const commentSchema= new mongoose.Schema({
name:String,
comment: String



}, {
  timestamps: true
})



const cocktailSchema = new mongoose.Schema({
  //name: String,
  drinkName: String,
  imgSrc:String,
  items: [String],
  amount:[String],
  directions: String,
  //rating: Number,
  comments:[commentSchema]
}, {
  timestamps: true
})

const Cocktail = mongoose.model('Cocktail', cocktailSchema)

export {
  Cocktail
}