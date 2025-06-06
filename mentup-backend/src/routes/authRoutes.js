const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const validate = require('../middlewares/validate');
const { signupValidation, loginValidation } = require('../services/userValidation');
const { logout } = require('../controllers/authController');

router.get('/test', (req, res) => {
  res.json({ message: "✅ Backend ayakta, /auth/test çalışıyor!" });
});

// Signup route
router.post('/signup', validate(signupValidation), authController.signup);

// Login route
router.post('/login', validate(loginValidation), authController.login);

// Çıkış yapma
router.post('/logout', logout);

router.post('/request-reset', authController.requestPasswordReset);
router.post('/reset-password', authController.resetPassword);

router.get('/test', (req, res) => {
  return res.status(200).json({ message: "Auth route çalışıyor" });
});


module.exports = router;