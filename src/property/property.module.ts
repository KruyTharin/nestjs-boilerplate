import { Module, ValidationPipe } from '@nestjs/common';
import { PropertyController } from './property.controller';
import { APP_PIPE } from '@nestjs/core';
import { PropertyService } from './property.service';

@Module({
  controllers: [PropertyController],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        // THIS OPTIONS ALLOW TO TRANSFORM DATA LIKE: PARAM ...
        transform: true,
        transformOptions: {
          enableImplicitConversion: true,
        },
      }),
    },
    PropertyService,
  ],
})
export class PropertyModule {}
