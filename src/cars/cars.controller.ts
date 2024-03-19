import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {

    private cars = ['BMW', 'Audi', 'Mercedes'];

    @Get()
    getAllCars() {
        return this.cars
    }

    @Get('/byId/:id')
    getById(@Param('id') id: string) {
        return this.cars[id];
    }
}
