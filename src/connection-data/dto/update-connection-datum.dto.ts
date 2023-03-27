import { PartialType } from '@nestjs/mapped-types';
import { CreateConnectionDatumDto } from './create-connection-datum.dto';

export class UpdateConnectionDatumDto extends PartialType(CreateConnectionDatumDto) {}
