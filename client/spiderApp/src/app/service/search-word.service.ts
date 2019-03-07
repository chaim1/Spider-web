import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Words } from '../words';

@Injectable({
  providedIn: 'root'
})
export class SearchWordService {
  url: string;
  res;
  constructor(private httpClient: HttpClient) {
    this.url = environment.link + 'results'
  }

  getWordDb(word): Observable<string> {
    return this.httpClient.get<string>(this.url + word)
  }
}

