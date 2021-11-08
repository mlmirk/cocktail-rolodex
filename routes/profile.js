import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/index',  function (req, res) {
  res.render('index', { title: 'Home Page', user: req.user ? req.user : null })
})



router.post('/savedCocktails', isLoggedIn, profilesCtrl.addCocktail)

export {
  router
}