import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Question } from 'src/app/shared/models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  questions: Question[];
  constructor(private httpService: HttpClient) { }

  getAllQuestions() {
    this.httpService.get('../assets/questions.json').subscribe(
      data=>{
        this.questions = data as Question[];
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    )
  }
}
