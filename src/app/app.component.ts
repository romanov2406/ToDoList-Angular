import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Variable
  parentText: string;
  arr: Array<Itask> = [];
  title = 'decorator';
  isRed: boolean;
  // create class instance and Push this in Array
  addTask(): void {
    if (this.parentText) {
      const TASK = new Task(this.parentText)
      this.arr.push(TASK);
      this.parentText = '';
      this.isRed = false;
    } else {
      alert('Заповніть поле');
      this.isRed = true;
    }
  }
  // Message from decorator Component
  childMessage(message): void {
    this.arr = message
  }
}
// Abstraction
interface Itask {
  name: string,
  status: boolean,
  lernStatus: string
}
// create new class to make new object 
class Task implements Itask {
  constructor(
    public name: string,
    public status: boolean = false,
    public lernStatus: string = 'In Proccces'
  ) { }
}
