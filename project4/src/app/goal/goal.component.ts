import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals: Goal[] = [
    new Goal(1, 'George Eliot', 'It is never too late to be what you might have been.', new Date(2019,9,14)),
    new Goal(2,'Maya Angelou','There is no greater agony than bearing an untold story inside you.',new Date(2019,6,9)),
    new Goal(3,'J.K. Rowling','To the well-organized mind, death is but the next great adventure.',new Date(2019,1,12)),
    new Goal(4,'Winston S. Churchill','Success is not final, failure is not fatal: it is the courage to continue that counts.',new Date(2019,11,18)),
    
  ];
 

  completeGoal(isComplete: boolean, index: any){
    if (isComplete) {
      this.goals.splice(index,1);
    }
  }
  addNewGoal(goal: Goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }
  deleteGoal(isComplete: boolean, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1)
      }
    }
  }
  toggleDetails(index:any){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  
  constructor() { }
 
  ngOnInit()  {
  }

}