import { IsNotEmpty, IsDefined } from 'class-validator';

export class ProductsCodeDto {
  @IsNotEmpty()
  @IsDefined()
  code: string;
  
  @IsNotEmpty()
  @IsDefined()
  otherCode: string;
}
