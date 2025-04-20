import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-servicios',
  imports: [CommonModule],
  templateUrl: './servicios.component.html',
})
export class ServiciosComponent implements OnInit, OnDestroy {
  servicios = [
    { icono: '🩺', titulo: 'Consultas generales', descripcion: 'Evaluaciones médicas completas para detectar problemas de salud y mantener a tu mascota en óptimas condiciones.' },
    { icono: '💉', titulo: 'Vacunación', descripcion: 'Aplicación de vacunas esenciales para prevenir enfermedades graves como parvovirus, moquillo y rabia.' },
    { icono: '🦷', titulo: 'Odontología veterinaria', descripcion: 'Limpieza dental, extracciones y tratamientos para una boca sana y sin dolor.' },
    { icono: '🚑', titulo: 'Emergencias 24/7', descripcion: 'Atención inmediata para situaciones críticas, con personal capacitado y equipamiento avanzado.' },
    { icono: '🛁', titulo: 'Baño y peluquería', descripcion: 'Servicios de higiene y estética para que tu mascota luzca y se sienta genial.' },
    { icono: '🐾', titulo: 'Rehabilitación y fisioterapia', descripcion: 'Programas personalizados para recuperación postquirúrgica o mejora de movilidad.' }
  ];

  grupos: any[][] = [];
  currentIndex = 0;
  autoSlideInterval: any;

  ngOnInit() {
    this.actualizarGrupos();
    this.autoSlideInterval = setInterval(() => this.nextSlide(), 5000);
    window.addEventListener('resize', this.actualizarGrupos.bind(this));
  }

  ngOnDestroy() {
    clearInterval(this.autoSlideInterval);
    window.removeEventListener('resize', this.actualizarGrupos.bind(this));
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.grupos.length;
    this.scrollToIndex();
  }

  selectSlide(index: number) {
    this.currentIndex = index;
    this.scrollToIndex();
  }

  scrollToIndex() {
    const container = document.querySelector('.scroll-container') as HTMLElement;
    if (container) {
      const cardWidth = container.clientWidth;
      container.scrollTo({ left: this.currentIndex * cardWidth, behavior: 'smooth' });
    }
  }

  actualizarGrupos() {
    const width = window.innerWidth;
    const porSlide = width >= 1024 ? 3 : width >= 640 ? 2 : 1;

    const copia = [...this.servicios];
    const resultado = [];

    while (copia.length) {
      resultado.push(copia.splice(0, porSlide));
    }

    this.grupos = resultado;
    this.currentIndex = 0;

    setTimeout(() => this.scrollToIndex(), 0);
  }
}
