import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor (
    @InjectModel(Users)
    private userModel: typeof Users,
    ){

  }
  async create(createUserDto: CreateUserDto) {
    try {
      return await this.userModel.create({
        name: createUserDto.name,
        cpf: Number(createUserDto.cpf),
        birth: new Date(createUserDto.birth),
      })
    } catch (error) {
      return await this.userModel.findOne({
        where: {
          cpf: createUserDto.cpf,
        }
      })
    }
  }
}
