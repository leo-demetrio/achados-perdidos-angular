import { Injectable } from '@angular/core';
import { Document } from '../model/document';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  private readonly Api = 'documents';

  constructor(
    private httpClient: HttpClient
    ) { }

  list() {
    return this.httpClient.get<Document[]>(this.Api)
    .pipe(
      first(),
      delay(1000),
      // tap(documents => console.log(documents))
      )    
  }
}
