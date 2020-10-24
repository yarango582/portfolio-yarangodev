import Portfolio from './portfolio.js';
import Categories from './categories.js';
import Project from './project.js';

export default class UI{

    printCategories(){

        let filtre = [];
        let categories = new Categories();
        filtre = categories.getCategories();
        let container = document.getElementById('categorie');
        container.innerHTML = '';

        filtre.forEach((categorie, index) =>{

            container.innerHTML += 
            `                    
            <li class="category-list__item">
                <a class="category" type="button" id="button-categorie-${index+1}">${categorie}</a>
                </li>
            `
        })

        let buttonsCategorie = document.getElementsByClassName('category');

        for(let i = 0; i<buttonsCategorie.length; i++){

            buttonsCategorie.item(i).addEventListener('click', () =>{
                buttonsCategorie.item(i).toggleAttribute('selected');
            })
        }

    }

}