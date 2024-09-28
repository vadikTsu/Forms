import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../app.component";
import {HttpClient} from "@angular/common/http";
import {WordService} from "../../../../docs/word.service";

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrl: './words.component.css'
})
export class WordsComponent implements OnInit{

  protected text: string = "";
  lines: string[] = []

  constructor(private wordService: WordService) { }

  ngOnInit(): void {
    this.text = this.getRandomLine();
  }

  getRandomLine(): string {
    return this.wordService.lines[Math.floor(Math.random() * this.wordService.lines.length)];
  }

  onNextClicked() {
    this.text = this.getRandomLine();
  }
}
