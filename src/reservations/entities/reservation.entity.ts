import {
  AutoIncrement,
  Column,
  DataType,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { UsersReservations } from './userReservation.entity';

@Table({
  tableName: 'reservations',
  timestamps: true,
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
})
export class Reservations extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  reservationId: number;

  @Column({ type: DataType.DATE, allowNull: false })
  reservation: Date;

  @Column({ type: DataType.STRING, allowNull: false })
  comments: string;

  @HasMany(() => UsersReservations, 'reservationId')
  usersReservations?: UsersReservations[];
}
