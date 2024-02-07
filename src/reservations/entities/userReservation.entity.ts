import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Users } from 'src/users/entities/user.entity';
import { Reservations } from './reservation.entity';

@Table({
  tableName: 'usersReservations',
})
export class UsersReservations extends Model {
  @ForeignKey(() => Users)
  @Column({ type: DataType.INTEGER, allowNull: false })
  userId: number;

  @BelongsTo(() => Users, {foreignKey: 'userId'})
  users: Users;

  @ForeignKey(() => Reservations)
  @Column({ type: DataType.INTEGER, allowNull: false })
  reservationId: number;

  @BelongsTo(() => Reservations, 'reservationId')
  reservations: Reservations;
}
