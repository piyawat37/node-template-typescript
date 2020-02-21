import 'reflect-metadata';
import * as bodyParser from 'body-parser'
import { createExpressServer } from "routing-controllers";
import { createConnection } from "typeorm";
import { ValuesController } from './controllers/values.controller';

const PORT = process.env.PORT || 9000;

// edit ormconfig for your database.
createConnection()
    .then((connection) => {
        const app = createExpressServer({
            controllers: [ValuesController],
            middlewares: [],
            cors: true,
            defaultErrorHandler: true,
            // routePrefix: '',
        })
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        app.listen(PORT, () => {
            if (PORT) {
                console.log('Server Starting up on port: ', PORT);
            } else {
                console.log('Server Starting UP');
            }
        })
    }
    ).catch((error) => {
        console.log(error)
    })