
Materia **Aplicaciones Híbridas**, Docente: **Brian Lara**, Desarrollo Web **Da Vinci**

# Actividad - Mini Sistema

-   [ ] Crear un servidor usando express que escuche el puerto 2023
-   [ ] En la ruta Inicio (**/**) debe mostrar una pantalla de bienvenida con un link a “Lista de Alumnos”
-   [ ] En la ruta Lista de Alumnos (**/alumnos**)
    -   [ ] Sebe mostrar la lista de alumnos registrados en el sistema
    -   Los alumnos tienen
        -   legajo - El identificador del alumno
        -   nombre - Nombre del alumno
        -   apellido - Apellido del alumno
        -   año - Año en que se inscribió en el sistema
    -   [ ] Para cada alumno se debe visualizar un link para ver el alumno, la ruta para ver el alumno debe ser (**/alumnos/[LEGAJO DEL ALUMNO]**)

### Aclaraciones

-   [ ] Los datos se deben almacenar en **/data/alumnos.json**
-   [ ] Debe estar debidamente separada los servicios, controladores, vistas y rutas

### Extra #01

-   [ ] Se debe mostrar un link para agregar un nuevo alumno, que redireccione a la ruta Agregar Alumno (**/alumnos/nuevo**)
-   [ ] La ruta Agregar Alumno (**/alumnos/nuevo**)
    -   [ ] Debe mostrar un formulario que solicite los datos necesarios para crear un nuevo alumno en el sistema
    -   [ ] El formulario debe enviar los datos a (**/alumnos/nuevo**)

### Extra #02

-   [ ] Agregar un botón que permita modificar los datos de un alumno existente
    -   [ ] Debe mostrar un formulario con los datos precargados de dicho alumno y me debe poder modificar todos los datos excepto el legajo (ya que este ultimo es el identificador del alumno)

### Extra #03

-   [ ] Agregar un botón a la lista de alumnos para eliminar el alumno
