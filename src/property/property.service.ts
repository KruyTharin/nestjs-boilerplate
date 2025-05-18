import { Injectable } from '@nestjs/common';

@Injectable()
export class PropertyService {
  getAll() {
    return 'fine all';
  }

  getOne(id: string) {
    return id;
  }
}
