import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column
  fullName: string;

  @Column
  reason: string;
  
  @Column({ type: DataType.DATE, allowNull: true })
  dateTime: Date;
}
