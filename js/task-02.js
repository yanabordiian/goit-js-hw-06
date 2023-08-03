const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const allIngredients = document.getElementById("ingredients");
const listOfItems = ingredients.map((ingredient) =>{
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  return li;
})
allIngredients.append(...listOfItems);
