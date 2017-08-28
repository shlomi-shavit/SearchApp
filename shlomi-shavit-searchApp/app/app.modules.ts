import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './component.app';
import { TapetItemComponent } from './component.tapet-item';
import { TapetDetailsComponent } from './component.tapet-details';

import { SearchPipe } from './pipe.search';

@NgModule({
  imports: [
    BrowserModule, FormsModule
  ],
  declarations: [
    AppComponent, TapetItemComponent, TapetDetailsComponent, SearchPipe
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
