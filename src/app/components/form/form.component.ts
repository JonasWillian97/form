import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
h2: string = "formulário de cadastro";
form: FormGroup = this.fb.group({
  name: ['', [Validators.required, Validators.minLength(3)]],
  email:['', [Validators.required, Validators.email]],
  gender: ['', [Validators.required]]
})

constructor(private fb: NonNullableFormBuilder){
 
}


onSubmit(){
  console.log(this.form.value.name);
  console.log(this.form.value.email);
  console.log(this.form.value.gender);
}
}
