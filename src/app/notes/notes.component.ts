import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NotesService } from './notes.service';

import { FormControl, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { NgRedux, select } from '@angular-redux/store';
import { ITaskState } from '../reducers/state';
import { Observable } from 'rxjs';
// import { Store } from 'redux';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  providers: [NotesService],
  encapsulation: ViewEncapsulation.None
})
export class NotesComponent implements OnInit {
  constructor(private _noteServices: NotesService, private _ngRedux: NgRedux<any>) {}

  noteForm: FormGroup;
  notesDt: Array<{}>;
  user: {};
  heightLimit: Number;
  isMaxHeight: Boolean;

  @select('Task') taskStore: Observable<any>;

  ngOnInit() {

    this.taskStore.subscribe(res => {
            
        console.log(this._ngRedux.getState().Task);

      }, error => {
          console.error(error); 
      });
    

    this.user = {
      name: 'Meichol Chevron'
    };

    this.notesDt = [];
    this.heightLimit = 200;
    this.isMaxHeight = false;

    this.noteForm = new FormGroup({
      userNote: new FormControl()
    });
  }
  addNotes(): void {
    // console.log(this.noteForm.value);

    const newNote = {
      desc: this.noteForm.value['userNote'].trim(),
      timestamp: '2018-01-01 21:20 BST'
    };

    this.notesDt.unshift(newNote);
    this.noteForm.reset();

    let tk = {
      name: 'new',
      desc: 'Exercitation nulla eiusmod qui aute nostrud dolor enim ut minim.',
      date: new Date()
    }

    this._ngRedux.dispatch({ type: 'ADD_TASK',  tasks: tk });

    
  }

  LoadNotes(): void {
    this._noteServices.getNoteData().subscribe(
      res => {
        this.notesDt = res;
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred.
          console.log('An error occurred:', err.error.message);
        } else {
          // Backend returns unsuccessful response codes such as 404, 500 etc.
          console.log('Backend returned status code: ', err.status);
          console.log('Response body:', err.error);
        }
      }
    );
  }

  clearNotes(): void {
    this.notesDt = [];
  }

  hasChangeHandler(currentHeight: Number): void {
    if (currentHeight >= this.heightLimit) {
      this.isMaxHeight = true;
    } else {
      this.isMaxHeight = false;
    }
    // console.log(this.heightLimit,' ...isMax...', currentHeight);
  }
}

