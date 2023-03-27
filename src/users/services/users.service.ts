import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
// import { DeleteResult, Repository } from 'typeorm';
// import { Users } from './entities/user.entity';
// import pg from 'pg';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';

// import { Client } from 'pg';


@Injectable()
export class UsersService {

  constructor( 
    @InjectRepository(User)
    private userRepository: Repository<User>,
    ) {}

  create() {}

  findAll(): Promise<User[]>{
   return this.userRepository.find()
  }


  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
