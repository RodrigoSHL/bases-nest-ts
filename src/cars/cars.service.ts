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

    createCar(name: string) {
        this.carsArrayObject.push({id: this.carsArrayObject.length + 1, name});
        return this.carsArrayObject;
    }

    updateCar(id: number, name: string) {
        const car = this.carsArrayObject.find(car => car.id === id);
        if (!car) {
            throw new NotFoundException(`Car with id ${id} not found!`);
        }
        car.name = name;
        return car;
    }

    deleteCar(id: number) {
        const car = this.carsArrayObject.find(car => car.id === id);
        if (!car) {
            throw new NotFoundException(`Car with id ${id} not found!`);
        }
        this.carsArrayObject = this.carsArrayObject.filter(car => car.id !== id);
        return this.carsArrayObject;
    }

}
