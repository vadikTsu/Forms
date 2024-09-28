import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-letters',
  templateUrl: './letters.component.html',
  styleUrl: './letters.component.css'
})
export class LettersComponent implements OnInit{

  protected wordData:string="";

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.post("https://www.verbformen.com/conjugation/?w=Sache", { responseType: 'text' }).subscribe(
      res => {
        console.log(res)  // Antwort in wordData speichern
        // console.log(this.wordData);  // Ausgabe der erhaltenen Daten in der Konsole
      },
      error => {
        console.error('Fehler bei der Anfrage:', error);
      }
    );
  }


}
