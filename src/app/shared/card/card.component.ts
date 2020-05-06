import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {MovieModel} from "../../../models/movie.model";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {
  @Input() item: MovieModel;
  @Output() favItem = new EventEmitter;
  visible = false;
  @Input() starred? = false;
  constructor() { }

  ngOnInit(): void {
  }

  viewDetails() {
    this.visible = !this.visible;
  }
}
