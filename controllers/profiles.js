import { Profile } from "../models/profile.js";
import{Cocktail } from '../models/cocktail.js'


function index (req, res) {
  Profile.findById(req.user.profile._id)
  .populate("savedCocktails")
    .then(profile =>{
      res.render('index', { title: 'Rolodex', 
      user: req.user ? req.user : null ,
      savedCocktails: profile.savedCocktails
    })
  })
}

function addCocktail(req,res){
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
.catch(err =>{
  console.log(err)
  res.redirect(`/profiles/${req.params.id}`)
})
}

function show(req,res){
 
  Cocktail.findById(req.params.id)
  .populate('comments')
    .then(cocktail => {
      res.render('show', 
      {
        title: "More Details",
        cocktail
      })
    }) .catch(err =>{
      console.log(err)
      res.redirect(`/profiles`)
    })
}

function createComment(req, res){
  Profile.findById(req.user.profile._id)
  .populate('savedCocktails')
    .then(profile => {
    Cocktail.findById(req.params.id)
    .then(cocktail =>{
      cocktail.comments.push(req.body)
      cocktail.save()
    })
      .then(() => {
      res.redirect(`/profiles/${req.params.id}`)
    })
    .catch(err =>{
      console.log(err)
      res.redirect(`/profiles/${req.params.id}`)
    })
})
}

function deleteComment(req,res){
  Cocktail.findById(req.params.id)
    .then((cocktail)=>{
      cocktail.comments.remove({_id: req.params.cid})
      cocktail.save()
      .then(()=>{
        res.redirect(`/profiles/${req.params.id}`)
      })
      })
      .catch(err =>{
        console.log(err)
        res.redirect(`/profiles/${req.params.id}`)
      })
}


function showAll(req, res) {
 Profile.find({})
 .then(profile => {
  Cocktail.find({})
  .then(cocktail => {
    res.render('cocktails/show',{
      title:'All Cocktails',
      savedCocktails: cocktail
    })
  })
 })
}


export{
  addCocktail,
  index,
  deleteCocktail,
  show,
  createComment,
  deleteComment,
  showAll
}