import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConnectionDataModule } from './connection-data/connection-data.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { ProductsCodesModule } from './products-codes/products-codes.module';

@Module({
  imports: [
    UsersModule,
    ConnectionDataModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'cadm_j295788193',
      autoLoadEntities: true,
    }),
    UsersModule,
    ProductsModule,
    ProductsCodesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
