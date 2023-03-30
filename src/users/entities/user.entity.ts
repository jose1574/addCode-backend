import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  
  @Column({ name: 'code' })
  @PrimaryGeneratedColumn()
  code: any;

  @Column({ name: 'description' })
  description: string;

  @Column({ name: 'user_image', nullable: true, type: 'bytea' })
  image: string;

  @Column({name: 'user_password'})
  password: string;
}
