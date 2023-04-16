import { createPage } from "../pages/utils.js";

function createAlumnoListPage(alumnos) {
  let html = '<div class="mx-auto col-md-6 mt-4">'
  html += '<h1 class="fw-bold text-secondary fs-4 text-center mt-3">Lista de Alumnos</h1>';
  html += '<ul class="list-group align-items-end">';

  for (let i = 0; i < alumnos.length; i++) {
    html += `<li class="m-2">${alumnos[i].nombre} ${alumnos[i].apellido},  Año: ${alumnos[i].anio}, Legajo:  ${alumnos[i].legajo} <a class="btn btn-primary ms-4" href="/alumnos/${alumnos[i].legajo}">Ver</a> <a class="btn btn-warning" href="/alumnos/${alumnos[i].legajo}/edit">Modificar</a> <a class="btn btn-danger" href="/alumnos/${alumnos[i].legajo}/delete">Eliminar</a></li>`;
  }

  html += "</ul>";
  html += "</div>";

  return createPage("Alumnos", html);
}

function createAlumnoPage(alumno) {
 let html = '<div class="col-3 p-4 mt-4 mx-auto card">'
  html += `<p class="fw-bold text-secondary fs-6 ms-2">  ${alumno.nombre}, ${alumno.apellido} </p>`;
  html += `<p class="text-secondary fs-6 ms-2">Año de inscripción: ${alumno.anio}</p>`;
  html += `<p class="text-secondary fs-6 ms-2">Número de legajo: ${alumno.legajo}</p>`;
  html += "</div>";

  return createPage(alumno.nombre, html);
}

function createAlumnoFormPage() {

  let html = '<div class="col-6 p-4 mt-4 mx-auto">'
  html += '<h1 class="fs-bold fs-6 ms-2 mb-4">Agregar Alumno Nuevo</h1>';

  html += '<form  action="/alumnos/nuevo" method="POST">';

  html +=
    '<input class="form-control d-block" type="text" name="nombre" placeholder="Nombre">';
  html +=
    '<input class="form-control d-block mt-2" type="text" name="apellido" placeholder="Apellido">';
  html +=
    '<input class="form-control d-block mt-2" type="text" name="anio" placeholder="Año inscripción">';

  html += '<button class="btn btn-primary mt-2" type="submit">Agregar</button>';
  html += "</form>";
  html += "</div>";

  return createPage("Agregar Alumno", html);
}

function createEditAlumnoFormPage(alumno) {
  let html = "<h1>Modificar Alumno</h1>";
  html += `<div class=" ms-2 col-6 mt-4">
    <form  action="/alumnos/${alumno.legajo}/edit" method="POST">
    <input class="form-control d-block" type="text" name="nombre" value="${alumno.nombre}" placeholder="Nombre">
    <input class="form-control d-block mt-2" type="text" name="apellido" value="${alumno.apellido}" placeholder="Apellido">
    <input class="form-control d-block mt-2" type="text" name="anio" value="${alumno.anio}" placeholder="Año inscripción">
    <button class="btn btn-warning mt-2" type="submit">Modificar</button>   
    </form>
    </div>`;

  return createPage("Modificar Alumno", html);
}

function createDeleteAlumnoFormPage(alumno) {
  let html= `<div class=" ms-2 col-6 mt-4 card mx-auto border border-danger">`
  html += `<p class="fw-bold  fs-6 ps-2 bg-danger">  ${alumno.nombre}, ${alumno.apellido} </p>`;
  html += `<p class="text-secondary fs-6 ms-2">Año de inscripción: ${alumno.anio}</p>`;
  html += `<p class="text-secondary fs-6 ms-2">Número de legajo: ${alumno.legajo}</p>`;

  html += `<form action="/alumnos/${alumno.legajo}/delete" method="POST">
    <p class="ms-2 fw-bold text-danger">Esta seguro de que quiere eliminarlo?</p>
        <button class="btn btn-danger m-2" type="submit">Eliminar</button>
    </form>`

  html += `</div>`;


    return createPage(alumno.nombre, html)
}


export {
  createAlumnoListPage,
  createAlumnoPage,
  createPage,
  createAlumnoFormPage,
  createEditAlumnoFormPage,
  createDeleteAlumnoFormPage

};
