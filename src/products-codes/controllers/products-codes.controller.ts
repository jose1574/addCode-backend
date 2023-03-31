import { Controller, Get, Post, Body} from '@nestjs/common';
import { ProductsCodesService  } from '../services/products-codes.service';
import { ProductsCodeDto } from'../dtos/products-codes.dto';

@Controller('products-codes')
export class ProductsCodesController {
    constructor(
        private productsCodesService: ProductsCodesService
    ) {}

    
    @Get()
    async findAll() { 
        return await this.productsCodesService.findAllProductsCodes();
    }

    @Post() 
    async createOne(@Body() codeData: ProductsCodeDto ) {  
        console.log('estos son los datos que estoy recibiendo... ', codeData);
              
        return await this.productsCodesService.addCode(codeData.code, codeData.otherCode)
    }
}
