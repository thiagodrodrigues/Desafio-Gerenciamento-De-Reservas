import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReservationsModule } from './reservations/reservations.module';
import { SequelizeModule } from '@nestjs/sequelize';
import 'dotenv/config';
import { Reservations } from './reservations/entities/reservation.entity';
import { UsersModule } from './users/users.module';
import { Users } from './users/entities/user.entity';
import { UsersReservations } from './reservations/entities/userReservation.entity';

@Module({
  imports: [
    SequelizeModule.forRoot(
      {
        dialect: 'mysql',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        autoLoadModels: true,
        models: [Reservations, Users, UsersReservations]
      }
    ),
    ReservationsModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
