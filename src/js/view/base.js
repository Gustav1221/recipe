export const elements = {
    searchForm : document.querySelector('.search'),
    searchInput : document.querySelector('.search__field'),
    recipeView : document.querySelector('.recipe'),
    searchResultList : document.querySelector('.results__list'),
    searchResultDiv : document.querySelector('.results'),
    pageButtons : document.querySelector('.results__pages'),
    shoppingList : document.querySelector('.shopping__list'),
    shopping : document.querySelector('.shopping')
}
export const elementStrings = {
    loader : 'loader'
}

export const renderLoader = parent =>{
    const loader  = `
     <div class=${elementStrings.loader}>
        <img src="img/bouncing-circles.svg" style="width: 50px; height: 50px; filter: brightness(0) saturate(100%); margin-top: -30px;" /> 
    </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader);
}
export const clearLoader = ()=>{
    const loader  = document.querySelector(`.${elementStrings.loader}`)
    if(loader) loader.parentElement.removeChild(loader);
}
