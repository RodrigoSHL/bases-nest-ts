import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarDto } from './dto/car.dto';

@Controller('cars')
export class CarsController {

    constructor(private carsService: CarsService) { }


    @Get()
    getAllCars() {
        return this.carsService.getAllCars();
    }

    @Get('/:id')
    getById(@Param('id', ParseUUIDPipe) id: string) {
        return this.carsService.getById(id);
    }

    @Post()
    create(@Body() carDto: CarDto) {
        return this.carsService.createCar(carDto);
    }

    @Patch('/:id')
    update(@Param('id', ParseIntPipe) id: number, @Body() payload: any){
        return this.carsService.updateCar(id, payload);
    }

    @Delete('/:id')
    delete(@Param('id', ParseIntPipe) id: number){
        return this.carsService.deleteCar(id);
    }
}
