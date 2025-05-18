import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class HeaderDto {
  @Expose({ name: 'x-api-key' })
  @IsString()
  apiKey: string;
}
