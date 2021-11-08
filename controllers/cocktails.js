import {Cocktail} from '../models/cocktail.js'

function landingPage(req,res){
console.log('reched the landing page')
res.render('cocktails/index',{
  title: "got here"
})
}
function searchPage(req,res){
  console.log('raeched the search page, on the cocktail.js router')
  res.render('cocktails/search',{
    title: "search page"
  })
  }

export{
  landingPage,
  searchPage
}