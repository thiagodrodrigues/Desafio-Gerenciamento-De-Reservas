import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Reservations } from './entities/reservation.entity';
import { UsersReservations } from './entities/userReservation.entity';
import { Users } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [SequelizeModule.forFeature([Reservations, UsersReservations, Users])],
  controllers: [ReservationsController],
  providers: [ReservationsService, UsersService]
})
export class ReservationsModule {}
