// router.get('/:id', async (req, res) =>{
//     const { id } = req.params;
//     let recipeTotal = await model.getDbinfo();
//     /* const recipeTotal = await Recipe.findByPk(id); */
//     /* res.status(200).send(recipeTotal); */
//     if(id) {
//         let recipeId = await recipeTotal.filter((el) => el.id == id);
//         recipeId.length
//         ? res.status(200).json(recipeId)
//         : res.status(404).send('No se encontró la receta con el id: ' + id);
//     }
// });

/* GET | /recipes/:idRecipe
Esta ruta obtiene el detalle de una receta específica. Es decir que devuelve un objeto con la información pedida en el detalle de una receta.
La receta es recibida por parámetro (ID).
Tiene que incluir los datos de los tipos de dietas asociados a la receta.
Debe funcionar tanto para las recetas de la API como para las de la base de datos.
📍 GET | /recipes/name?="..."
Esta ruta debe obtener todas aquellas recetas que coincidan con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
Debe poder buscarla independientemente de mayúsculas o minúsculas.
Si no existe la receta, debe mostrar un mensaje adecuado.
Debe buscar tanto las de la API como las de la base de datos.
📍 POST | /recipes
Esta ruta recibirá todos los datos necesarios para crear una nueva receta y relacionarla con los tipos de dieta solicitados.
Toda la información debe ser recibida por body.
Debe crear la receta en la base de datos, y esta debe estar relacionada con los tipos de dieta indicados (al menos uno). */

// pero lo que si tengo es controladores donde hago la logica , por ejemplo con este controlador traigo de la api y de bse de datos las recetas
// const getAllRecipe = async (req, res) => {
//   try {
//     const apiRecipe = await axios.get(
//       `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
//     );
//     let allApiRecipe = apiRecipe?.map((info) => info.data.results).flat();
//     allApiRecipe = allApiRecipe.map((recipe) => {
//       return {
//         id: recipe.id,
//         title: recipe.title,
//         summary: recipe.summary,
//         healtScore: recipe.healtScore,
//         steps: recipe.analyzedInstructions?.map((el) => el.steps.step),
//         diets: recipe.diets?.map((el) => el),
//       };
//     });
//     let bdRecipe = await Recipe.findAll({
//       include: [
//         {
//           model: Diet,
//           attributes: ["diets"],
//           through: {
//             attributes: [],
//           },
//         },
//       ],
//     });