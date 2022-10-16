import { ServerFaqs } from './../models/faqs-model';
import { catchError, Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FaqslistService {
  constructor(private httpClient: HttpClient) {}

  getFAQSList(): Observable<ServerFaqs[]> {
    return this.httpClient
      .get<ServerFaqs[]>('./assets/jsondata/faqs.json')
      .pipe(catchError(this.errorHandler));
  }

  private errorHandler(err: HttpErrorResponse) {
    return throwError(() => err);
  }
}
