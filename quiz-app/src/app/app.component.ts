import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { QuestionsService } from 'src/app/shared/services/questions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'quiz-app';

  constructor(private questionsService: QuestionsService) { }
  
  ngOnInit(){
    this.questionsService.getAllQuestions();
  }
}
