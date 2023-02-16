import { Injectable } from "@nestjs/common";
import { employeeRequest } from "./employeeRequest.dto";


@Injectable({})

export class EmployeeService {

    getPanel(): string {
        return "employee Panel";

    }
    signup() {
        return 'Successfully Signup Completed';
    }
    signin() {
        return 'Successfully Signin Completed';
    }
    getUserByID(id): any {

        return "employee id" + id;
    
    }
    getUserByIDName(qry): any {

        id: Number
        name: String
        return "employeeID is " + qry.id + " and employeeID is " + qry.name;
    }
    addNewPost(id, name): any {
        return "employee with id " + id + " & name " + name + " added"
    }

    insertemployee(mydto: employeeRequest): any {

        return "employeeID: " + mydto.employeeID + " employeename: " + mydto.employeename + " email: " + mydto.email + " orderquantity: " + mydto.orderquantity;
    }

}