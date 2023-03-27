import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  
  @Column({ name: 'code' })
  @PrimaryColumn()
  code: number;

  @Column({ name: 'description' })
  description: string;

  @Column({ name: 'user_image', type: 'bytea', nullable: true })
  image: Buffer;
}
