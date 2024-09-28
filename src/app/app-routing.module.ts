import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WordsComponent} from "./components/words/words.component";

const routes: Routes = [
  {path: '', component: WordsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
