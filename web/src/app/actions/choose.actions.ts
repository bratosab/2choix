import { Action } from '@ngrx/store';

export enum ActionTypes {
  FirstAnswer = '[Choose Page] choose first answer',
  SecondAnswer = '[Choose Page] choose second answer',
  SkipQuestion = '[Choose Page] skip question'
}

export class ChooseFirstAnswer implements Action {
  readonly type = ActionTypes.FirstAnswer;

  constructor(public payload: { questionId: string }) {}
}

export class ChooseSecondAnswer implements Action {
  readonly type = ActionTypes.SecondAnswer;

  constructor(public payload: { questionId: string }) {}
}

export class SkipQuestion implements Action {
  readonly type = ActionTypes.SkipQuestion;

  constructor(public payload: { questionId: string }) {}
}

export type ActionsUnion =
  | ChooseFirstAnswer
  | ChooseSecondAnswer
  | SkipQuestion;
