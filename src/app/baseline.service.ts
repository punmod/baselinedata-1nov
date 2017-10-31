import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BaseService {
  projects=[];
  constructor(private _http:Http) { }
  checkMe:any;
  
  
  
   getbaselinedata(){
    
    return this._http.get("http://misrusachd.in/api/baselineapi/select.php")
      .map(res=>{
        this.checkMe = res;
       
        if(this.checkMe._body !== "0"){
           return res.json()
        }
       
      });
  }
  
  
  
  
  getParameter(aid,paramid){
    return this._http.post("http://misrusachd.in/api/baselineapi/selectone.php/",{'aid':aid,'paramid':paramid})
      .map(res=>res.json());
  }
  
  
   
  updateparameter(info){
   console.log("reached insideservice");
    return this._http.post("http://misrusachd.in/api/baselineapi/update.php/", info)
      .map(()=>"");
      }
}
