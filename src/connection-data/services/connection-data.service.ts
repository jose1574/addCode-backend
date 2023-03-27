import { Injectable } from '@nestjs/common';
import { CreateConnectionDatumDto } from '../dto/create-connection-datum.dto';
import { UpdateConnectionDatumDto } from '../dto/update-connection-datum.dto';

@Injectable()
export class ConnectionDataService {
  create(createConnectionDatumDto: CreateConnectionDatumDto) {
    return 'This action adds a new connectionDatum';
  }

  findAll() {
    return `This action returns all connectionData`;
  }

  findOne(id: number) {
    return `This action returns a #${id} connectionDatum`;
  }

  update(id: number, updateConnectionDatumDto: UpdateConnectionDatumDto) {
    return `This action updates a #${id} connectionDatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} connectionDatum`;
  }
}
