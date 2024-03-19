import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = ['BMW', 'Audi', 'Mercedes'];
    private carsArrayObject = [{id: 1, name: 'BMW'}, {id: 2, name: 'Audi'}, {id: 3, name: 'Mercedes'}];


    getAllCars() { return this.carsArrayObject; }

    getById(id: number) { return this.carsArrayObject.find(car => car.id === id);}

}
