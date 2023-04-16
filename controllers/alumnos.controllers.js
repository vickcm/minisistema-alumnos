import * as service from '../services/alumnos.services.js'
import * as view from '../views/alumnos.views.js'


function getAlumnos(req, res) {
    service.getAlumnos({ deleted: true })
        .then(function (alumnos) {
            res.send(view.createAlumnoListPage(alumnos))
        })
}

function getAlumnoByLegajo(req, res) {
    let alumnoLegajo = req.params.alumnoLegajo // 1

    service.getAlumnoByLegajo(alumnoLegajo)
        .then(function (alumno) {
            if (alumno) {
                res.send(view.createAlumnoPage(alumno))
            }
            else {
                res.send(view.createPage('Error', '<p class="ms-5 pt-5 text-danger fs-bold"> Alumno no encontrado</p>'))
            }
        })
}

 function createAlumnoFormPage(req, res) {
    res.send(view.createAlumnoFormPage())
}

function createAlumno(req, res) {
    const alumno = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        anio: req.body.anio
    }

    service.createAlumno(alumno)
        .then(function (newAlumno) {
            res.send(view.createPage('Alumno creado', `<p class="ms-5 pt-5 text-primary fs-bold">Alumno ${newAlumno.nombre},  ${newAlumno.apellido} ha sido creado con el legajo ${newAlumno.legajo}</p>`))
        })
        .catch(function (error) {
            res.send(view.createPage('Error', `<p class="ms-5 pt-5 text-danger fs-bold"> No se pudo crear el alumno.</p>`))
        })


} 

function editAlumnoForm(req, res) {

    const legajo = req.params.alumnoLegajo
    console.log(legajo)

    service.getAlumnoByLegajo(legajo)
        .then(function (alumno) {
            if (alumno) {
                res.send(view.createEditAlumnoFormPage(alumno))
            }
            else {
                res.send(view.createPage('No se encontro!', '<p class="ms-5 pt-5 text-danger fs-bold"> No se encontro el producto solicitado</p>'))
            }
        })

} 

function editAlumno(req, res) {

    const legajo = req.params.alumnoLegajo
    console.log(legajo)

    const alumno = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        anio: req.body.anio
    }


    service.editAlumno(legajo, alumno)
        .then(function (alumno) {
            if (alumno) {
                res.send(view.createPage('Alumno Modificado', `<p class="ms-5 pt-5 text-primary fs-bold"> Alumno legajo: ${alumno.legajo} modificado con exito!</p>`))
            }
            else {
                res.send(view.createPage('No se encontro!', '<p class="ms-5 pt-5 text-danger fs-bold">No se pudo procesar la modificación del alumno</p>'))
            }
        })
} 

function deleteAlumnoForm(req, res) {
    const legajo = req.params.alumnoLegajo

    service.getAlumnoByLegajo(legajo)
        .then(function (alumno) {
            if (alumno) {
                res.send(view.createDeleteAlumnoFormPage(alumno))
            }
            else {
                res.send(view.createPage('No se encontró!', '<p class="ms-5 pt-5 text-danger fs-bold">No se encontró el alumno que desea borrar</p>'))
            }
        })

}

function deleteAlumno(req, res) {
    const legajo = req.params.alumnoLegajo
    console.log(legajo)

    service.deleteAlumno(legajo)
        .then(function (alumno) {
            if (alumno) {
                res.send(view.createPage('Alumno Eliminado', `<p class="ms-5 pt-5 text-primary fs-bold">El Alumno con el legajo número ${alumno.legajo} ha sido eliminado con exito!</p>`))
            }
            else {
                res.send(view.createPage('No se encontro!', '<p class="ms-5 pt-5 text-danger fs-bold">No se encontró el alumno que desea eliminar</p>'))
            }
        })
}

export {
    getAlumnos,
    getAlumnoByLegajo,
    createAlumnoFormPage,
    createAlumno,
    editAlumno, 
    editAlumnoForm,
    deleteAlumnoForm,
    deleteAlumno
    
}
