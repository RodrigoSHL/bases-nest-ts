import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateCarDto {
    @IsOptional()
    readonly id?: string;

    @IsString()
    readonly name: string;

    @IsString()
    readonly model: string;
}