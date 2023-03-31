import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsCodesEntity } from '../entities/product-codes.entity';
import { ProductsService } from 'src/products/services/products.service';
import { Repository } from 'typeorm';


@Injectable()
export class ProductsCodesService {
    constructor(
        @InjectRepository(ProductsCodesEntity)
        private productsCodesRepo: Repository<ProductsCodesEntity>,
        private productsServices: ProductsService
    ) { }


    findAllProductsCodes() {
        return this.productsCodesRepo.find();
    }

    async addCode(code: string, otherCode: string): Promise<void> {
        const product = await this.productsServices.findOneProduct(code)
        if (!product) {
            throw new NotFoundException('el producto que buscas no se encuentra en la base de datos')
        }
        const newCode = new ProductsCodesEntity();
        newCode.mainCode = code;
        newCode.otherCode = otherCode;
        console.log('estos son los datos que estoy enviando: ', newCode);
        
        await this.productsCodesRepo.save(newCode);
    }


}
