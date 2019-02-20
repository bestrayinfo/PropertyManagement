import { address } from "../model/address";
import { company } from "../model/company";

export class CompanyOwner{
    userName:string;
    password:string;
    firstName: string;
    middleName:string;
    lastName: string;
    phoneHome: number;
    phoneOffice: number;
    phoneMobile: number;
    email: string;
    address:address;
    company:company;
}



