import { Component, OnInit } from '@angular/core';
import { WolfsoundService } from './../contact.service';
import { Router }            from '@angular/router';
import {Observable} from 'rxjs/Rx';
import { Contact} from './../contact';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  contacts: Contact[] = [];
  active = true;
  contact = new Contact();
  submitted = false;

  constructor(
    private router: Router,
    private wolfService: WolfsoundService,) {
 
  }
  onSubmit() { this.submitted = true; }

    ngOnInit() {

    }

    savecontact(contact: Contact) : void {
    let commentOperation:Observable<Contact[]>;
    this.wolfService.addWolf(this.contact).subscribe(
      
      );
    let link = ['/list'];
    this.router.navigate(link);

  }

}
