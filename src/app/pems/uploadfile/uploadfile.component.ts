import { Component, OnInit,ElementRef,Input,Output,EventEmitter } from '@angular/core';
import { FileUploaderService } from '../services/file-uploader-service';

@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.css'],
  providers: [FileUploaderService],
   styles:[`
  .spinner{
    visibility:hidden;
    position:absolute;
    margin-left:0%;
    margin-bottom:50%;
  },
  `,'.fileexist{visibility:hidden;}','.uploadfile{visibility:hidden;}'],
  
})
export class UploadfileComponent implements OnInit {
@Input() aid:any;
@Output() onFileuploaded = new EventEmitter<string>();


 constructor(private fileUploader: FileUploaderService,
private elem: ElementRef
){
  
}
public uploadphyreport(): void {
 console.log("Received aid is:"+ this.aid);     
    this.elem.nativeElement.querySelector('#spinner').style.visibility='visible';
  let files = this.elem.nativeElement.querySelector('#userImage').files;
let formData = new FormData();
let file = files[0];
  formData.append('userImage', file,file.name);
  formData.append('aid',this.aid);
  this.fileUploader.uploadphyreport(formData).subscribe(res=> this.dataLoaded(res,file.name));
 
}
public uploadImage(): void {
 
    this.elem.nativeElement.querySelector('#spinner').style.visibility='visible';
  let files = this.elem.nativeElement.querySelector('#userImage').files;
let formData = new FormData();
let file = files[0];
  formData.append('userImage', file,file.name);
  this.fileUploader.uploadImage(formData).subscribe(res=> this.dataLoaded(res,file.name));
 
}

private dataLoaded(data: any,fn:any): void {
                      this.elem.nativeElement.querySelector('#spinner').style.visibility='hidden';
                       alert(data._body);
   this.elem.nativeElement.querySelector('#uploadfile').style.visibility='hidden'; 
                      this.elem.nativeElement.querySelector('#fileexist').style.visibility='visible';
                       this.setfilestatusnew(fn,data._body);
   // this.imgUploaded = data._body;
 
}
fileexists:any;
private setfilestatus(data: any): void {
                      var returnedmessage = data._body;
                      var re = "nofile";
                     
                      if(returnedmessage.search(re)!=-1)
                      {
                      
                        this.elem.nativeElement.querySelector('#uploadfile').style.visibility='visible';
                       this.elem.nativeElement.querySelector('#fileexist').style.visibility='hidden';
                      }
                       else
                      {   
                        this.fileexists=data._body;
                       this.onFileuploaded.emit(this.fileexists);
                       this.elem.nativeElement.querySelector('#uploadfile').style.visibility='hidden'; 
                      this.elem.nativeElement.querySelector('#fileexist').style.visibility='visible';
                      }
   // this.imgUploaded = data._body;
}
private setfilestatusnew(fn:any,data: any): void {
                      var returnedmessage = data;
                      var re = "nofile";
                     console.log(returnedmessage);
                      if(returnedmessage.search(re)!=-1 || returnedmessage.search("This type of file is not allowed")!=-1)
                      {

                          
                        this.elem.nativeElement.querySelector('#uploadfile').style.visibility='visible';
                       this.elem.nativeElement.querySelector('#fileexist').style.visibility='hidden';
                      }
                       else
                      {  
                        this.fileexists=fn;
                        this.onFileuploaded.emit(this.fileexists);
                       this.elem.nativeElement.querySelector('#uploadfile').style.visibility='hidden'; 
                      this.elem.nativeElement.querySelector('#fileexist').style.visibility='visible';
                      }
            }




  ngOnInit() {
 this.fileUploader.checkfile(this.aid).subscribe(res=> this.setfilestatus(res));
  }

}
