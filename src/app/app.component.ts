import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {WordService} from "../../docs/word.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Forms';

  lines: string[] = []

  constructor(private wordService: WordService) { }

  ngOnInit(): void {
    this.wordService.loadWords().subscribe(
      (lines) => {
        console.log('Слова загружены:', lines);
      },
      (error) => {
        console.error('Ошибка при загрузке файла:', error);
      }
    );
  }
}
