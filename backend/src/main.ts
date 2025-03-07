import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Create OpenAPI document
  const config = new DocumentBuilder().setTitle('Coffee API').build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // TODO remove when deploying it
  app.enableCors();
  await app.listen(4001);
}
bootstrap();
