import {Cocktail} from '../models/cocktail.js'

function search(req,res){
console.log('reched the search page')
res.render('cocktails/index',{
  title: "got here"
})
}

export{
  search
}