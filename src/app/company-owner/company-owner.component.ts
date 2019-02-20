import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-owner',
  templateUrl: './company-owner.component.html',
  styleUrls: ['./company-owner.component.css']
})
export class CompanyOwnerComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
