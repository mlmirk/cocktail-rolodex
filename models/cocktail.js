import mongoose from 'mongoose'

const cocktailSchema = new mongoose.Schema({
  name: String,
  drinkName: String,
  imgSrc:String,
  items: String,
  directions: String,
  rating: Number,
  //comments:[commentSchema]
}, {
  timestamps: true
})

const Cocktail = mongoose.model('Cocktail', cocktailSchema)

export {
  Cocktail
}