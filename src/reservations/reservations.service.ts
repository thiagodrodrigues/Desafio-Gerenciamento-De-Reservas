import { Inject, Injectable } from '@nestjs/common';
import { CreateReservationDto, CreateUsersReservationDto } from './dto/create-reservation.dto';
import { UsersReservations } from './entities/userReservation.entity';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from 'src/users/entities/user.entity';
import { Reservations } from './entities/reservation.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class ReservationsService {

  constructor (
    @Inject(UsersService)
    private readonly userService: UsersService,

    @InjectModel(UsersReservations)
    private userReservationsModel: typeof UsersReservations,

    @InjectModel(Reservations)
    private reservationsModel: typeof Reservations,
    ){

  }

  async create(createReservationDto: CreateReservationDto) {
    // eslint-disable-next-line prefer-const
    let users: any[] = [];
    for(let i=0; i<createReservationDto.users.length; i++){
        users.push(await this.userService.create({
          name: createReservationDto.users[i].name,
          cpf: createReservationDto.users[i].cpf,
          birth: new Date(createReservationDto.users[i].birth),
        }))
    }
    const newReservation = await this.reservationsModel.create({
      reservation: createReservationDto.reservation,
      comments: createReservationDto.comments
    })
    for(let index=0; index<users.length; index++){
      await this.createUsersReservations({
        userId: users[index].userId,
        reservationId: newReservation.reservationId
      })
    }
    return await this.reservationsModel.findOne({
      where: { reservationId: newReservation.reservationId },
      include:[
        {
          model: UsersReservations,
          include: [Users]
        }
      ],
    });
  }

  async createUsersReservations(createUsersReservationDto: CreateUsersReservationDto) {
    return await this.userReservationsModel.create({
      userId: createUsersReservationDto.userId,
      reservationId: createUsersReservationDto.reservationId
    });
  }

  findAll() {
    return this.reservationsModel.findAll({
      include:[
        {
          model: UsersReservations,
          include: [Users]
        }
      ],
    });;
  }
}
