import { Controller, Post, Get, Put, Delete, Param, Query, Body, ParseIntPipe, UsePipes, ValidationPipe } from "@nestjs/common";
import { EmployeeService } from "./employee.service";
import { employeeRequest } from "./employeeRequest.dto";



@Controller('Employee')
export class EmployeeController {
    constructor(private employeeService: EmployeeService) { }

    @Get("/panel")
    getPanel(): any {
        return this.employeeService.getPanel();
    }
    @Post('signup')
    signup() {
        return this.employeeService.signup();
    }

    @Post('signin')
    signin() {
        return this.employeeService.signin();
    }
    @Get("/employeelist/:id")
    getemployeeByID(@Param("id", ParseIntPipe) id: number,): any {
        return this .employeeService.getUserByID(id);
    }
    @Get("/findemployee")
    getemployeeByIDName(@Query() qry: any): any {
        return this.employeeService.getUserByIDName(qry);
    }

    @Post("/addemployee")
    @UsePipes(new ValidationPipe())
    insertemployee(@Body() mydto: employeeRequest): any {
        return this.employeeService.insertemployee(mydto);
    }

}

