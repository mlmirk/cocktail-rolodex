import { Profile } from "../models/profile.js";
import{Cocktail } from '../models/cocktail.js'


function index (req, res) {
  console.log('==+++++++++==',req.user.profile._id)
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

function deleteCocktail(req,res){
  console.log(req.params.id)
  console.log("stubbed up delete")
  Profile.findById(req.user.profile._id)
  .then(profile => {
    profile.savedCocktails.remove({_id: req.params.id})
profile.save()
.then(() => {
  Cocktail.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect("/profiles")
  })
})

})
}

function show(req,res){
  console.log("made it to show")
  Cocktail.findById(req.params.id)
  .populate('comments')
    .then(cocktail => {
      res.render('show', 
      {
        title: "Idividaul Display",
        cocktail
      })
    })
}

function createComment(req, res){
  console.log('stub up comment create');
  Profile.findById(req.user.profile._id)
  .populate('savedCocktails')
    .then(profile => {
    Cocktail.findById(req.params.id)
    .then(cocktail =>{
      console.log(cocktail)
      cocktail.comments.push(req.body)
      cocktail.save()
    })
    .then(() => {
      res.redirect(`/profiles/${req.params.id}`)
    })
    //cocktail.save()
    // .then(() => {
    //   res.redirect(`/profiles/${req.user.profile._id}`)
    // })
})
}


export{
  addCocktail,
  index,
  deleteCocktail,
  show,
  createComment
}