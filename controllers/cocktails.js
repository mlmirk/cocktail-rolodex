import {Cocktail} from '../models/cocktail.js'

function landingPage(req,res){

res.render('cocktails/index',{
  title: "About"
})
}
function searchPage(req,res){
  res.render('cocktails/search',{
    title: "Search"
  })
  }

export{
  landingPage,
  searchPage
}