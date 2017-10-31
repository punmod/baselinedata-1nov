import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule} from '@angular/common';
 



import { PAppComponent } from './papp.component';

import { PHomeComponent } from './pems/home/home.component';

import { PEditComponent } from './pems/edit/edit.component';
import { PShowComponent } from './pems/show/show.component';
import { BaseService } from './baseline.service';

import { UploadfileComponent } from './pems/uploadfile/uploadfile.component';

@NgModule({
  declarations: [
   
    PAppComponent,
    PHomeComponent,
   
    PShowComponent,
    PEditComponent,
   
    
    UploadfileComponent,
   
    
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [BaseService],
  bootstrap: [PAppComponent]
})
export class AppModule { }
