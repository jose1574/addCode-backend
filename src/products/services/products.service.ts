import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';
import { ProductEntity } from '../entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}

  async findAllProducts() {
    return await this.productRepository.find();
  }

  async findOneProduct(code: string): Promise<ProductEntity> {
    const product = await this.productRepository.findOne({
      where: { code: code },
    });
    if (!product) {
      throw new NotFoundException(
        `producto con el codigo ${code} no se encuentra en la base de datos`,
      );
    }
    return product;
}



}

