import axios from "axios"




//www.thecocktaildb.com/api/json/v1/1/random.php
function random(req , res){
  console.log('made it to random')

}





//http://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
function search(req ,res){
  //console.log('made it to query.search ')
  //console.log(req.body)
  axios.get(`http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${req.body.query}`)
  .then(response =>{
    const sendCocktail=[]
    const drink={}
    const cocktails =  response.data.drinks
    cocktails.forEach(c => {
      drink.title= c.strDrink
      drink.img= c.strDrinkThumb
      drink.directions= c.strInstructions
      drink.items=[c.strIngredient1,c.strIngredient2,c.strIngredient3,c.strIngredient4,
                          c.strIngredient5,c.strIngredient6,c.strIngredient7,c.strIngredient8,
                          c.strIngredient9,c.strIngredient10,c.strIngredient11,c.strIngredient12,
                          c.strIngredient13,c.strIngredient14,c.strIngredient15
      ]
      drink.amount=[c.strMeasure1,c.strMeasure2,c.strMeasure3,c.strMeasure4,
        c.strMeasure5,c.strMeasure6,c.strMeasure7,c.strMeasure8,
        c.strMeasure9,c.strMeasure10,c.strMeasure11,c.strMeasure12,
        c.strMeasure13,c.strMeasure14,c.strMeasure15
      ]
      sendCocktail.push(drink)


    });
console.log(sendCocktail)

    res.render('cocktails/display',{
      title: "display page", 
      
    sendCocktail
      
    })
    
  })
.catch(err =>{
  console.log(err)
  res.redirect('/search')
})
}




function cleaner(drinks){
  
}

export{
random,
search
}