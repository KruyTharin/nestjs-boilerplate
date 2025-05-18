import {
  Body,
  Controller,
  Get,
  Injectable,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { ParseIdPipe } from './pipe/parseIdPipe';
import { ZodValidationPipe } from './pipe/zodValidattionPipe';
import {
  CreatePropertySchema,
  CreatePropertyZodDto,
} from './pipe/createPropertyZod.dto';
import { HeaderDto } from './pipe/headers.dto';
import { RequestHeader } from './pipe/request.header';
import { PropertyService } from './property.service';

@Controller('property')
@Injectable()
export class PropertyController {
  constructor(private propertyService: PropertyService) {}

  @Get(':id')
  getOne(@Param('id') id: string): string {
    return this.propertyService.getOne(id);
  }

  @Get()
  getAll(): string {
    return this.propertyService.getAll();
  }

  // USING WITH ZOD
  @Post()
  @UsePipes(new ZodValidationPipe(CreatePropertySchema))
  create(@Body() body: CreatePropertyZodDto): CreatePropertyZodDto {
    return body;
  }

  @Patch(':id')
  updateById(
    @Param('id', ParseIdPipe) id: number,
    @Body() body: CreatePropertyDto,
    @RequestHeader(
      new ValidationPipe({
        whitelist: true,
        validateCustomDecorators: true,
      }),
    )
    headers: HeaderDto,
  ): HeaderDto {
    return headers;
  }

  // @Patch(':id')
  // updateById(
  //   @Param('id', ParseIdPipe) id,
  //   @Body()
  //   body: CreatePropertyDto,
  //   // @Headers() headers,
  //   // @Headers('host') headers: HeaderDto,
  //   @RequestHeader(
  //     new ValidationPipe({
  //       whitelist: true,
  //       forbidNonWhitelisted: true,
  //       validateCustomDecorators: true,
  //     }),
  //   )
  //   headers: HeaderDto,
  // ): HeaderDto {
  //   return headers;
  //   // return `update id = ${id}, body=${JSON.stringify(body)}`;
  // }
}
