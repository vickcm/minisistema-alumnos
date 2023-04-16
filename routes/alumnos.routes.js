import express from 'express'
import * as controller from '../controllers/alumnos.controllers.js'

const route = express.Router()

route.get('/alumnos', controller.getAlumnos)

route.get('/alumnos/nuevo', controller.createAlumnoFormPage)
route.post('/alumnos/nuevo', controller.createAlumno)

route.get('/alumnos/:alumnoLegajo/edit', controller.editAlumnoForm)
route.post('/alumnos/:alumnoLegajo/edit', controller.editAlumno)

route.get('/alumnos/:alumnoLegajo/delete', controller.deleteAlumnoForm)
route.post('/alumnos/:alumnoLegajo/delete', controller.deleteAlumno)  


route.get('/alumnos/:alumnoLegajo', controller.getAlumnoByLegajo)


export default route