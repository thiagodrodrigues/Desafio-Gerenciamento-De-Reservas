import { Users } from "src/users/entities/user.entity";

export class CreateReservationDto {
  reservation: Date;
  comments: string;
  users: Users[]
}

export class CreateUsersReservationDto {
  userId: number;
  reservationId: number;
}
