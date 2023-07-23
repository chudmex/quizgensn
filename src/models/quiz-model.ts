import { QuestionModel } from "./question-model";

export class QuizModel {
    title: string = '';
    description: string = '';
    questions: QuestionModel[] = [];
  }