import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

import { ServiceService } from '@service/service.service';

@Component({
  standalone: true,
  imports: [ RouterModule,MatCardModule, CommonModule,MatIcon ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ServiceService],
})
export class AppComponent implements OnInit{


  constructor(private ServiceService: ServiceService) {}

  resultado: any;

  ngOnInit(): void {
    this.ServiceService.getAll().subscribe((Notas) => {
      this.resultado = Notas;
    });
  }


  showScroll = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScroll = window.pageYOffset > 100;
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


}
