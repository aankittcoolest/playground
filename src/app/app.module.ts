import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTabsModule,MatCheckboxModule, MatChipsModule, MatIconModule } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


import { AppComponent } from './app.component';
import 'hammerjs/hammer.js'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCheckboxModule,
    MatChipsModule,
    MatIconModule,
  ],
  exports: [
    MatTabsModule,
    MatCheckboxModule,
    MatChipsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
