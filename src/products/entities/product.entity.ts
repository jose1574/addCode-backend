import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity({ name: 'products' })
export class ProductEntity {
  
  @Column({ name: 'code' })
  @PrimaryGeneratedColumn()
  code: string;

  @Column({ name: 'description' })
  description: string;

}
