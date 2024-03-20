import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateCarDto {
    @IsString()
    readonly name: string;

    @IsString()
    readonly model: string;
}