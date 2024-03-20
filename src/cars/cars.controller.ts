import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

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
    create(@Body() createCarDto: CreateCarDto) {
        return this.carsService.createCar(createCarDto);
    }

    @Patch('/:id')
    update(@Param('id', ParseUUIDPipe) id: string, @Body() updateCarDto: UpdateCarDto){
        return this.carsService.updateCar(id, updateCarDto);
    }

    @Delete('/:id')
    delete(@Param('id', ParseUUIDPipe) id: string){
        return this.carsService.deleteCar(id);
    }
}
