import axios from "axios";
export default class Recipe{
    constructor(id){
        this.id = id;
    }
    async doSearchById() {
        try{
            let resultRecipe = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`)
            this.publisher = resultRecipe.data.recipe.publisher;
            this.ingredients = resultRecipe.data.recipe.ingredients;
            this.publisher_url = resultRecipe.data.recipe.publisher_url;
            this.social_rank = resultRecipe.data.recipe.social_rank;
            this.source_url = resultRecipe.data.recipe.source_url;
            this.title = resultRecipe.data.recipe.title;
            this.image_url = resultRecipe.data.recipe.image_url;
    
        }catch(error){
            console.log(`Алдаа : ${error}`);
        }
    }
    calcTime (){
        //nairlaga burt oiroltsoogoor 5 minute zartsuulna gej tootsoolov
        this.time = this.ingredients.length * 5;
    }
    calcPorts(){
        this.ports = 4;
    }
}
