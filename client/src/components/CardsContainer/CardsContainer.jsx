import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

const CardsContainer = () => {
    const recipes = [
        {
          "id": 715415,
          "name": "Red Lentil Soup with Chicken and Turnips",
          "summary": "Red Lentil Soup with Chicken and Turnips might be a good recipe to expand your main course repertoire. This recipe serves 8 and costs $3.0 per serving. One serving contains <b>477 calories</b>, <b>27g of protein</b>, and <b>20g of fat</b>. It is brought to you by Pink When. 1866 people have tried and liked this recipe. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. From preparation to the plate, this recipe takes approximately <b>55 minutes</b>. It is a good option if you're following a <b>gluten free and dairy free</b> diet. Head to the store and pick up salt and pepper, canned tomatoes, flat leaf parsley, and a few other things to make it today. Overall, this recipe earns a <b>spectacular spoonacular score of 99%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/red-lentil-and-chicken-soup-682185\">Red Lentil and Chicken Soup</a>, <a href=\"https://spoonacular.com/recipes/red-lentil-and-chicken-soup-1058971\">Red Lentil and Chicken Soup</a>, and <a href=\"https://spoonacular.com/recipes/red-lentil-soup-34121\">Red-Lentil Soup</a>.",
          "healthScore": 100,
          "image": "https://spoonacular.com/recipeImages/715415-312x231.jpg"
        },
        {
          "id": 716406,
          "name": "Asparagus and Pea Soup: Real Convenience Food",
          "summary": "Asparagus and Pea Soup: Real Convenience Food requires approximately <b>20 minutes</b> from start to finish. Watching your figure? This gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipe has <b>217 calories</b>, <b>11g of protein</b>, and <b>8g of fat</b> per serving. This recipe serves 2. For <b>$1.78 per serving</b>, this recipe <b>covers 25%</b> of your daily requirements of vitamins and minerals. <b>Autumn</b> will be even more special with this recipe. It works well as a hor d'oeuvre. 207 people have tried and liked this recipe. It is brought to you by fullbellysisters.blogspot.com. A mixture of vegetable broth, evoo, garlic, and a handful of other ingredients are all it takes to make this recipe so yummy. All things considered, we decided this recipe <b>deserves a spoonacular score of 96%</b>. This score is outstanding. Try <a href=\"https://spoonacular.com/recipes/asparagus-and-pea-soup-real-convenience-food-1393979\">Asparagus and Pea Soup: Real Convenience Food</a>, <a href=\"https://spoonacular.com/recipes/asparagus-and-pea-soup-real-convenience-food-1376201\">Asparagus and Pea Soup: Real Convenience Food</a>, and <a href=\"https://spoonacular.com/recipes/asparagus-and-pea-soup-real-convenience-food-1362341\">Asparagus and Pea Soup: Real Convenience Food</a> for similar recipes.",
          "healthScore": 100,
          "image": "https://spoonacular.com/recipeImages/716406-312x231.jpg"
        },
        {
          "id": 664147,
          "name": "Tuscan White Bean Soup with Olive Oil and Rosemary",
          "summary": "Tuscan White Bean Soup with Olive Oil and Rosemary is a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> recipe with 6 servings. This main course has <b>242 calories</b>, <b>16g of protein</b>, and <b>1g of fat</b> per serving. For <b>50 cents per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. It will be a hit at your <b>Autumn</b> event. 22 people found this recipe to be tasty and satisfying. Head to the store and pick up olive oil, rosemary, garlic, and a few other things to make it today. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. With a spoonacular <b>score of 79%</b>, this dish is good. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/white-bean-soup-with-pasta-and-rosemary-oil-drizzle-855454\">White Bean Soup with Pastan and Rosemary Oil Drizzle</a>, <a href=\"https://spoonacular.com/recipes/tuscan-white-bean-and-fennel-stew-with-orange-and-rosemary-105383\">Tuscan White Bean and Fennel Stew With Orange and Rosemary</a>, and <a href=\"https://spoonacular.com/recipes/tuscan-white-bean-soup-1054940\">Tuscan White Bean Soup</a>.",
          "healthScore": 94,
          "image": "https://spoonacular.com/recipeImages/664147-312x231.jpg"
        },
        {
          "id": 646738,
          "name": "Herbivoracious' White Bean and Kale Soup",
          "summary": "Herbivoracious' White Bean and Kale Soup might be a good recipe to expand your main course recipe box. One serving contains <b>332 calories</b>, <b>17g of protein</b>, and <b>10g of fat</b>. This recipe serves 6 and costs 78 cents per serving. 10 people were impressed by this recipe. It will be a hit at your <b>Autumn</b> event. Head to the store and pick up juice of lemon, carrot, dinosaur kale, and a few other things to make it today. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 94%</b>. This score is tremendous. <a href=\"https://spoonacular.com/recipes/kale-and-white-bean-soup-1214347\">Kale And White Bean Soup</a>, <a href=\"https://spoonacular.com/recipes/white-bean-and-kale-soup-15247\">White Bean And Kale Soup</a>, and <a href=\"https://spoonacular.com/recipes/white-bean-kale-soup-1571259\">White Bean Kale Soup</a> are very similar to this recipe.",
          "healthScore": 100,
          "image": "https://spoonacular.com/recipeImages/646738-312x231.jpg"
        },
        {
          "id": 663559,
          "name": "Tomato and lentil soup",
          "summary": "Tomato and lentil soup might be a good recipe to expand your main course recipe box. This recipe makes 4 servings with <b>340 calories</b>, <b>18g of protein</b>, and <b>8g of fat</b> each. For <b>$1.16 per serving</b>, this recipe <b>covers 34%</b> of your daily requirements of vitamins and minerals. It is perfect for <b>Autumn</b>. This recipe from Foodista requires bay leaf, onion, garlic, and carrots. 11 person were glad they tried this recipe. From preparation to the plate, this recipe takes about <b>45 minutes</b>. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. With a spoonacular <b>score of 96%</b>, this dish is great. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/tomato-and-lentil-soup-482854\">Tomato and Lentil Soup</a>, <a href=\"https://spoonacular.com/recipes/lentil-tomato-soup-398380\">Lentil-Tomato Soup</a>, and <a href=\"https://spoonacular.com/recipes/lentil-tomato-soup-108370\">Lentil & Tomato Soup</a>.",
          "healthScore": 100,
          "image": "https://spoonacular.com/recipeImages/663559-312x231.jpg"
        },
        {
          "id": 636787,
          "name": "Caldo Verde - Portuguese Kale Soup",
          "summary": "Caldo Verde - Portuguese Kale Soup takes approximately <b>45 minutes</b> from beginning to end. One portion of this dish contains around <b>20g of protein</b>, <b>10g of fat</b>, and a total of <b>493 calories</b>. For <b>$2.24 per serving</b>, this recipe <b>covers 35%</b> of your daily requirements of vitamins and minerals. This recipe serves 4. 13 people were glad they tried this recipe. It is a good option if you're following a <b>gluten free, dairy free, and whole 30</b> diet. It is brought to you by Foodista. It works well as a main course. It will be a hit at your <b>Autumn</b> event. Head to the store and pick up onion, carrots, pepper flakes, and a few other things to make it today. With a spoonacular <b>score of 92%</b>, this dish is outstanding. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/portuguese-kale-soup-caldo-verde-499535\">Portuguese Kale Soup (Caldo Verde)</a>, <a href=\"https://spoonacular.com/recipes/caldo-verde-portuguese-kale-soup-1274837\">Caldo Verde - Portuguese Kale Soup</a>, and <a href=\"https://spoonacular.com/recipes/caldo-verde-portuguese-kale-soup-598606\">Caldo Verde | Portuguese Kale Soup</a>.",
          "healthScore": 89,
          "image": "https://spoonacular.com/recipeImages/636787-312x231.jpg"
        },
        {
          "id": 715447,
          "name": "Easy Vegetable Beef Soup",
          "summary": "You can never have too many main course recipes, so give Easy Vegetable Beef Soup a try. This dairy free recipe serves 8 and costs <b>$3.45 per serving</b>. One serving contains <b>566 calories</b>, <b>45g of protein</b>, and <b>19g of fat</b>. 130 people were glad they tried this recipe. It will be a hit at your <b>Autumn</b> event. A mixture of salt, seasoning, on carrots, and a handful of other ingredients are all it takes to make this recipe so flavorful. It is brought to you by Pink When. From preparation to the plate, this recipe takes roughly <b>2 hours and 30 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 97%</b>, which is awesome. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/easy-vegetable-beef-soup-1050610\">Easy Vegetable Beef Soup</a>, <a href=\"https://spoonacular.com/recipes/easy-vegetable-beef-soup-177116\">Easy Vegetable-Beef Soup</a>, and <a href=\"https://spoonacular.com/recipes/easy-vegetable-beef-soup-459390\">Easy Vegetable Beef Soup</a>.",
          "healthScore": 65,
          "image": "https://spoonacular.com/recipeImages/715447-312x231.jpg"
        },
        {
          "id": 715385,
          "name": "Slow Cooker Baked Potato Soup",
          "summary": "Slow Cooker Baked Potato Soup might be a good recipe to expand your main course collection. This recipe serves 3. One portion of this dish contains approximately <b>35g of protein</b>, <b>33g of fat</b>, and a total of <b>884 calories</b>. For <b>$2.83 per serving</b>, this recipe <b>covers 36%</b> of your daily requirements of vitamins and minerals. 992 people were glad they tried this recipe. It is brought to you by Pink When. It is perfect for <b>Autumn</b>. If you have green onion tops, cream, water, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes roughly <b>9 hours</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 96%</b>. This score is excellent. Try <a href=\"https://spoonacular.com/recipes/slow-cooker-baked-potato-soup-569219\">Slow cooker baked potato soup</a>, <a href=\"https://spoonacular.com/recipes/slow-cooker-baked-potato-soup-1399117\">Slow Cooker Baked Potato Soup</a>, and <a href=\"https://spoonacular.com/recipes/slow-cooker-baked-potato-soup-731389\">Slow Cooker Baked Potato Soup</a> for similar recipes.",
          "healthScore": 45,
          "image": "https://spoonacular.com/recipeImages/715385-312x231.jpg"
        },
        {
          "id": 641057,
          "name": "Curried Butternut Squash and Apple Soup",
          "summary": "If you want to add more <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> recipes to your recipe box, Curried Butternut Squash and Apple Soup might be a recipe you should try. For <b>$1.41 per serving</b>, this recipe <b>covers 16%</b> of your daily requirements of vitamins and minerals. This recipe serves 1. One serving contains <b>134 calories</b>, <b>7g of protein</b>, and <b>3g of fat</b>. A mixture of a squirt sriracha, butternut squash, apple, and a handful of other ingredients are all it takes to make this recipe so yummy. It is perfect for <b>Autumn</b>. It works well as a hor d'oeuvre. This recipe from Foodista has 9 fans. From preparation to the plate, this recipe takes around <b>45 minutes</b>. Overall, this recipe earns an <b>awesome spoonacular score of 89%</b>. Similar recipes include <a href=\"https://spoonacular.com/recipes/curried-apple-butternut-squash-soup-620121\">Curried Apple + Butternut Squash Soup</a>, <a href=\"https://spoonacular.com/recipes/curried-butternut-squash-and-apple-soup-836936\">Curried Butternut Squash and Apple Soup</a>, and <a href=\"https://spoonacular.com/recipes/curried-butternut-squash-apple-soup-crock-pot-94742\">Curried Butternut Squash & Apple Soup - Crock Pot</a>.",
          "healthScore": 81,
          "image": "https://spoonacular.com/recipeImages/641057-312x231.jpg"
        },
        {
          "id": 660405,
          "name": "Smoky Black Bean Soup With Sweet Potato & Kale",
          "summary": "You can never have too many main course recipes, so give Smoky Black Bean Soup With Sweet Potato & Kale a try. One serving contains <b>555 calories</b>, <b>23g of protein</b>, and <b>7g of fat</b>. This recipe serves 6. For <b>$2.62 per serving</b>, this recipe <b>covers 41%</b> of your daily requirements of vitamins and minerals. 5 people have tried and liked this recipe. This recipe from Foodista requires chicken broth, onion, black beans, and salt & pepper. From preparation to the plate, this recipe takes around <b>10 hours and 30 minutes</b>. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. It is a good option if you're following a <b>gluten free, dairy free, and lacto ovo vegetarian</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 96%</b>. This score is amazing. Similar recipes include <a href=\"https://spoonacular.com/recipes/smoky-sweet-potato-and-black-bean-tacos-524599\">Smoky Sweet Potato and Black Bean Tacos</a>, <a href=\"https://spoonacular.com/recipes/smoky-sweet-potato-and-black-bean-tacos-1316245\">Smoky Sweet Potato and Black Bean Tacos</a>, and <a href=\"https://spoonacular.com/recipes/sweet-and-smoky-sriracha-black-bean-soup-557795\">Sweet and Smoky Sriracha Black Bean Soup</a>.",
          "healthScore": 100,
          "image": "https://spoonacular.com/recipeImages/660405-312x231.jpg"
        },
        {
          "id": 716437,
          "name": "Chilled Cucumber Avocado Soup with Yogurt and Kefir",
          "summary": "Chilled Cucumber Avocado Soup with Yogurt and Kefir is a <b>gluten free, lacto ovo vegetarian, and primal</b> hor d'oeuvre. This recipe serves 3 and costs $2.1 per serving. One portion of this dish contains approximately <b>9g of protein</b>, <b>7g of fat</b>, and a total of <b>189 calories</b>. 171 person were impressed by this recipe. A mixture of avocado, kefir, onion, and a handful of other ingredients are all it takes to make this recipe so yummy. <b>Autumn</b> will be even more special with this recipe. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It is brought to you by fullbellysisters.blogspot.com. Overall, this recipe earns an <b>outstanding spoonacular score of 97%</b>. <a href=\"https://spoonacular.com/recipes/chilled-cucumber-avocado-and-yogurt-soup-21553\">Chilled Cucumber, Avocado, and Yogurt Soup</a>, <a href=\"https://spoonacular.com/recipes/chilled-cucumber-yogurt-soup-499125\">Chilled Cucumber-Yogurt Soup</a>, and <a href=\"https://spoonacular.com/recipes/chilled-cucumber-mint-yogurt-soup-608062\">Chilled Cucumber Mint Yogurt Soup</a> are very similar to this recipe.",
          "healthScore": 40,
          "image": "https://spoonacular.com/recipeImages/716437-312x231.jpg"
        },
        {
          "id": 636602,
          "name": "Butternut Squash Soup (In Half An Hour!)",
          "summary": "Butternut Squash Soup (In Half An Hour!) requires about <b>30 minutes</b> from start to finish. For <b>$1.25 per serving</b>, you get a hor d'oeuvre that serves 8. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has <b>252 calories</b>, <b>9g of protein</b>, and <b>6g of fat</b> per serving. It will be a hit at your <b>Autumn</b> event. 5 people have made this recipe and would make it again. It is brought to you by Foodista. Head to the store and pick up salt and pepper, black-eyed peas, collard greens, and a few other things to make it today. With a spoonacular <b>score of 95%</b>, this dish is great. Try <a href=\"https://spoonacular.com/recipes/half-hour-chili-1336421\">Half-Hour Chili</a>, <a href=\"https://spoonacular.com/recipes/half-hour-chili-1268407\">Half-Hour Chili</a>, and <a href=\"https://spoonacular.com/recipes/half-hour-chili-695480\">Half-Hour Chili</a> for similar recipes.",
          "healthScore": 86,
          "image": "https://spoonacular.com/recipeImages/636602-312x231.jpg"
        },
        {
          "id": 652393,
          "name": "Moosewood Lentil Soup",
          "summary": "Moosewood Lentil Soup might be a good recipe to expand your main course recipe box. This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe serves 6 and costs <b>74 cents per serving</b>. One portion of this dish contains roughly <b>26g of protein</b>, <b>4g of fat</b>, and a total of <b>396 calories</b>. A mixture of pepper, lentils, salt, and a handful of other ingredients are all it takes to make this recipe so yummy. 2 people found this recipe to be flavorful and satisfying. It is perfect for <b>Autumn</b>. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 95%</b>. This score is spectacular. Similar recipes are <a href=\"https://spoonacular.com/recipes/moosewood-lentil-soup-1319699\">Moosewood Lentil Soup</a>, <a href=\"https://spoonacular.com/recipes/moosewood-mushroom-barley-soup-143909\">Moosewood Mushroom Barley Soup!</a>, and <a href=\"https://spoonacular.com/recipes/hungarian-mushroom-soup-from-the-moosewood-cookbook-143242\">Hungarian Mushroom Soup, from the Moosewood Cookbook</a>.",
          "healthScore": 100,
          "image": "https://spoonacular.com/recipeImages/652393-312x231.jpg"
        },
        {
          "id": 715391,
          "name": "Slow Cooker Chicken Taco Soup",
          "summary": "Forget going out to eat or ordering takeout every time you crave Mexican food. Try making Slow Cooker Chicken Taco Soup at home. One portion of this dish contains about <b>24g of protein</b>, <b>4g of fat</b>, and a total of <b>312 calories</b>. This gluten free and dairy free recipe serves 6 and costs <b>$1.41 per serving</b>. 2182 people have tried and liked this recipe. It works well as a main course. If you have black beans, chili beans, canned tomatoes, and a few other ingredients on hand, you can make it. It is perfect for <b>Autumn</b>. From preparation to the plate, this recipe takes around <b>8 hours and 5 minutes</b>. It is brought to you by Pink When. Overall, this recipe earns an <b>awesome spoonacular score of 95%</b>. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/slow-cooker-chicken-taco-soup-1399115\">Slow Cooker Chicken Taco Soup</a>, <a href=\"https://spoonacular.com/recipes/slow-cooker-chicken-taco-soup-1228993\">Slow Cooker Chicken Taco Soup</a>, and <a href=\"https://spoonacular.com/recipes/slow-cooker-chicken-taco-soup-1369307\">Slow Cooker Chicken Taco Soup</a>.",
          "healthScore": 28,
          "image": "https://spoonacular.com/recipeImages/715391-312x231.jpg"
        },
        {
          "id": 636230,
          "name": "Broccoli with cheese soup",
          "summary": "Broccoli with cheese soup could be just the <b>lacto ovo vegetarian</b> recipe you've been looking for. This recipe serves 4 and costs 66 cents per serving. One serving contains <b>120 calories</b>, <b>7g of protein</b>, and <b>5g of fat</b>. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. 18 people found this recipe to be delicious and satisfying. Head to the store and pick up broccoli florets, flour, milk, and a few other things to make it today. It is brought to you by Foodista. A few people really liked this side dish. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 95%</b>, which is great. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/broccoli-cheese-soup-475635\">Broccoli Cheese Soup</a>, <a href=\"https://spoonacular.com/recipes/broccoli-cheese-soup-1056015\">Broccoli Cheese Soup</a>, and <a href=\"https://spoonacular.com/recipes/broccoli-cheese-soup-395199\">Broccoli Cheese Soup</a>.",
          "healthScore": 54,
          "image": "https://spoonacular.com/recipeImages/636230-312x231.jpg"
        },
        {
          "id": 975070,
          "name": "Instant Pot Chicken Taco Soup",
          "summary": "Instant Pot Chicken Taco Soup could be just the <b>gluten free and dairy free</b> recipe you've been looking for. This recipe serves 4. One serving contains <b>346 calories</b>, <b>25g of protein</b>, and <b>8g of fat</b>. For <b>$2.72 per serving</b>, this recipe <b>covers 40%</b> of your daily requirements of vitamins and minerals. It works best as a main course, and is done in around <b>25 minutes</b>. If you have chilis, water, corn, and a few other ingredients on hand, you can make it. 6 people have tried and liked this recipe. It is perfect for <b>Autumn</b>. This recipe is typical of Mexican cuisine. It is brought to you by Pink When. With a spoonacular <b>score of 95%</b>, this dish is tremendous. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/instant-pot-chicken-taco-soup-1336121\">Instant Pot Chicken Taco Soup</a>, <a href=\"https://spoonacular.com/recipes/instant-pot-chicken-taco-soup-1337813\">Instant Pot Chicken Taco Soup</a>, and <a href=\"https://spoonacular.com/recipes/instant-pot-chicken-taco-soup-944691\">Instant Pot Chicken Taco Soup</a>.",
          "healthScore": 83,
          "image": "https://spoonacular.com/recipeImages/975070-312x231.jpg"
        },
        {
          "id": 649886,
          "name": "Lemony Greek Lentil Soup",
          "summary": "Lemony Greek Lentil Soup is a Mediterranean main course. One serving contains <b>368 calories</b>, <b>23g of protein</b>, and <b>4g of fat</b>. For <b>88 cents per serving</b>, this recipe <b>covers 36%</b> of your daily requirements of vitamins and minerals. This recipe serves 6. It is perfect for <b>Autumn</b>. 2 people were impressed by this recipe. A mixture of brown lentils, , pepper, and a handful of other ingredients are all it takes to make this recipe so flavorful. From preparation to the plate, this recipe takes about <b>45 minutes</b>. It is brought to you by Foodista. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 86%</b>. This score is spectacular. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/lemony-greek-lentil-soup-1218953\">Lemony Greek Lentil Soup</a>, <a href=\"https://spoonacular.com/recipes/lemony-lentil-soup-1335677\">Lemony Lentil Soup</a>, and <a href=\"https://spoonacular.com/recipes/lemony-lentil-soup-961948\">Lemony Lentil Soup</a>.",
          "healthScore": 100,
          "image": "https://spoonacular.com/recipeImages/649886-312x231.jpg"
        }
      ]
      
    return(
        <div className={style.container}>
            {recipes.map(recipe => {
                return <Card
                    id= {recipe.id}
                    name= {recipe.name}
                    summery= {recipe.summary}
                    healthScore= {recipe.healthScore}
                    image= {recipe.image}
                    />
                })}

            </div>
      
    )
} 

export default CardsContainer;
