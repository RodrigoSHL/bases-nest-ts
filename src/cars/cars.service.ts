import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {

    private carsArrayObject: Car[] = [];

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

    updateCar(id: string, updateCarDto: UpdateCarDto) {
        let car = this.carsArrayObject.find(car => car.id === id);
        if (!car) {
            throw new NotFoundException(`Car with id ${id} not found!`);
        }
        car = { ...car, ...updateCarDto };
        this.carsArrayObject = this.carsArrayObject.map(car => car.id === id ? { ...car, ...updateCarDto } : car);
        return car;
    }

    deleteCar(id: string) {
        const car = this.carsArrayObject.find(car => car.id === id);
        if (!car) {
            throw new NotFoundException(`Car with id ${id} not found!`);
        }
        this.carsArrayObject = this.carsArrayObject.filter(car => car.id !== id);
        return this.carsArrayObject;
    }

    fillCarsWithSeedData(cars: Car[]) {
        this.carsArrayObject = cars;
    }

}
