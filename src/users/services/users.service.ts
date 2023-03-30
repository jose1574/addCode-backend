import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from '../dto/update-user.dto';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  convertNumberToString(dato: any) {
    let datoNumber = parseInt(dato);
    
    if (datoNumber < 10) {
      dato = '0' + dato;
      return dato;
    } else {
      return dato;
    }
  }

  create() {
    return '';
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: string): Promise<User> {
    return this.userRepository.findOne({ where: { code: id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async validateUser(id: string, password: string): Promise<Boolean> {
    id = this.convertNumberToString(id);

    console.log('esto es loo que esta llegando', id, ' y ', password);
    const user = await this.userRepository.findOne({ where: { code: id } });
    if (user && password === user.password) {
      return true;
    }
    return false;
  }
}
