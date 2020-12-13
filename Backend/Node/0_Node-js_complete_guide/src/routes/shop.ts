import express = require('express')
const router = express.Router()
import { shopController } from '../controllers'
router.use('/', shopController.products.get)
router.use('/card', shopController.card.get)
router.use('/checkout', shopController.checkout.get)

export default router
