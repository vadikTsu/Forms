import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  lines: string[] = [];

  constructor(private http: HttpClient) {}

  loadWords(): Observable<string[]> {
    return this.http.get("/assets/words.txt", { responseType: 'text' }).pipe(
      map((data: string) => {
        this.lines = data.split('\n').map(line => line.trim()).filter(line => line.length > 0);
        return this.lines;
      })
    );
  }
}
