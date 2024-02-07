import {
  AutoIncrement,
  Column,
  DataType,
  HasMany,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { UsersReservations } from 'src/reservations/entities/userReservation.entity';

@Table({
  tableName: 'users',
  timestamps: true,
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
})
export class Users extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  userId: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.DATE, allowNull: false })
  birth: Date;

  @Unique
  @Column({ type: DataType.BIGINT, allowNull: false })
  cpf: number;

  @HasMany(() => UsersReservations, {foreignKey: 'userId'})
  usersReservations?: UsersReservations[];
}