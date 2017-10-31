import { Component, OnInit } from '@angular/core';
import { WolfsoundService } from './../wolfsound.service';
import { Router }            from '@angular/router';
import {Observable} from 'rxjs/Rx';
import { Wolf} from './../wolf';
import { FileUploader, FileUploadModule } from 'ng2-file-upload';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload/ng2-file-upload';

//define the constant url we would be uploading to. https://warm-atoll-97916.herokuapp.com/
// const URL = 'http://localhost:3000/profile';
const URL = 'https://fileuploader2702.herokuapp.com/profile';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  wolfs: Wolf[] = [];
  active = true;
  wolf = new Wolf();
  submitted = false;
  _loki ={id:String};

  // public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;


  constructor(
    private router: Router,
    private wolfService: WolfsoundService) {
  }
  onSubmit() { this.submitted = true; }

     //declare a property called fileuploader and assign it to an instance of a new fileUploader.
    //pass in the Url to be uploaded to, and pass the itemAlais, which would be the name of the //file input when sending the post request.
    public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'avatar'});
    //This is the default title property created by the angular cli. Its responsible for the app works 
    title = 'app works!';

    ngOnInit() {
       //override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
       this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
       //overide the onCompleteItem property of the uploader so we are 
       //able to deal with the server response.
       this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
            console.log("ImageUpload:uploaded:", item, status, response);
            
            this._loki = response
            alert(this._loki)
            console.log(this._loki.id)

        };

    }


    savewolf(wolf: Wolf) : void {
    let commentOperation:Observable<Wolf[]>;
    this.wolfService.addWolf(this.wolf).subscribe(
      
      );
    let link = ['/list'];
    this.router.navigate(link);

  }

    public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

}
