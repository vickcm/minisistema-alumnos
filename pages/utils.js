function createPage(title, content) {
  let html;

  html = '<!DOCTYPE html><html><head><meta charset="UTF-8">';
  html += '<link rel="stylesheet" href="/css/styles.css">';
  html += '<link rel="stylesheet" href="/css/bootstrap.min.css">';

  html += "<title>" + title + "</title></head><body>";

  html += `<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand text-uppercase fs-6 text-secondary fw-bold" href="#">Sistema Alumnos</a>
   

      <ul class="navbar-nav">
       
        <li class="nav-item">
          <a class="nav-link" href="/alumnos">Lista Alumnos</a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link" href="/alumnos/nuevo">Cargar Alumnos</a>
        </li>
      </ul>
    </div>
  
</nav>`;


  html += content;
  html += "</body> </html>";

  return html;
}

function createAlumnoList(alumnos) {
  let content = '<ul>';
  for (let i = 0; i < alumnos.length; i++) {
    content += `<li> $(alumnos[i].nombre), $(alumnos[i].apellido) </li>`;
  }
  content += "</ul>";
  return content;
}



export { createPage, createAlumnoList };
