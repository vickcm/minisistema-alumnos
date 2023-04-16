import { readFile, writeFile } from 'node:fs/promises'

async function getAlumnos(filter = {}) {
    return readFile('./data/alumnos.json')
        .then(function (data) {
            return JSON.parse(data) // parse lo que hace es convertir el string en un objeto
        })
        .then(function (alumnos) {
            if (filter.deleted) {
                const alumnosFilter = []

                for (let i = 0; i < alumnos.length; i++) {
                    if (!alumnos[i].deleted) {
                        alumnosFilter.push(alumnos[i])
                    }
                }

                return alumnosFilter
            }
            else {
                return alumnos
            }
        })
        .catch(function (err) {
            return []
        })
}
async function saveAlumnos(alumnos) {
    return writeFile('./data/alumnos.json', JSON.stringify(alumnos))
} 

async function getAlumnoByLegajo(alumnoLegajo) {
    return getAlumnos()
        .then(function (alumnos) {
            for (let i = 0; i < alumnos.length; i++) {
                if (alumnos[i].legajo == alumnoLegajo) {
                    return alumnos[i]
                }
            }
            return null
        })
}
async function createAlumno(alumno) {
    const alumnos = await getAlumnos()

    const newAlumno = {
        ...alumno, 
        legajo: alumnos.length + 1
    }

    alumnos.push(newAlumno)

    await saveAlumnos(alumnos)

    return newAlumno
} 

async function editAlumno(legajo, alumno) {

    const alumnos = await getAlumnos()
    let editedAlumno = null

    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i].legajo == legajo) {
            alumnos[i] = {
                ...alumno,
                legajo: alumnos[i].legajo
            }

            console.log(alumnos[i])

            editedAlumno = alumnos[i]
            break;
        }
    }

    if (editedAlumno) {
        await saveAlumnos(alumnos)
    }

    return editedAlumno


} 


async function deleteAlumno(alumnoLegajo) {
    const alumnos = await getAlumnos()
    let deletedAlumno = null

    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i].legajo == alumnoLegajo) {
            alumnos[i].deleted = true

            deletedAlumno = alumnos[i]
            break;
        }
    }

    if (deletedAlumno) {
        await saveAlumnos(alumnos)
    }

    return deletedAlumno
}
 
export {
    getAlumnos,
    getAlumnoByLegajo,
    createAlumno,
    editAlumno,
    deleteAlumno
    
}