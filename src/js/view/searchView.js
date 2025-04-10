import Search from "../model/Search";
import {elements} from './base'
let recipeFig = document.querySelector('.recipe__fig');
//private function
const renderRecipe = recipe =>{
    const markup = `<li>
                    <a class="results__link results__link" href="#${recipe.recipe_id
                    }">
                        <figure class="results__fig">
                            <img src="${recipe.image_url}" alt="Test">
                        </figure>
                        <div class="results__data">
                            <h4 class="results__name">${recipe.title}</h4>
                            <p class="results__author">${recipe.publisher}</p>
                        </div>
                    </a>
                </li>`
    //ul ruugee nemne
    elements.searchResultList.insertAdjacentHTML('beforeend', markup);
}
export const clearSearch = ()=>{
    elements.searchInput.value = '';
}
export const clearList = ()=>{
    elements.searchResultList.innerHTML = '';
}


export const getInput = ()=> elements.searchInput.value;
export const renderRecipes = (recipes) => {
    recipes.forEach(renderRecipe);
}
