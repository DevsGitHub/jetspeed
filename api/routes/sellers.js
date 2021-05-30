const express = require('express')
const router = express.Router()
const Seller = require('../model/seller')

//getting all
router.get('/', async (req, res) => {
    try {
        const sellers = await Seller.find()
        res.json(sellers)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//getting 1
router.get('/:id', getSeller, (req, res) => {
    res.send(res.seller)
})

//creating 1
router.post('/', async (req, res) => {
    const seller = new Seller({
        name: req.body.name,
        address: req.body.address,
        email: req.body.email,
        mobile: req.body.mobile
    })
    try {
        const newSeller = await seller.save()
        res.status(201).json(newSeller)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//updating 1
router.patch('/:id', getSeller, async (req, res) => {
    if (req.body.name != null) {
        res.seller.name = req.body.name
    }
    if (req.body.address != null) {
        res.seller.address = req.body.address
    }
    if (req.body.email != null) {
        res.seller.email = req.body.email
    }
    if (req.body.mobile != null) {
        res.seller.mobile = req.body.mobile
    }
    try {
        const updatedSeller = await res.seller.save()
        res.json(updatedSeller)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})
//deleting 1
router.delete('/:id', getSeller, async (req, res) => {
    try {
        await res.seller.remove()
        res.json({ message: 'Deleted Seller' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

async function getSeller(req, res, next) {
    let seller
    try {
        seller = await Seller.findById(req.params.id)
        if (seller == null) {
            return res.json({ message: 'cannot find seller' })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
    res.seller = seller
    next()
}

module.exports = router