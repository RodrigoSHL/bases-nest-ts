import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { Brand } from 'src/brands/entities/brand.entity';
import { CarsService } from 'src/cars/cars.service';
import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class SeedService {
  
  private SEED_CARS: Car[] = [
    { id: uuid(), name:'Tesla', model: 'S'},
    { id: uuid(), name:'Tesla', model: 'X'},
    { id: uuid(), name:'Tesla', model: 'CiberTruck'}
  ]

  private SEED_BRANDS: Brand[] = [
    { id: uuid(), name: 'BMW', createdAt: new Date().getTime() },
    { id: uuid(), name: 'Audi', createdAt: new Date().getTime() },
    { id: uuid(), name: 'Mercedes', createdAt: new Date().getTime() }
  ]

  constructor(private readonly brandService: BrandsService, private readonly carService: CarsService) {
  }

  runSeed() {
    this.brandService.fillBrandsWithSeedData(this.SEED_BRANDS);
    this.carService.fillCarsWithSeedData(this.SEED_CARS);
    return 'This action adds seed data to the database!'
  }
}
