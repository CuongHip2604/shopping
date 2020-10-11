import { Module } from '@nestjs/common';
import { ConfigurationService } from './configuration/configuration.service';
import { MapperService } from './mapper/mapper.service';
import { UserService } from './user/user.service';

@Module({
  providers: [ConfigurationService, MapperService, UserService],
  exports: [ConfigurationService, MapperService, UserService]
})
export class SharedModule { }
