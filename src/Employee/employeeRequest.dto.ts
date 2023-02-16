import { IsInt, IsNotEmpty, Length, IsEmail, IsString } from "class-validator";

export class employeeRequest {
    @IsNotEmpty({ message: "employee ID is required to proceed" })
    @IsString()
    employeeID: string;

    @IsNotEmpty({ message: "employee Name is required to proceed" })
    @IsString()
    employeename: string;

     @IsNotEmpty( { message: "email is required to proceed" })
     @IsString()
     email: string;

     @IsNotEmpty({ message: "ORDER quantity is required to proceed" })
     @IsInt()
    orderquantity: number;
}