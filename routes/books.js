const express = require('express')
const { request } = require('http')
const author = require('../models/author')
const router = express.Router()
const Book = require('../models/books')

//All Books Route

router.get('/', async (req, res) => {
    res.send('All Books')
})

// New Book Route
router.get('/new', (req, res) => {
    res.send('New Book')
})

//Create Book Route
router.post('/', async (req, res) => {
    res.send('Create Book')
})
 module.exports = router

 