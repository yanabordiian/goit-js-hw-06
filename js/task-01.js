const categoriesList = document.querySelectorAll('#categories .item');

console.log('Number of categories:',categoriesList.length);

categoriesList.forEach(category => {
const categoryTitle = category.querySelector('h2').textContent;
console.log("Category:", categoryTitle);

const categoryEl = category.querySelectorAll('li');
console.log("Elements:", categoryEl.length);
})
