import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {

  private brandsArrayObject: Brand[] = []

  create(createBrandDto: CreateBrandDto) {
    const brand = { id: uuid(), ...createBrandDto, createdAt: new Date().getTime() };
    this.brandsArrayObject.push(brand);
    return brand;
  }

  findAll() {
    return this.brandsArrayObject;
  }

  findOne(id: string) {
    const brand = this.brandsArrayObject.find(brand => brand.id === id);
    if (!brand) {
      throw new NotFoundException(`Brand with id ${id} not found!`);
    }
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id);
    this.brandsArrayObject = this.brandsArrayObject.map(brand => {
      if (brand.id === id) {
        brandDB.updatedAt = new Date().getTime();
        brandDB = { ...brand, ...updateBrandDto };
        return brandDB;
      }
      return brand;
    })
  }

  remove(id: string ) {
    this.brandsArrayObject = this.brandsArrayObject.filter( brand => brand.id !== id );
  }

  fillBrandsWithSeedData( brands: Brand[] ) {
    this.brandsArrayObject = brands;
  }
}
