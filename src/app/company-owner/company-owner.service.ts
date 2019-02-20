import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CompanyOwner } from "./model/company-owner";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class CompanyOwnerService{

    constructor(private http:HttpClient){

    }
     private url='http://localhost:8084/company/addCompanyOwner';

    // env=environment;
     public addCompanyOwner(company:CompanyOwner){

         return this.http.post<CompanyOwner>(this.url, company);
     }

}