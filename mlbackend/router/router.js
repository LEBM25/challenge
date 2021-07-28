'use strict'

const router = require('express').Router()
const apiController = require('../controller/controller')


router.get("/", apiController.searchProduct)
router.get("/:id", apiController.detailsProduct)


module.exports = router