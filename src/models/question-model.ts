import { AnswerModel } from "./answer-model";

export class QuestionModel {
    
    numberQuestion?: number;
    label: string;
    answers: AnswerModel[];
    isMulti: boolean;
    validAnswers: string;
    classText?: string;
    answerSelected?: string;
    image?: string;
    imagePath?: any;
    tieneImagen?: boolean;
    constructor(params: {
        numberQuestion?: number;
        label?: string;
        answers?: AnswerModel[],
        isMulti?: boolean;
        validAnswers: string;
        classText?: string;
        answerSelected?: string;
        image?: string;
        imagePath?: any;
        tieneImagen?: boolean;
      } = {
        validAnswers: "",
      }) {
      this.numberQuestion = params.numberQuestion || 0;
      this.label = params.label || '';
      this.answers = params.answers || [];
      this.isMulti = params.isMulti || false;
      this.validAnswers = params.validAnswers || '';
      this.answerSelected = params.answerSelected || '';
      this.classText = params.classText || '';
      this.image = params.image || '';
      this.imagePath = params.imagePath || '';
      this.tieneImagen = params.tieneImagen || false;
    }
} 
    