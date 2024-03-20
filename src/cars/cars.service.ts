import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { CreateCarDto } from './dto/create-car.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {

    private carsArrayObject: Car[] = [
        { id: uuid(), name: 'BMW', model: 'X5' },
        { id: uuid(), name: 'Audi', model: 'A4' },
        { id: uuid(), name: 'Mercedes', model: 'C-Class' }
    ];

    getAllCars() {
        return this.carsArrayObject;
    }


    getById(id: string) {
        const car = this.carsArrayObject.find(car => car.id === id.toString());
        if (!car) {
            throw new NotFoundException(`Car with id ${id} not found!`);
        }
        return car;
    }

    createCar(createCarDto: CreateCarDto) {
        const car = { id: uuid(), ...createCarDto };
        this.carsArrayObject.push(car);
        return car;
    }

    updateCar(id: string, payload: CreateCarDto) {
        const car = this.carsArrayObject.find(car => car.id === id);
        if (!car) {
            throw new NotFoundException(`Car with id ${id} not found!`);
        }
        car.name = payload.name;
        return car;
    }

    deleteCar(id: string) {
        const car = this.carsArrayObject.find(car => car.id === id);
        if (!car) {
            throw new NotFoundException(`Car with id ${id} not found!`);
        }
        this.carsArrayObject = this.carsArrayObject.filter(car => car.id !== id.toString());
        return this.carsArrayObject;
    }

}
