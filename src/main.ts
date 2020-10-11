import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const hostDomain = AppModule.isDev ? `${AppModule.host}: ${AppModule.port}` : AppModule.host

  const swaggerOptions = new DocumentBuilder()
    .setTitle('Shopping App')
    .setDescription('API Documentation')
    .setVersion('1.0.0')
    .setBasePath('/api')
    .addBearerAuth()
    .addServer(AppModule.isDev ? 'http' : 'https')
    .build()

  const swaggerDoc = SwaggerModule.createDocument(app, swaggerOptions)


  SwaggerModule.setup('api', app, swaggerDoc)
  app.enableCors();
  await app.listen(AppModule.port);
}
bootstrap();
