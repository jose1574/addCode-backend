import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConnectionDataService } from '../services/connection-data.service';
import { CreateConnectionDatumDto } from '../dto/create-connection-datum.dto';
import { UpdateConnectionDatumDto } from '../dto/update-connection-datum.dto';

@Controller('connection-data')
export class ConnectionDataController {
  constructor(private readonly connectionDataService: ConnectionDataService) {}

  @Post()
  create(@Body() createConnectionDatumDto: CreateConnectionDatumDto) {
    return this.connectionDataService.create(createConnectionDatumDto);
  }

  @Get()
  findAll() {
    return this.connectionDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.connectionDataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConnectionDatumDto: UpdateConnectionDatumDto) {
    return this.connectionDataService.update(+id, updateConnectionDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.connectionDataService.remove(+id);
  }
}
