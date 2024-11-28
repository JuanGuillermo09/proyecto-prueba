import { Component, OnInit } from '@angular/core';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ServiceService } from '@service/service.service';

@Component({
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    RouterLink,
    CommonModule,
  ],
  selector: 'app-card',
  templateUrl: './Card.component.html',
  styleUrls: ['./Card.component.css'],
  providers: [ServiceService],
})
export class CardComponent implements OnInit {
  constructor(private ServiceService: ServiceService) {}

  resultado: any;

  ngOnInit(): void {
    this.ServiceService.getAll().subscribe((Notas) => {
      this.resultado = Notas;
    });
  }

  eliminarDatos(NotasId: string) {
    this.ServiceService.delete(NotasId);
    this.resultado = this.resultado.filter((item: any) => item.id !== NotasId);
    console.log('Notas eliminado con ID:', NotasId);
  }
}
