import axios from "axios";
import { elements } from "../view/base";
import uniqid from 'uniqid';
export default class List{
    constructor(){
        this.items = [];
    }
    deleteItem(id){
        //id gedeg ID-tei ortsiin indexiig massivaas haij olno
        const index = this.items.findIndex(el=> el.id === id);
        //ug index deerh elementiig massivaas ustgana
        this.items.splice(index, 1);

    }
    addItem(item){
        let newItem = {
            id : uniqid(),
            item
        }
        this.items.push(newItem);
        return newItem;
    }
}