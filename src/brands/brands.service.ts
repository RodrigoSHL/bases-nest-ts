import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {

  private brandsArrayObject: Brand[] = [
    { id: uuid(), name: 'BMW', createdAt: 1234567890 },
    { id: uuid(), name: 'Audi', createdAt: 1234567890 },
    { id: uuid(), name: 'Mercedes', createdAt: 1234567890 }
  ]

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

  update(id: number, updateBrandDto: UpdateBrandDto) {
    return `This action updates a #${id} brand`;
  }

  remove(id: number) {
    return `This action removes a #${id} brand`;
  }
}
