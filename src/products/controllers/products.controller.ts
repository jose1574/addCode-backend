import { Controller, Get, Param} from '@nestjs/common';
import { ProductsService } from '../services/products.service';

@Controller('products')
export class ProductsController {
    constructor(private productsServices: ProductsService ) {

    }

    @Get()
    findAll() {
        return this.productsServices.findAllProducts();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.productsServices.findOneProduct(id);    
    }

}
