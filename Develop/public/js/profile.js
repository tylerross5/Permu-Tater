const addNewRecipe= async (event) => {
    event.preventDefault();

    const name= document.querySelector('#recipe-idMeal').value.trim();
    const type= document.querySelector('recipes-Category');
    const instructions=document.querySelector('recipes-Instructions');
    const picture= document.querySelector('recipes-MealThumb');

    if(name && type && instructions && picture){
        const response = await fetch('/api/recipes', {
            method:'POST',
            body:JSON.stringify({name, type, instrcutions, picture}),
        });
        if (response.ok){
            document.location.replace('/profile');
        } else{
            alert("Could not create recipe");
        }
    }
};

const deleteRecipe = async (event) =>{
    if (event.target.hasattribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response=await fetch(`/api/projects/${id}`, {
            method:'DELETE'
        });
        if (response.ok){
            document.location.replace('/profile');
        } else{
            alert('Could not delete project');
        }
    }
};

document
    .querySelector('.create-recipe')
    .addEventListener('submit', addNewRecipe);
document
    .querySelector('.recipe-list')
    .addEventListener('click', deleteRecipe);