import { Profile } from "../models/profile.js";
import{Cocktail } from '../models/cocktail.js'
function addCocktail(req,res){
  Profile.findById(req.user.profile._id)
  .then(profile =>{
    Cocktail.create(req.body)
    .then(cocktail =>{
      profile.savedCocktails.push(cocktail._id)
      profile.save()
      res.redirect('/')

    })

  })
// Cocktail.create(req.body,function(error, cocktail){
//   res.redirect('/')
//   }
// )
}

export{
  addCocktail
}