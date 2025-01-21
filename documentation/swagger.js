import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const  options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: "Janta API Doc",
            version: "1.0.0",
            description: "A page to display all the available API to be used in the app"
        },
        servers: [
            {
                url: 'http://localhost:3000'
            },
        ],
    },
    apis: ['./documentation/*.js']
}

const spacs = swaggerJSDoc(options)

const swaggerSetup = (app) => {
    app.use('/todo/api', swaggerUi.serve, swaggerUi.setup(spacs))
}

export default swaggerSetup