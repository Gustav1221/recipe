import { elements } from "./base";
export const toggleLikeBtn = (isLiked)=>{
    const likedString = isLiked ? "icon-heart" : "icon-heart-outlined"
    document.querySelector('.recipe__love use').setAttribute('href', `img/icons.svg#${likedString}`)
}
export const toggleLikeMenu = (numberOfLikes) =>{
    elements.MenuOfLikes.style.visibility = numberOfLikes > 0 ? 'visible' : 'hidden'
}

export const renderLike = (newLike)=>{
    const likehtml = `<li>
                    <a class="likes__link" href="#${newLike.title}">
                        <figure class="likes__fig">
                            <img src="${newLike.img}" alt="Test">
                        </figure>
                        <div class="likes__data">
                            <h4 class="likes__name">${newLike.title}</h4>
                            <p class="likes__author">${newLike.author}</p>
                        </div>
                    </a>
                </li>`
    elements.likesList.insertAdjacentHTML('beforeend', likehtml);
}

export const deleteLike = id =>{
    const li = document.querySelector(`.likes__link[href*="${id}"]`).parentElement;
    if(li) li.parentElement.removeChild(li);
}