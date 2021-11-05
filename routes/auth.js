import { Router } from 'express'
import passport from 'passport'

const router = Router()

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
)

router.get(
  '/google/oauth2callback',
  passport.authenticate('google', {
    successRedirect: '/cocktails', //change this redierct to a new page view on loggin go here
    failureRedirect: '/auth/google',
  })
)

router.get('/logout', function (req, res) {
  req.logout()
  res.redirect('/')
})

export {
  router
}
