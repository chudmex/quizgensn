  export class AnswerModel {
    
    letter?: string;
    labelLetter?: string;
    text?: string;
    isValid?: boolean;
    isSelect?: boolean;
    numberAnswer?: number;
  
    constructor(params: {
        letter?: string;
        labelLetter?: string;
        text?: string;
        isValid?: boolean;
        isSelect?: boolean;
        numberAnswer? : number;
      } = {}) {
      this.letter = params.letter || '';
      this.labelLetter = params.labelLetter || '';
      this.text = params.text || '';
      this.isValid = params.isValid || false;
      this.isSelect = params.isSelect || false;
      this.numberAnswer = params.numberAnswer || 0;
    }
} 
    