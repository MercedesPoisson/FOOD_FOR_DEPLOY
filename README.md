![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

# **FOODIE LOVERS** | Proyecto Individual

## **📌 OBJETIVOS**

-  Construir una Single Page Application utlizando las tecnologías: **React**, **Redux**, **Node**, **Express** y **Sequelize**.
-  Poner en práctica recursos básicos de estilos y diseño (UX : UI).
-  La idea de este proyecto es construir una aplicación web a partir de la API [**spoonacular**](https://spoonacular.com/food-api) en la que se pueda:

-  Buscar recetas.
-  Visualizar la información de las recetas.
-  Filtrarlas.
-  Ordenarlas.
-  Crear nuevas recetas.

<br />

---

## **⚠️ IMPORTANTE**

Es necesario contar minimamente con la última versión estable de NodeJS y NPM. Asegúrate de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto. Actualmente las versiónes necesarias son:

-  **Node**: 12.18.3 o mayor
-  **NPM**: 6.14.16 o mayor

Para verificar que versión tienes instalada:

```bash
node -v
npm -v
```

## **📋 PARA COMENZAR...**

1. Deberás forkear este repositorio para tener una copia del mismo en tu cuenta personal de GitHub.

2. Clona el repositorio en tu computadora para comenzar. El proyecto cuenta con dos carpetas: **`api`** y **`client`**. En estas carpetas estará el código del back-end y el front-end respectivamente.

3. En la carpeta **`api`** deberás crear un archivo llamado: **`.env`** que tenga la siguiente forma:

   ```env
       DB_USER=usuariodepostgres
       DB_PASSWORD=passwordDePostgres
       DB_HOST=localhost
   ```

4. Reemplazar **`usuariodepostgres`** y **`passwordDePostgres`** con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

5. Adicionalmente será necesario que crees, **desde psql (shell o PGAdmin)**, una base de datos llamada **`food`**. Si no realizas este paso de manera manual no podrás avanzar con el proyecto.

<br />

---

## **📖 ENUNCIADO GENERAL**


⚠️ Para las funcionalidades de filtrado y ordenamiento NO se puede utilizar los endpoints de la API externa que ya devuelven los resultados filtrados u ordenados.

**IMPORTANTE**: para poder utilizar la API es necesario crear una cuenta y obtener una ApiKey que luego deberá ser incluida en todos los request que hagamos. Esto se logra simplemente agregando **`?api_key={YOUR_API_KEY}`** al final de cada end-point. Agregar la clave en el archivo **`.env`** para que la misma no se suba al repositorio por cuestiones de seguridad.

### **Únicos end-points que se pueden utilizar**

-  [**Spoonacular**](https://api.spoonacular.com/recipes/complexSearch)
-  Para obtener mayor información sobre las recetas, como por ejemplo el tipo de dieta, debes agregar el flag **`&addRecipeInformation=true`** a ese end-point.
-  Para los tipos de dieta debes tener en cuenta las propiedades **vegetarian**, **vegan** y **glutenFree** por un lado, y también analizar las que se incluyan dentro de la propiedad **`diets`** por otro.
-  **Search By 'ID':** _"https://api.spoonacular.com/recipes/{id}/information"_

<br />


<br />

<div align="center">
<img src="./cooking.png" alt="" />
</div>
