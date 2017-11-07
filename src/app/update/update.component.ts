import { Component, OnInit } from '@angular/core';
import { WolfsoundService } from './../contact.service';
import { Router }            from '@angular/router';
import {Observable} from 'rxjs/Rx';
import { Contact} from './../contact';  

@Component({
  selector: 'app-form',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  contacts: Contact[] = [];
  active = true;
  contact = new Contact();
  submitted = false;
  id: any;



  constructor(
    private router: Router,
    private wolfService: WolfsoundService) {
  }

  onSubmit() {
  	this.submitted = true; 
  }

  ngOnInit() {

        };

  updateContact() {
    alert ("TODO : update contact")

  }

    }





