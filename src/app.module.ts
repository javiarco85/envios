import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MercanciaModule } from './mercancia/mercancia.module';

@Module({
  imports: [
    MercanciaModule,
    MongooseModule.forRoot(
      'mongodb://localhost:27017/prueba',
      {
        useNewUrlParser: true
      }
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
