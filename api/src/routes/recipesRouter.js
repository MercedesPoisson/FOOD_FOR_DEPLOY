// const { Router } = require("express");

/*GET | /recipes/:idRecipe
Esta ruta obtiene el detalle de una receta específica. Es decir que devuelve un objeto con la información pedida en
 el detalle de una receta.
La receta es recibida por parámetro (ID).
Tiene que incluir los datos de los tipos de dietas asociados a la receta.
Debe funcionar tanto para las recetas de la API como para las de la base de datos.
📍 GET | /recipes/name?="..."
Esta ruta debe obtener todas aquellas recetas que coincidan con el nombre recibido por query. 
(No es necesario que sea una coincidencia exacta).
Debe poder buscarla independientemente de mayúsculas o minúsculas.
Si no existe la receta, debe mostrar un mensaje adecuado.
Debe buscar tanto las de la API como las de la base de datos.
📍 POST | /recipes
Esta ruta recibirá todos los datos necesarios para crear una nueva receta y relacionarla con los tipos de dieta solicitados.
Toda la información debe ser recibida por body.
Debe crear la receta en la base de datos, y esta debe estar relacionada con los tipos de dieta indicados (al menos uno).*/



// module.exports = recipesRouter;