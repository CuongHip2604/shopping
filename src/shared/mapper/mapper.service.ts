import { Injectable } from '@nestjs/common';
import 'automapper-ts/dist/automapper'

@Injectable()
export class MapperService {
  mapper: AutoMapperJs.AutoMapper

  constructor() {
    this.mapper = automapper
    this.initializeMapper()
  }

  private initializeMapper(): void {
    this.mapper.initialize(MapperService.configure)
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private static configure(config: AutoMapperJs.IConfiguration): void { }
}
