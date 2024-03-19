import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = ['BMW', 'Audi', 'Mercedes'];
    private carsArrayObject = [{id: 1, name: 'BMW'}, {id: 2, name: 'Audi'}, {id: 3, name: 'Mercedes'}];


    getAllCars() { return this.carsArrayObject; }

    getById(id: number) { 
        const car = this.carsArrayObject.find(car => car.id === id);
        if (!car) {
            throw new NotFoundException(`Car with id ${id} not found!`);
        }
        return car;
    }

}
