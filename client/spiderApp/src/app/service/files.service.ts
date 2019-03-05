import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private httpClient: HttpClient) { }

  postFile(file): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8888/AddFile', file)
  }
}
