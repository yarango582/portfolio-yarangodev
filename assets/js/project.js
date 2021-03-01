export default class Project{

    getProjects(){  

        let app =  [];
        let matterApp = {
            name: 'Matter-App',
            description: `Project based on Matter App, its function is to give and receive feedback on specific skills.
            `,
            categorie: 'API REST',
            url: 'https://matterapp.netlify.app/'
        }
        let triviaApp = {
            name: 'Trivia-App',
            description: `Project Trivia App.<br>
            Application to retrieve trivia questions.
            `,
            categorie: 'API REST',
            url: 'https://trivia-app-yarango.netlify.app'
        }
        let pokeAPI = {
            name: 'Poke API',
            description: 'RESTFul API - ReactJS',
            categorie: 'API REST',
            url: 'https://pokedex-yarangodev.netlify.app/'
        }
        let servidorNode = {
            name: 'Servidor Auth - Node',
            description: 'Servidor Auth, JWT, Node, Express, Babel, API',
            categorie: 'API REST',
            url: 'https://github.com/yarango582/servidor_node'
        }

        app.push(matterApp);
        app.push(triviaApp);
        app.push(pokeAPI);
        app.push(servidorNode);
        
        return app;
    }

}

