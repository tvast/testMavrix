import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Wolf }        from './../wolf';
import { WolfsoundService } from './../wolfsound.service';
import {Injectable, EventEmitter} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Router }            from '@angular/router';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {

	 private sub:any;
  private wolf: Wolf;
  private router: Router;
  $:any;

  constructor(
  	private wolfService: WolfsoundService,
    private route: ActivatedRoute,
    private location: Location) { }

  private static _emitters: { [ID: string]: EventEmitter<any> } = {};
  // Set a new event in the store with a given ID
  // as key
  static get(ID: string): EventEmitter<any> {
    if (!this._emitters[ID])
      this._emitters[ID] = new EventEmitter();
    return this._emitters[ID];
  }

    ngOnInit() {
      // Subscribe to route params
      this.sub = this.route.params.subscribe(params => {
        let id = params['id'];
       // Retrieve Pet with Id route param
       this.wolfService.findwolfById(id).subscribe(wolf => this.wolf = wolf);
       console.log(id)
       console.log(this.wolf)
     });
    }  

    destroy (wolf:Wolf) {
      this.sub = this.route.params.subscribe(params => {
        let id = params['id'];
       // Retrieve Pet with Id route param
       this.wolfService.deleteWolf(id).subscribe(wolf => this.wolf = wolf);
     });
      // this.location.back();
      let link = ['/wolf'];
    this.router.navigate(link);

    }

    gotoDetail(wolf: Wolf): void {
      let link = ['/form'];
      this.router.navigate(link);
    }


    goBack(): void {
      this.location.back();
    }

}
