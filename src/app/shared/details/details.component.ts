import {Component, Output, OnInit, EventEmitter, Input} from '@angular/core';
import {MovieModel} from "../../../models/movie.model";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class DetailsComponent implements OnInit {
  @Input() isVisible = false;
  @Input() starredSection? = false;
  @Input() item: MovieModel;
  @Output() handleCancel = new EventEmitter;
  @Output() setFav = new EventEmitter;
  inputValue = '';
  constructor() { }

  ngOnInit(): void {
  }

}
