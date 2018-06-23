import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { HttpClientModule } from '@angular/common/http';
import { HeightMatchDirective } from './common/directive/height-match.directive';


@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    HeightMatchDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
