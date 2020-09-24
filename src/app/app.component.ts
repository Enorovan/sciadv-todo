import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoList';
  public items = []; 
  
    /* A two-way binding performed which 
       pushes text on division */
    public newTask; 
  
  
    /* When input is empty, it will 
       not create a new division */
    public addToList() { 
        if (this.newTask == '') { 
        } 
        else { 
            this.items.push(this.newTask); 
            this.newTask = ''; 
        } 
    } 
  
    /* This function takes to input the 
       task, that has to be deleted*/
    public deleteTask(index) { 
        this.items.splice(index, 1); 
    } 
}
