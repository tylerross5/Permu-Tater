const addNewRecipe= async (event) => {
    event.preventDefault();

    const name= document.querySelector('#recipe-idMeal').value.trim();
    const type= document.querySelector('recipes-Category');
    const instructions=document.querySelector('recipes-Instructions');

    if(name && type && instructions ){
        const response = await fetch('/controllers/recipeRoute', {
            method:'POST',
            body:JSON.stringify({name, type, instrcutions}),
        });
        if (response.ok){
            document.location.replace('/profile');
        } else{
            alert("Not able to create recipe");
        }
    }
};

const deleteRecipe = async (event) =>{
    if (event.target.hasattribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response= await fetch(`/controllers/recipeRoute/${id}`, {
            method:'DELETE'
        });
        if (response.ok){
            document.location.replace('/profile');
        } else{
            alert('Not able to delete recipe');
        }
    }
};

document
    .querySelector('.create-recipe')
    .addEventListener('submit', addNewRecipe);
document
    .querySelector('.recipe-list')
    .addEventListener('click', deleteRecipe);