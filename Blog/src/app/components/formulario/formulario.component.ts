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
        Validators.maxLength(700)
      ]),
      autor: new FormControl(),
      imagen: new FormControl(null, [
        Validators.required
      ]),
      fecha: new FormControl(),
      categoria: new FormControl(null, [
        Validators.required
      ])
    })


  }

  onSubmit() {
    this.postsService.create(this.formulario.value);
    this.router.navigate(['blog/posts'])
  }
}
