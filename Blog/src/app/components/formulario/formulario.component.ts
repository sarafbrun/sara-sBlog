import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostsService } from 'src/app/Services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']

})
export class FormularioComponent {

  formulario: FormGroup;

  constructor(
    private postsService: PostsService,
    private router: Router) {
    this.formulario = new FormGroup({
      titulo: new FormControl(null, [
        Validators.required
      ]),
      texto: new FormControl(null, [
        Validators.maxLength(50)
      ]),
      autor: new FormControl(),
      imagen: new FormControl(null, [
        Validators.required
      ]),
      fecha: new FormControl(),
      categoria: new FormControl('', [
        Validators.required
      ])
    })


  }

  onSubmit() {
    this.postsService.create(this.formulario.value);
    this.router.navigate(['blog/posts'])
  }

  checkError(control: string, validator: string) {
    return this.formulario.get(control)?.hasError(validator) && this.formulario.get(control)?.touched
  }
}
