import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from 'src/users/entities/user.entity';
import { Reservations } from 'src/reservations/entities/reservation.entity';
import { UsersReservations } from 'src/reservations/entities/userReservation.entity';
import { faker } from '@faker-js/faker';

@Injectable()
export class AppService {
  private logger = new Logger(AppService.name);
  constructor(
    @InjectModel(Users)
    private userModel: typeof Users,
    @InjectModel(Reservations)
    private reservationsModel: typeof Reservations,
    @InjectModel(UsersReservations)
    private usersReservationsModel: typeof UsersReservations,
  ) {}

  async seed() {
    try {
      let dbUsers = await this.userModel.findAll();
      let dbReservations = await this.reservationsModel.findAll();
      let dbUserReservations = await this.usersReservationsModel.findAll();

      if (!dbUsers.length) {
        dbUsers = await this.seedUsers();
        this.logger.log('Users seeded successfully');
      }

      if (!dbReservations.length) {
        dbReservations = await this.seedReservations();
        this.logger.log('Reservations seeded successfully');
      }

      if (!dbUserReservations.length) {
        dbUserReservations = await this.seedUsersReservations();
        this.logger.log('Users Reservations seeded successfully');
      }
    } catch (e) {
      this.logger.error(e);
    }
  }

  private async seedUsers(): Promise<Users[]> {
    const usersToCreate = [];
    for (let i = 1; i <= 10; i++) {
      const user = {
        userId: i,
        name: faker.person.fullName(),
        cpf: faker.number.bigInt({min: 10000000000, max: 99999999999}),
        birth: faker.date.past(),
      };
      usersToCreate.push(user);
    }
    return this.userModel.bulkCreate(usersToCreate);
  }

  private async seedReservations() {
    const reserveationsToCreate = [];
    for (let i = 1; i <= 4; i++) {
      const reservation = {
        reservationId: i,
        reservation: faker.date.future(),
        comments: faker.lorem.words(6),
      };
      reserveationsToCreate.push(reservation);
    }

    return this.reservationsModel.bulkCreate(reserveationsToCreate);
  }

  private async seedUsersReservations() {
    const userReservationToCreate = [];
    for (let i = 1; i <= 10; i++) {
      const userReservation = {
        userId: faker.number.int({min: 1, max: 10}),
        reservationId: faker.number.int({min: 1, max: 4}),
      };
      userReservationToCreate.push(userReservation);
    }

    return this.usersReservationsModel.bulkCreate(userReservationToCreate);
  }
}