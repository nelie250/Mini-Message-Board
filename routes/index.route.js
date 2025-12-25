const { Router }= require('express')
const indexRouter = Router()
const {index, createNew,form} = require('../controllers/index.controller')

indexRouter.get('/', index );
indexRouter.get('/form', form)
indexRouter.post('/form/new', createNew)


module.exports = indexRouter