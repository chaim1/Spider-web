import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private httpClient: HttpClient) { }

  postFile(file): Observable<any> {
    return this.httpClient.post<any>(environment.link+'AddFile', file)
  }
}
