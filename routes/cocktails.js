import { Router } from 'express'
import * as cocktailCtrl from "../controllers/cocktails.js"
import * as queryCtrl from "../controllers/query.js"
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()


router.get('/', isLoggedIn, cocktailCtrl.landingPage)
router.get('/search', isLoggedIn, cocktailCtrl.searchPage)





router.post('/random', isLoggedIn, queryCtrl.random)
router.post('/search', isLoggedIn, queryCtrl.search)
export {
  router
}