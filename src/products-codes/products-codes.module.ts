import { Module } from '@nestjs/common';
import { ProductsCodesService } from './services/products-codes.service';
import { ProductsCodesController } from './controllers/products-codes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsCodesEntity } from './entities/product-codes.entity';
import { ProductsService } from 'src/products/services/products.service';
import { ProductsModule } from 'src/products/products.module';
import { ProductEntity } from 'src/products/entities/product.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([ProductsCodesEntity, ProductEntity]),
    ProductsModule
    
  ],
  controllers: [ ProductsCodesController],
  providers: [ProductsCodesService, ProductsService ]
})
export class ProductsCodesModule {}
