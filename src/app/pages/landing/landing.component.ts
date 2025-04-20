import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { BeneficiosComponent } from './components/beneficios/beneficios.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  standalone: true,
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  imports: [
    NavbarComponent,
    HeroComponent,
    BeneficiosComponent,
    TestimoniosComponent,
    FooterComponent,
  ],
})
export class LandingComponent {}
