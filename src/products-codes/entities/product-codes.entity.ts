import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, PrimaryColumn} from 'typeorm';
import { ProductEntity } from 'src/products/entities/product.entity';

@Entity({ name: 'products_codes' })
export class ProductsCodesEntity {  
  @Column({ name: 'main_code' })
  mainCode: string;

 @PrimaryColumn({name: 'other_code'})
  otherCode: string;

  @Column({ name: 'code_type' })
  codeType: string;

}
