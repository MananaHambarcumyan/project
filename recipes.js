fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(data => {
        const recipes = data.recipes;
        const container = document.getElementById('recipes-container');

        container.innerHTML = recipes.map(recipe => `
            <div class="food-items">
            <img src="https://picsum.photos/300/200?random=${recipe.image}" alt="${recipe.name}">
            <div class = "details">
                <div class="details-sub">
                    <h3>${recipe.name}</h3>
                    <h5>
                        <i class="fa-solid fa-clock"></i> Prep: ${recipe.prepTime || '15 mins'} 
                        <br> Cook: ${recipe.cookTime || '45 mins'}
                    </h5>
                </div>
                 <button onclick="openPage(${recipe.id})">Detail</button>
            </div>
        </div>
    `).join('');
    })
    .catch(err => console.error('Error fetching recipes:', err));

function openPage(recipeId){
    window.location.href = `recipe-details.html?id=${recipeId}`;
}

const params = new URLSearchParams(window.location.search);
const recipeId = params.get('id');

if(!recipeId){
    document.getElementById('recipe-details').innerHTML = `
    <p>Error: Recipe ID not found in the URL.</p>`;
}else{
    fetch(`https://dummyjson.com/recipes/${recipeId}`)
    .then(res => res.json())
    .then(recipe => {
        document.getElementById('recipe-details').innerHTML = `
            <img src="https://picsum.photos/300/200?random=${recipe.image}" alt="${recipe.name}">
            <div class="details">
                <h3>${recipe.name}</h3>
                <h4>Ingredients:</h4>
                <p>${recipe.ingredients.join(', ')}</p>
                <h4>Instructions:</h4>
                <p>${recipe.instructions}</p>
                <h5>
                    <i class="fa-solid fa-clock"></i> Prep: ${recipe.prepTime || '15 mins'} 
                    <br> Cook: ${recipe.cookTime || '45 mins'}</h5>
            </div>  `;
    })
    .catch(err => {
        document.getElementById('recipe-details').innerHTML = `
            <p>Error:Unable to fetch recipe details.</p>
        `;
    console.log(err);
    
    });
}