import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ServiceService } from '@service/service.service';

@Component({
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    RouterLink,
    CommonModule,
  ],
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  providers: [ServiceService],
})
export class FormsComponent {
  constructor(private ServiceService: ServiceService, private router: Router) {}

  formulario = {
    Nombre: '',
    Descripcion: '',
  };

  EnviarDatos(form: any) {
    if (form.valid) {
      console.log('Nombre:', this.formulario.Nombre);
      console.log('Descripcion:', this.formulario.Descripcion);
      this.guardarDatos();

      this.router.navigate(['']);
    } else {
      console.log('Formulario no válido');
    }
  }
  guardarDatos() {
    const data = {
      Nombre: this.formulario.Nombre,
      Descripcion: this.formulario.Descripcion,
    };
    this.ServiceService.save(data);
    console.log('Datos guardados:', data);
  }

  formularioValido = false;

  Validity() {
    this.formularioValido = this.formularioValido =
      this.formulario.Nombre.length >= 3 &&
      this.formulario.Descripcion.length >= 4;
  }
}
