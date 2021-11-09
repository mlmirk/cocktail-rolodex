import { Profile } from "../models/profile.js";
import{Cocktail } from '../models/cocktail.js'


function index (req, res) {
  console.log('===========================',req.user.profile._id)
  Profile.findById(req.user.profile._id)
  .populate("savedCocktails")
    .then(profile =>{
      console.log('profile', profile.savedCocktails)
      res.render('index', { title: 'Home Page', 
      user: req.user ? req.user : null ,
      savedCocktails: profile.savedCocktails
    })
  })
}


function deleteCocktail(req,res){
  console.log(req.params.id)
  console.log("stubbed up delete")
  Cocktail.findByIdAndDelete(req.params.id, function(err, flight) {
    res.redirect('/profiles')
})

}





function addCocktail(req,res){
  console.log("=======================", req.body)
  Profile.findById(req.user.profile._id)
  .then(profile =>{
    Cocktail.create(req.body)
    .then(cocktail =>{
      profile.savedCocktails.push(cocktail._id)
      profile.save()
      res.redirect('/profiles')

    })

  })

}

export{
  addCocktail,
  index,
  deleteCocktail
}