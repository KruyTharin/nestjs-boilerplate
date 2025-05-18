import { IsNumber, IsPositive, IsString } from 'class-validator';

export class CreatePropertyDto {
  // @IsString({
  //   always: true,
  // })
  @IsString()
  name: string;

  @IsString()
  // @Length(1, 10, {
  //   groups: ['create'],
  // })
  description: string;

  @IsNumber()
  @IsPositive()
  area: number;
}
