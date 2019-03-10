import { Component, OnInit, Input } from '@angular/core';
import { WordModel } from 'src/app/models/word';

@Component({
  selector: 'app-word-item',
  templateUrl: './word-item.component.html',
  styleUrls: ['./word-item.component.css']
})
export class WordItemComponent implements OnInit {
// word:WordModel = {word1: '', word2: '', sum:0};
  constructor() {
  }
  @Input() words: WordModel
  ngOnInit() {
    // if(this.words.sum > this.word.sum){
    //   this.word = this.words;
    // }
  }

}
