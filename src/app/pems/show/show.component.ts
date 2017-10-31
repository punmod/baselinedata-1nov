import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class PShowComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    
  ) { }

  ngOnInit() {
   }
  

  goBack(){
    this.router.navigate(['/home']);
  }
}
