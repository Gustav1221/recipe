export default class Like{
    constructor() {
        this.likedItems = []
    }

    addLike(id,title,author,img){
        let like = {
            id,
            title,
            author,
            img
        }
        this.likedItems.push(like);
        return like;
    }

    deleteLike(id){
        const index = this.likedItems.findIndex(el=> el.id === id)
        this.likedItems.splice(index,1);
    }
    isLiked(id){
        /* if(this.likedItems.findIndex(el=> el.id===id) === -1) return false;
        else return true; */
        return this.likedItems.findIndex(el=> el.id===id) !== -1;
    }
    getNumberOfLikes(){
        return this.likedItems.length
    }
}