import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class FileUploaderService {
     constructor(private _http: Http) {

    }
 public  checkfile(aid:any ) {
        let _url: string = 'http://misrusachd.in/upload/checkfile.php?requesttype=actionplans&aid='+aid;
        return this._http.get(_url);
    }
      public  uploadImage(formdata: any ) {
        let _url: string = 'http://misrusachd.in/upload/uploadblob.php';
        return this._http.post(_url, formdata)
        .catch(this._errorHandler) ;
    }
  public  uploadphyreport(formdata: any) {

        let _url: string = 'http://misrusachd.in/upload/uploadphyreportblob.php';
        return this._http.post(_url, formdata)
        .catch(this._errorHandler) ;
    }

    public  uploadbaselinefile(formdata: any) {
        
                let _url: string = 'http://misrusachd.in/api/baselineapi/uploadbaselinefile.php';
                return this._http.post(_url, formdata)
                .catch(this._errorHandler) ;
            }

    private _errorHandler(error: Response) {
        console.error('Error Occured: ' + error);
        return Observable.throw(error || 'Some Error on Server Occured');

    }

       public  getFilesList() {
        let _url: string = 'http://misrusachd.in/upload/getFilesFromDirectory.php';
        return this._http.get(_url)
        .catch(this._errorHandler) ;
    }
}