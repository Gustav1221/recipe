require("@babel/polyfill")
import axios from "axios";
import Search from './model/Search'
import Recipe from './model/recipe'
import List from "./model/list";
import Like from "./model/like"
import * as searchView from './view/searchView'
import * as recipeView from './view/recipeView'
import * as listView from './view/listView'
import {elements, renderLoader, clearLoader} from './view/base'

/* 
web app state
-hailtiin query, ur dun
-tuhain uzuulj baigaa jor
-zahialj baigaa joriin nairlaguud
 */
const state = {};
//Хайлтын контроллер
async function controlSearch(){
    //1.webees hailtiin tulhuur ugiig gargaj avna
    const query = searchView.getInput();
    if(query){
    //2.shineer hailtiin object uusgene
    state.search = new Search(query);
    //3.hailt hiihed zoriulj UI-iig beltgene
    searchView.clearSearch();
    searchView.clearList();
    renderLoader(elements.searchResultDiv);
    //4. hailtiig guitsetgene
    await state.search.doSearch();
    //5.hailtiin ur dung delgetsend uzuulne
    clearLoader();
    if(state.search.result === undefined) alert('Хайлтаар илэрцгүй')
    else searchView.renderRecipes(state.search.result)
    }
}
elements.searchForm.addEventListener('submit', e=>{
    e.preventDefault();
    controlSearch();
})
elements.pageButtons.addEventListener('click', e =>{
    const btn = e.target.closest('.btn-inline')

    if(btn){
        searchView.clearList();
    const gotoPageNumber = parseInt(btn.dataset.goto);
    searchView.renderRecipes(state.search.result,gotoPageNumber)
    }
})

//Жорын контроллер
async function controlRecipe () {
    //1. URL aas id-g salgaj avna
    const id = window.location.hash.replace('#','');
    //2. Joriin modeliig uusgene
    if(id){
        state.recipe = new Recipe(id)
        //3  UI delgetsiig beltgene
        recipeView.clearRecipe();
        renderLoader(elements.recipeView);
        recipeView.highlightSelectedRecipe(id);
        //4. Joroo tataj avchirna
        await state.recipe.doSearchById();
        //5. Joriig guitsetgeh hugatsaa bolon ortsiig tootsoolno
        state.recipe.calcTime();
        state.recipe.calcPorts();
        //6. Joroo delgetsend gargana
        clearLoader();
        recipeView.renderDetail(state.recipe);
    }
}
['hashchange','load'].forEach(el=> window.addEventListener(el,controlRecipe))

//Nairlaganii controller
const controlList =()=> {
    //1. Nairlaganii modeliig uusgene
    state.list = new List();
    // Umnu baisan nairlaguudiig ustgana.
    listView.clearList();
    //2. Ug modelruu odoo haragdaj baigaa jornii buh nairlagiig avch hiine
    state.recipe.ingredients.forEach(n=> {
        const item = state.list.addItem(n)
        listView.renderList(item);
    }
    );
}

//Like-iin controller
const controlLike =()=>{
    //1. Likenii modeliig uusgene
    if(!state.like)state.like = new Like();
    // Odoo haragdaj baigaa joriin id-g olj avah
    const currentRecipeId = state.recipe.id;
    //terhuu joroo likelsan esehiig shalgah
    if(state.like.isLiked(currentRecipeId)){
        // Likelsan bol like-iig boliulna
        state.like.deleteLike(currentRecipeId)
        console.log(state.like)
    }else{  
        //likelaagui bol likelana
        state.like.addLike(currentRecipeId,state.recipe.title, state.recipe.publisher, state.recipe.image_url)
        console.log(state.like)
    }
}

elements.recipeView.addEventListener('click',e =>{
    if(e.target.matches('.recipe__btn, .recipe__btn *')){
        controlList();
    }else if(e.target.matches('.recipe__love, .recipe__love *')){
        controlLike();
    }
})
elements.shoppingList.addEventListener('click', e=>{
    if(e.target.matches('.shopping__delete, .shopping__delete *')){
         //click hiisenli elementiin data-itemid atributeiig shuuj gargaj avah
    const id = e.target.closest('.shopping__item').dataset.itemid;

    //oldson id-tei ortsiig modeloos ustgana
    state.list.deleteItem(id);
    //delgetsees iim id-tei ortsiig ustgana
    listView.deleteItem(id);
    }
})
