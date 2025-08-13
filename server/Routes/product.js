const express = require('express')
const router = express.Router()

const { create, list, read, update, remove } = require ("../controllers/product")



router.get("/product", list)

router.post("/product", create)

router.get("/product/:productId", read)

router.put("/product/:productId", update)

router.delete('/product/:productId', remove)

module.exports = router