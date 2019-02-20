import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CompanyOwnerComponent } from './company-owner/company-owner.component';
import { SharedComponentComponent } from './shared-component/shared-component.component';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './shared-component/login/login.component';
import { RegisterComponent } from './company-owner/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { CompanyRoutingModule } from './company-owner/company.routing.module';
import { MessageComponent } from './company-owner/message/message.component';
import { CompanyOwnerDashboardComponent } from './company-owner/company-owner-dashboard/company-owner-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyOwnerComponent,
    SharedComponentComponent,
    LoginComponent,
    RegisterComponent,
    MessageComponent,
    CompanyOwnerDashboardComponent
    
  ],
  imports: [
    NgbModule,NgbPaginationModule, NgbAlertModule,
    BrowserModule,ReactiveFormsModule,
    CompanyRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
