import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.scss'
})
export class CreateStudentComponent {
 model = {
  name:'',
  date:'',
  aadhar:'',
 }
  userform: any;
 
  resetForm(form: NgForm): void {
    form.reset();
  }

 onSubmit(userform:NgForm):void{
  if(userform.valid){
    alert(this.model.name)
    this.resetForm(userform); 
  }else{
    alert('pls fill the form correctly')
  }

 }
 

 
}
