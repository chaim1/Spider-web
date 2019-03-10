import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchWordService } from '../service/search-word.service';


@Component({
  selector: 'app-search-word',
  templateUrl: './search-word.component.html',
  styleUrls: ['./search-word.component.css']
})
export class SearchWordComponent implements OnInit {
 words: Object;

  @ViewChild('f') signupForm: NgForm;


  constructor(private searchWordService: SearchWordService) { }

  ngOnInit() {
  }

  onSubmit(){
    return this.searchWordService.getWordDb(this.signupForm.value.wordSearch).subscribe(res => {
      this.words = res;
    });
  }
}
