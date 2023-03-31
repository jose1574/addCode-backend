import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  providers: [UsersService],
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
})
export class UsersModule {}
