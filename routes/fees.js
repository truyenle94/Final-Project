var express = require('express')
var Fees = require('../models').Fees

var router = express.Router()

router.get('/fees', function(req, res, next) {
    Fees.findAll({order: ['name']})
        .then( fees => {
            return res.json(fees)
        })
        .catch(err  => next.err() )
})

module.exports = router