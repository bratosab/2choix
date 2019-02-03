export class Choice {
  questionId: string;
  answer: Answer;
}

export enum Answer {
  First,
  Second,
  Skipped
}
