import { Component, OnInit,Input } from '@angular/core';
import { BaseService } from '../../baseline.service';

import {ActivatedRoute, Params, Router} from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class PHomeComponent implements OnInit {
        
 
 private static status;

  status=true;
  constructor(
    private _projService:BaseService,
   private route: ActivatedRoute,
    private router: Router
   ) {
     
  }
  parameters:any;
  count:any;
  ngOnInit() {
   this.getProjects(); 
  this.count=0;  
  
  }
    
    
 uid:any;
  expconst:any;
  expren:any;
  expeqp:any;
  grandtotal:any;
  getProjects(){
    this.expconst=0;
  this.expren=0;
  this.expeqp=0;
   //   this.uid = this.route.snapshot.params['uid'];
     this._projService
        .getbaselinedata()
        .subscribe(employ => {
          this.parameters = employ;
                } )
   
     
           
}
  
}
