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


router.patch('/fee/:id', function(req, res, next) {
    Fees.update({ paid: req.body.paid}, { where: {
        id: req.params.id
        }
    })
        .then( rows => {
            if (rows) {
                return res.send('ok')
            } else {
                return res.status(404).send()
            }
        })
        .catch( err => next.err())
})

router.post('/fees', function(req, res, next) {
    Fees.create(req.body).then( (data) => {
        return res.status(201).send('ok')
    }).catch( err => {
        if(err instanceof Sequelize.ValidationError) {
            let messages = err.errors.map( (e) => e.message)
            return res.status(500).json(messages)
        }
        return next(err)
    })
})

module.exports = router