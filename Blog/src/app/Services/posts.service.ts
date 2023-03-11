import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private arrPost: Post[];

  constructor() {
    this.arrPost = [
      {
        titulo: 'Irlanda - highlands',
        texto: 'Qué pequeña eres brizna de hierba. Sí, pero tengo toda la Tierra a mis pies. ',
        autor: 'Rabindranath Tagore',
        imagen: 'https://viajes.nationalgeographic.com.es/medio/2021/11/11/isla-lewis_c3d8b4b2_1800x1136.jpg',
        fecha: '10/03/2015',
        categoria: 'viajes'
      },
      {
        titulo: 'Favorite plate in the world',
        texto: 'El secreto del éxito en la vida es comer lo que te gusta y dejar que la comida combata dentro.',
        autor: 'Marc Twain',
        imagen: 'https://niceexperience.net/wp-content/uploads/blogtailandia/2017/11/plato-nacional-tailandia-pad-thai.jpg',
        fecha: '25/05/2018',
        categoria: 'gastronomía'
      },
      {
        titulo: 'Si es contigo, es mejor',
        texto: 'Eres mi todo, mi más, mi siempre',
        autor: 'Danns Vega',
        imagen: 'https://images.ecestaticos.com/0yp3jbb02Hx-vrgRcqJgcKtVHh8=/240x0:2121x1410/996x747/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F12c%2F7ae%2F61c%2F12c7ae61c0b2e76905bdffa3bf6cbad1.jpg',
        fecha: '17/06/2020',
        categoria: 'social'
      }
    ]
  }

  //Para que se impriman todos los posts

  getAll() {
    if (localStorage.getItem('arrPosts')) {
      this.arrPost = JSON.parse(localStorage.getItem('arrPosts')!);
    }
    return this.arrPost;
  }

  //Filtro por categoria

  getCategoria(categoria: string) {
    return this.arrPost.filter(post => post.categoria === categoria);
  }




  create(post: Post) {
    this.arrPost.push(post);
    localStorage.setItem('arrPosts', JSON.stringify(this.arrPost));
  }



}
