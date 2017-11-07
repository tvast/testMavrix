import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
// import {CdkTableModule} from '@angular/cdk';

import { WolfsoundService } from './wolfsound.service';
import { WolfsoundListComponent } from './wolfsound-list/wolfsound-list.component';
import { RouterModule }   from '@angular/router';

import { FormComponent } from './form/form.component';

import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { UpdateComponent } from './update/update.component';


@NgModule({

    imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
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
    FileSelectDirective, 
    FileDropDirective, DetailViewComponent, UpdateComponent,
  ],
  providers: [WolfsoundService],
  bootstrap: [AppComponent],
})

export class AppModule { 

}