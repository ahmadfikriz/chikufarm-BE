/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateProdukAgenDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  nama_agen: string;
  
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  nama_produk: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  deskripsi: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  harga: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  stok: number;

  @ApiProperty({ format:'binary' })
  @IsOptional()
  foto: string;
}
