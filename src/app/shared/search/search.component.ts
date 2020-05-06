import {Component, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
  @Output() searchText = new EventEmitter;
  inputValue = '';
  constructor() { }

  ngOnInit(): void {
  }

}
