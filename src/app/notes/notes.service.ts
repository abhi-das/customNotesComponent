import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class NotesService {
  httpHeaders = new HttpHeaders().set('Accept', 'application/json');

  constructor(private _httpClient: HttpClient) {}

  getNoteData(): Observable<[{}]> {
    return this._httpClient.get<[{}]>('/assets/notes.json', {
      headers: this.httpHeaders,
      responseType: 'json'
    });
  }
}

