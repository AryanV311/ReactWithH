
export default function RecipeData() {

  return (
   <div>
     <h1>Recipees</h1>
     <div>
       {
          recipes.map((recipe,index) => 
        <div key={index}>
        <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map((ingredients,index) => <li key={index}>{ingredients}</li>)}
          </ul>
        </div>
    )
       }
     </div>
   </div>
  )
}


export const recipes = [{
    id: 'greek-salad',
    name: 'Greek Salad',
    ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
  }, {
    id: 'hawaiian-pizza',
    name: 'Hawaiian Pizza',
    ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
  }, {
    id: 'hummus',
    name: 'Hummus',
    ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
  }];
  