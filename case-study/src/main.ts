import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const options = new DocumentBuilder()
        .setTitle('Case Study API')
        .setVersion('1.0')
        .addBearerAuth()
        .setExternalDoc('Case Study - Collection', '/docs-json')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('docs', app, document);

    const host = process.env.HOST || 'localhost';
    const port = process.env.PORT || 4000;

    await app.listen(port as number, host);
    console.info(`Server running on ${host}:${port}`);
}
bootstrap();
