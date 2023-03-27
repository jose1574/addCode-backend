import { Module } from '@nestjs/common';
import { ConnectionDataService } from './services/connection-data.service';
import { ConnectionDataController } from './controllers/connection-data.controller';

@Module({
  controllers: [ConnectionDataController],
  providers: [ConnectionDataService]
})
export class ConnectionDataModule {}
