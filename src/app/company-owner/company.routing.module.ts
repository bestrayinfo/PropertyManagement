import { NgModule } from "@angular/core";
import {Routes, RouterModule} from '@angular/router'
import { MessageComponent } from "./message/message.component";
import { CompanyOwnerComponent} from './company-owner.component'
import { from } from "rxjs";
import { BrowserModule } from "@angular/platform-browser";
const routes:Routes=[

    {path:'message',component:MessageComponent}
];

@NgModule({

   
    imports:[

    RouterModule.forRoot(routes,{ enableTracing: true })],
    exports:[RouterModule]
   
})


export class CompanyRoutingModule{

}