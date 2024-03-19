import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(private carsService: CarsService) {}


    @Get()
    getAllCars() {
        return this.carsService.getAllCars();
    }

    @Get('/:id')
    getById(@Param('id', ParseIntPipe) id: number) {
        return this.carsService.getById(id);
    }
}
