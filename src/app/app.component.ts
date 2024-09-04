import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CreateStudentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'schoolmate';
}
