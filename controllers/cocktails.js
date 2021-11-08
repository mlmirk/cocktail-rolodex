import {Cocktail} from '../models/cocktail.js'

function landingPage(req,res){

res.render('cocktails/index',{
  title: "got here"
})
}
function searchPage(req,res){
  console.log('reached the search page, on the cocktail.js router')
  res.render('cocktails/search',{
    title: "search page"
  })
  }

export{
  landingPage,
  searchPage
}