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
        let smartTraining = {
            name: 'Smart-Training',
            description: 'Application designed for the registration management of SmartTraining Gym',
            categorie: 'Brand',
            url: 'https://smarttraining.com.co/'
        }

        app.push(matterApp);
        app.push(triviaApp);
        app.push(smartTraining);

        return app;
    }

}

