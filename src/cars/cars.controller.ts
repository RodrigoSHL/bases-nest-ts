import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(private carsService: CarsService) { }


    @Get()
    getAllCars() {
        return this.carsService.getAllCars();
    }

    @Get('/:id')
    getById(@Param('id', ParseIntPipe) id: number) {
        return this.carsService.getById(id);
    }

    @Post()
    create(@Body() payload: any) {
        return this.carsService.createCar(payload.name);
    }

    @Patch('/:id')
    update(@Param('id', ParseIntPipe) id: number, @Body() payload: any){
        return this.carsService.createCar(payload);
    }

    @Delete('/:id')
    delete(@Param('id', ParseIntPipe) id: number){
        return this.carsService.deleteCar(id);
    }
}
