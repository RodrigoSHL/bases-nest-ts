import { IsString } from 'class-validator';

export class CarDto {
    @IsString()
    id: string;

    @IsString()
    name: string;

    @IsString()
    model: string;
}