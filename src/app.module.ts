import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './Employee/employee.module';

@Module({
  imports: [EmployeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
