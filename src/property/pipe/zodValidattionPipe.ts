/* eslint-disable @typescript-eslint/no-unsafe-return */
import { BadRequestException, PipeTransform } from '@nestjs/common';
import { ZodSchema } from 'zod';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: any) {
    const parseValue = this.schema.safeParse(value);
    if (parseValue.success) return parseValue.data;

    throw new BadRequestException(parseValue.error.format());
  }
}
