import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', profilesCtrl.index)
router.get('/:id', profilesCtrl.show)



router.post('/', isLoggedIn, profilesCtrl.addCocktail)
router.post('/:id/comments',isLoggedIn,  profilesCtrl.createComment)


router.delete('/:id', isLoggedIn, profilesCtrl.deleteCocktail)
export {
  router
}