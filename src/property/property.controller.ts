import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { ParseIdPipe } from './pipe/parseIdPipe';
import { ZodValidationPipe } from './pipe/zodValidattionPipe';
import {
  CreatePropertySchema,
  CreatePropertyZodDto,
} from './pipe/createPropertyZod.dto';

@Controller('property')
export class PropertyController {
  @Get(':id')
  getOne(@Param('id') id: string): string {
    return id;
  }

  @Get()
  getAll(): string {
    return 'get all';
  }

  // USING WITH ZOD
  @Post()
  @UsePipes(new ZodValidationPipe(CreatePropertySchema))
  create(@Body() body: CreatePropertyZodDto): CreatePropertyZodDto {
    return body;
  }

  @Patch(':id')
  updateById(
    @Param('id', ParseIdPipe) id,
    @Body()
    body: CreatePropertyDto,
  ): string {
    return `update id = ${id}, body=${JSON.stringify(body)}`;
  }
}
