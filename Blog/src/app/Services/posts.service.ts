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
        imagen: 'https://aventurateaviajar.com/noticias/2021-01-25/10-viajes-por-el-mundo-que-hacer-una-vez-en-la-vida/',
        fecha: '10/03/2015',
        categoria: 'viajes'
      },
      {
        titulo: 'Favorite plate in the world',
        texto: 'El secreto del éxito en la vida es comer lo que te gusta y dejar que la comida combata dentro.',
        autor: 'Marc Twain',
        imagen: 'https://www.paulinacocina.net/pad-thai-wok-comida-tailandesa/21891',
        fecha: '25/05/2018',
        categoria: 'gastronomía'
      },
      {
        titulo: 'Si es contigo, es mejor',
        texto: 'Eres mi todo, mi más, mi siempre',
        autor: 'Danns Vega',
        imagen: 'https://www.elconfidencial.com/alma-corazon-vida/2021-07-17/7-consejos-investigaciones-fortalecer-parejas_2906947/',
        fecha: '17/06/2020',
        categoria: 'social'
      }
    ]
  }
}
