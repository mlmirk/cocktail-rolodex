import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', profilesCtrl.index)



router.post('/', isLoggedIn, profilesCtrl.addCocktail)

export {
  router
}