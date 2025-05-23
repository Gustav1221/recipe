import { elements } from "./base";
export const renderList =(item)=>{
    const html = 
    `<li class="shopping__item" data-itemid=${item.id}>
                    <div class="shopping__count">
                        <input type="number" value="500" step="100">
                        <p>g</p>
                    </div>
                    <p class="shopping__description">${item.item}</p>
                    <button class="shopping__delete btn-tiny">
                        <svg>
                            <use href="img/icons.svg#icon-circle-with-cross"></use>
                        </svg>
                    </button>
                </li>`
    elements.shoppingList.insertAdjacentHTML('beforeend', html);
}
export const clearList =()=>{
    elements.shoppingList.innerHTML = '';
}
export const deleteItem =id=>{
    //class bish atributiaarn shuuj baigaa uchraas [] hereglej bn
    const item = document.querySelector(`[data-itemid=${id}]`);
    item.parentElement.removeChild(item);
}