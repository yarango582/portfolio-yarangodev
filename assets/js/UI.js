import Categories from './categories.js';
import Project from './project.js';

export default class UI{

    // printCategories(){

    //     let filtre = [];
    //     let categories = new Categories();
    //     filtre = categories.getCategories();
    //     let container = document.getElementById('categorie');
    //     container.innerHTML = '';

    //     filtre.forEach((categorie, index) =>{

    //         container.innerHTML += 
    //         `                    
    //         <li class="category-list__item">
    //             <a class="category" type="button" id="button-categorie-${index+1}">${categorie}</a>
    //             </li>
    //         `
    //     })

    //     let buttonsCategorie = document.getElementsByClassName('category');

    //     function cleanCategories(){
    //         const buttonsCategorie = document.getElementsByClassName('category');
    //         for(let j = 0; j<buttonsCategorie.length; j++){
    //             buttonsCategorie.item(j).classList.remove('selected');
    //         }
    //     }

    //     buttonsCategorie.item(0).classList.toggle('selected'); //default

    //     for(let i = 0; i<buttonsCategorie.length; i++){

            
    //         buttonsCategorie.item(i).addEventListener('click', () =>{

    //             cleanCategories(); //reinicia las clases
    //             buttonsCategorie.item(i).classList.toggle('selected');//asigna nueva
                
    //         })
    //     }

    // }

    printCardPortfolio(){
        
        let project = new Project;
        let app = [];
        app = project.getProjects();
        let container = document.getElementById('container-cards');
        container.innerHTML = '';

        app.forEach((card, index) => {

            container.innerHTML += `
            <div class="col-12 col-sm-12 col-md-4 col-lg-4">
            <div class="card" id="card-${index+1}" style="height: 16rem;>
                <h3 class="card-title">
                    <strong>${card.name}</strong>
                </h3>
                <p class="card-text">
                    ${card.description}
                </p>
                <a href="${card.url}" class="card-button" target="_blank"></a>
            </div>
            </div>
            `;


        })
        
    }
    

}