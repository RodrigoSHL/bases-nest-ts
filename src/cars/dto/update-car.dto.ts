import { IsOptional, IsString, IsUUID } from 'class-validator';
import { CreateCarDto } from './create-car.dto';

export class UpdateCarDto{
    @IsUUID()
    @IsString()
    @IsOptional()
    readonly id?: string;

    @IsString()
    @IsOptional()
    readonly name?: string;

    @IsString()
    @IsOptional()
    readonly model?: string;
}