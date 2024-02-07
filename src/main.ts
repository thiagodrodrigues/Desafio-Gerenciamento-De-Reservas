import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
/* import { DatabaseService } from './database/database.service'; */

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
/*   const databaseService = app.get(DatabaseService);
  await databaseService.seedersDatabase(); */
  await app.listen(3000);
}
bootstrap();
