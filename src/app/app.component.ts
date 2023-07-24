import { Component } from '@angular/core';
import { QuestionModel } from 'src/models/question-model';
import { QuizModel } from 'src/models/quiz-model';
import { QuizService } from 'src/services/quiz-services';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = ''; 
  questionsQuiz: QuestionModel[] = [] ;
  mostrarResumen: boolean = false;
  totalAciertos: number = 0;
  totalErrores: number = 0;
  noRespondidas: number = 0;
  probalilidadPorcentaje: number = 0;
  mostrarOpcionesInicio: boolean = true;
  preguntasRandom: boolean = false;
  respuestasRandom: boolean = false;
  bloquearPantalla: boolean = false;

  
  constructor(public service: QuizService, private _sanitizer: DomSanitizer){
  }

  public generateLayout (quiz: QuizModel){
    if(this.preguntasRandom){
      this.questionsQuiz = quiz.questions.sort(() => Math.random() - 0.5);
    }else{
      this.questionsQuiz = quiz.questions;
    }

    for (let i = 0; i < this.questionsQuiz.length; i++) {
      this.questionsQuiz[i].classText = 'questionNormal';
      
      if(this.questionsQuiz[i].tieneImagen){
        this.questionsQuiz[i].imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,' 
        + this.questionsQuiz[i].image);
      }
    }

    if(this.respuestasRandom){
      for (let i = 0; i < this.questionsQuiz.length; i++) {
        let tempRespuestas = this.questionsQuiz[i].answers.sort(() => Math.random() - 0.5);
        this.questionsQuiz[i].answers = tempRespuestas;
      }
    }
  }

  validarRespuestas(){
    console.log(this.questionsQuiz);
    this.bloquearPantalla = true;
    this.totalAciertos = 0;
    this.totalErrores = 0;
    this.noRespondidas = 0;
    this.probalilidadPorcentaje = 0;

    this.questionsQuiz.forEach(question => {
      //Si la pregunta fue respondida
      if(!(question.answerSelected != null && question.answerSelected != undefined && question.answerSelected !== "")){
        this.noRespondidas = this.noRespondidas + 1;

      }else{

        //Si la pregunta es multirespuesta
        if(question.isMulti){
           // Se valida si la respuesta es correcta o no
           let arrayValid = question.validAnswers.split(",");
           let selec = Object.assign([], question.answerSelected);
           let isCorrect = this.isSameArray(selec, arrayValid);
           if(isCorrect){
            this.totalAciertos = this.totalAciertos + 1;
            question.classText = 'questionOk';
           }else{
            this.totalErrores = this.totalErrores + 1;
            question.classText = 'questionBad';
          }
        } else{
            // Se valida si la respuesta es correcta o no
            if(question.answerSelected?.toString() === question.validAnswers?.toString()){
              this.totalAciertos = this.totalAciertos + 1;
              question.classText = 'questionOk';
            }else{
              this.totalErrores = this.totalErrores + 1;
              question.classText = 'questionBad';
            }
        }
      }
    });

    this.probalilidadPorcentaje = (this.totalAciertos * 100) / this.questionsQuiz.length;

    this.bloquearPantalla = false;
    this.mostrarResumen = true;
  }

  randomQuestions(){

  }
  
  randomAnswers(){

  }

  intentarDeNuevo(){

  }

  continuar(){
    this.mostrarResumen = false;
  }

  iniciarQuiz(){
    var quiz = new QuizModel();
    quiz = this.service.getModelQuiz();
    this.title = quiz.title;
    this.generateLayout(quiz);
    this.mostrarOpcionesInicio = false;
  }

  isSameArray(array1: string[], array2: string[]){
    if (array1.length === array2.length) {
      return array1.every(element => {
        if (array2.includes(element)) {
          return true;
        }
  
        return false;
      });
    }
  
    return false;
  }
}