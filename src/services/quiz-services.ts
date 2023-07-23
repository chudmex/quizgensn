import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { QuizModel } from '../models/quiz-model';
import { AnswerModel } from '../models/answer-model';
import { QuestionModel } from '../models/question-model';
import * as jsonData from '../assets/itsm_v2.json';

@Injectable({
    providedIn: 'root'
})

export class QuizService {

    getModelQuiz(){
        return jsonData;
    }
}