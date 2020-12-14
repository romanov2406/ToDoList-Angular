import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter

} from '@angular/core';

@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
  styleUrls: ['./decorator.component.css']
})
export class DecoratorComponent implements OnInit {
  // Decorators
  @Input() arr: any[];
  @Output() message = new EventEmitter < object > ()
  save: string;
  taskIndex: number;
  isShow: boolean;
  isRed: boolean;
  constructor() {}

  ngOnInit(): void {}
// Method to delete object from array 
  deleteTask(index: number): void {
    this.arr.splice(index, 1);
    this.message.emit(this.arr);
  }
  // Method to edit some properties in array 
  editTask(index): void {
    this.save = this.arr[index].name
    this.taskIndex = index;
    this.isShow = true;
  }
  active(index: number): void {
    this.arr[index].status = !this.arr[index].status;
  }
  // Method to save properties in array 
  saveTask(): void {
    if (this.save) {
      this.arr[this.taskIndex].name = this.save;
      this.save = '';
      this.isShow = false;
      this.isRed = false;
    } else {
      alert('Заповніть всі поля');
      this.isRed = true;
    }
  }
}
