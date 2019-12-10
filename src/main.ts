import { NestFactory, APP_FILTER } from '@nestjs/core';
import { AppModule } from './app.module';
import { Configuration } from "./config/config.keys";
var admin = require('firebase-admin');

async function bootstrap() {

  
  
  const app = await NestFactory.create(AppModule);
  
  app.setGlobalPrefix('api');

  admin.initializeApp({
    credential: admin.credential.cert(
        {
            "projectId": Configuration.FB_PROJECTID,
            "private_key": Configuration.FB_PRIVATEKEY.replace(/\\n/g, '\n'),
            "clientEmail": Configuration.FB_CLIENTEMAIL,
        }
    ),
    databaseURL: Configuration.FB_DATABASEURL
    })

  await app.listen(AppModule.port);
}
bootstrap();
