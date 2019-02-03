import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  ChooseFirstAnswer,
  ChooseSecondAnswer,
  SkipQuestion
} from '../actions/choose.actions';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.scss']
})
export class ChooseComponent implements OnInit {
  private questionId = 'uuid';

  constructor(private store: Store<{ count: number }>) {}

  ngOnInit() {}

  chooseFirst() {
    this.store.dispatch(new ChooseFirstAnswer({ questionId: this.questionId }));
  }

  chooseSecond() {
    this.store.dispatch(
      new ChooseSecondAnswer({ questionId: this.questionId })
    );
  }

  skipQuestion() {
    this.store.dispatch(new SkipQuestion({ questionId: this.questionId }));
  }
}
