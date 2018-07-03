import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { HttpClientModule } from '@angular/common/http';
import { HeightMatchDirective } from './common/directive/height-match.directive';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { IBenefitState, INITIAL_BENEFIT_STATE, ITaskState, INITIAL_STATE } from './reducers/state';
import { combine } from './reducers/reducers';
import { TemplateRefComponent } from './template-ref/template-ref.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    HeightMatchDirective,
    TemplateRefComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  // Can't be single type as it uses multiple reducer at once
  // constructor(private _ngRedux: NgRedux<ITaskState>, private _devTools: DevToolsExtension) {

    constructor(private _ngRedux: NgRedux<any>, private _devTools: DevToolsExtension) {

    let enhancer = _devTools.enhancer() ? [_devTools.enhancer()] : [];

    _ngRedux.configureStore(combine, {}, [], enhancer);
    // console.log('config-------',enhancer);
    console.log(this._ngRedux.getState());

  }

}
