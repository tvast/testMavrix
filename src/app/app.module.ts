import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { WolfsoundService } from './contact.service';
import { WolfsoundListComponent } from './wolfsound-list/wolfsound-list.component';
import { RouterModule }   from '@angular/router';
import { FormComponent } from './form/form.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { UpdateComponent } from './update/update.component';
import { MaterializeModule } from "angular2-materialize";


@NgModule({

    imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MaterializeModule,
    RouterModule.forRoot([
      {
        path: '',
        component: WolfsoundListComponent
      },
      {
        path: 'list',
        component: WolfsoundListComponent
      },
     
      {
        path: 'add',
        component:  FormComponent
      },
      { 
        path: 'wolf/:id', component: DetailViewComponent 
      },
      
      { 
        path: 'update', component: UpdateComponent
      } 
    ])
  ],
  declarations: [
    AppComponent,
    WolfsoundListComponent,
    FormComponent,
    DetailViewComponent, 
    UpdateComponent,
  ],
  providers: [WolfsoundService],
  bootstrap: [AppComponent],
})

export class AppModule { 

}