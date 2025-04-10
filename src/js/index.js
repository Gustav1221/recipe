require("@babel/polyfill")
import axios from "axios";
import Search from './model/Search'
import * as searchView from './view/searchView'
import {elements, renderLoader, clearLoader} from './view/base'


let search = new Search('pasta');
/* 
web app state
-hailtiin query, ur dun
-tuhain uzuulj baigaa jor
-zahialj baigaa joriin nairlaguud
 */
const state = {};
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