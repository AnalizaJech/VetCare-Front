import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonios',
  imports: [NgFor],
  templateUrl: './testimonios.component.html'
})
export class TestimoniosComponent {

  /*
👩 Avatares femeninos (women):
https://randomuser.me/api/portraits/women/10.jpg

👨 Avatares masculinos (men):
https://randomuser.me/api/portraits/men/15.jpg
*/

  testimonios = [
    {
      nombre: 'Laura M.',
      rol: 'Cliente de VetCare',
      mensaje: 'Desde que uso VetCare no olvido ni una vacuna. ¡Mi perro está feliz y sano!',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      nombre: 'Dr. Carlos León',
      rol: 'Veterinario registrado',
      mensaje: 'Como veterinario, tener los historiales al instante me ahorra muchísimo tiempo.',
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
      nombre: 'Sofía R.',
      rol: 'Propietaria de gato',
      mensaje: 'Reservar citas es súper fácil y rápido. Además, me llegan notificaciones por WhatsApp.',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    {
      nombre: 'David T.',
      rol: 'Administrador de clínica',
      mensaje: 'VetCare nos ha ayudado a organizar mejor las agendas y a reducir cancelaciones.',
      avatar: 'https://randomuser.me/api/portraits/men/31.jpg',
    },
    {
      nombre: 'María Elena G.',
      rol: 'Cliente fiel desde 2023',
      mensaje: 'Amo cómo puedo ver el historial de mi mascota y sus controles con solo un clic.',
      avatar: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      nombre: 'Dr. Luis Mendoza',
      rol: 'Veterinario en Lima',
      mensaje: 'Una herramienta intuitiva y moderna. Mis pacientes y sus dueños lo agradecen.',
      avatar: 'https://randomuser.me/api/portraits/men/54.jpg',
    },
  ];
}
