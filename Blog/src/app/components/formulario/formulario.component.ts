import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/Services/posts.service';
import { Post } from 'src/app/interfaces/post.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']

})
export class FormularioComponent {
  [x: string]: any;

  formulario: FormGroup;
  nuevoPost: Post;

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

    this.nuevoPost = {
      titulo: '',
      texto: '',
      autor: '',
      imagen: '',
      fecha: '',
      categoria: ''
    }

  }

  onSubmit() {
    this.postsService.create(this.nuevoPost);
    this.nuevoPost = {
      titulo: '',
      texto: '',
      autor: '',
      imagen: '',
      fecha: '',
      categoria: ''
    }
    this.router.navigate(['/posts'])
  }
}
