import * as Choose from '../actions/choose.actions';
import { Answer, Choice } from '../models/choice';

export interface State {
  choice: Choice;
}

export const initialState: State = {
  choice: undefined
};

export function reducer(
  state = initialState,
  action: Choose.ActionsUnion
): State {
  switch (action.type) {
    case Choose.ActionTypes.FirstAnswer: {
      return {
        choice: {
          answer: Answer.First,
          questionId: action.payload.questionId
        }
      };
    }

    case Choose.ActionTypes.SecondAnswer: {
      return {
        choice: {
          answer: Answer.Second,
          questionId: action.payload.questionId
        }
      };
    }

    case Choose.ActionTypes.SkipQuestion: {
      return {
        choice: {
          answer: Answer.Skipped,
          questionId: action.payload.questionId
        }
      };
    }

    default: {
      return state;
    }
  }
}
