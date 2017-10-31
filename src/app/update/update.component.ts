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
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  wolfs: Wolf[] = [];
  active = true;
  wolf = new Wolf();
  submitted = false;
  _loki ={id:String};
  id: any;

  // public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;


  constructor(
    private router: Router,
    private wolfService: WolfsoundService) {
  }

  onSubmit() {
  	this.submitted = true; 
  }

  ngOnInit() {

        };

  // updateWolf(wolf: Wolf, id : string) : void {
  //   let commentOperation:Observable<Wolf[]>;
  //   this.wolfService.updateWolf(this.wolf, this.id).subscribe(
      
  //     );
  //   let link = ['/list'];
  //   this.router.navigate(link);

  // }

    }





