import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReservationsModule } from './reservations/reservations.module';
import { SequelizeModule } from '@nestjs/sequelize';
import 'dotenv/config';
import { Reservations } from './reservations/entities/reservation.entity';
import { UsersModule } from './users/users.module';
import { Users } from './users/entities/user.entity';
import { UsersReservations } from './reservations/entities/userReservation.entity';
import { Sequelize } from 'sequelize-typescript';

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
    UsersModule,
    SequelizeModule.forFeature([Reservations, UsersReservations, Users])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  constructor(
    private readonly sequelize: Sequelize,
    private readonly appService: AppService,
  ) {}

  async onModuleInit() {
    await this.sequelize.sync();
    await this.appService.seed();
  }
}
/* export class AppModule {} */
