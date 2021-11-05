import { Router } from 'express'
import * as cocktailCtrl from "../controllers/cocktails.js"
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()


router.get('/', isLoggedIn, cocktailCtrl.search)


export {
  router
}