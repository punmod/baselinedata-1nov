import { Component, OnInit,ElementRef } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { BaseService } from '../../baseline.service';
import { FileUploaderService } from '../services/file-uploader-service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [FileUploaderService],
})
export class PEditComponent implements OnInit {

   constructor(
    private router: Router,
    private route: ActivatedRoute,
    private projService: BaseService,private fileUploader: FileUploaderService,
    private elem: ElementRef
  ) { }
filestatus:any=false;
currentparam:any;
  ngOnInit() {
     this.filestatus=false;
      this.getSingleProject();
  }
show:any=true;
notshow:any=true;
  model:any={};
  //model = new Project();
  aid = this.route.snapshot.params['aid'];
  paramid=this.route.snapshot.params['paramid'];
heading:any;
   getSingleProject(){
    
    this.projService
      .getParameter(this.aid,this.paramid)
      .subscribe(project =>{
          this.model = project[0];
        this.setfilestatus();
        this.heading =this.model.parameter;
        })
  };
  public setfilestatus():void
  {  
     if(this.model.filesize >0 )
       {
         this.filestatus=true;
       }
     else{
      
      this.filestatus=false;}

      }
  updateParameter(){
      this.projService
        .updateparameter(this.model)
        .subscribe(()=> this.goBack());
        
  }
 
   goBack(){
     if(this.filestatus==false)alert("You have not uploaded signed file yet")
     else alert("Thank You,You may update data again");   
    this.router.navigate(['/home']);
  }

setstatus(event:any)
{
  this.filestatus=true;
}
public uploadbasedata(): void {
 // console.log("Received aid is:"+ this.aid);     
    // this.elem.nativeElement.querySelector('#spinner').style.visibility='visible';
   let files = this.elem.nativeElement.querySelector('#userImage').files;
 let formData = new FormData();
 let file = files[0];
   formData.append('userImage', file,file.name);
   formData.append('aid',this.aid);
   formData.append('paramid',this.paramid)
   this.fileUploader.uploadbaselinefile(formData).subscribe(res=> this.dataLoaded(res,file.name));
  this.setstatus(event);
 }

 private dataLoaded(data: any,fn:any): void {
   alert(data._body);
//this.elem.nativeElement.querySelector('#uploadfile').style.visibility='hidden'; 
  //this.elem.nativeElement.querySelector('#fileexist').style.visibility='visible';
 //  this.setfilestatusnew(fn,data._body);
// this.imgUploaded = data._body;

}




}
