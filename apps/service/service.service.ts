import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ServiceService {
  private apiUrl = 'Notas';
  private serviciosSubject = new BehaviorSubject<any[]>(
    this.getAllServiciosData()
  );

  constructor() {}

  getAll() {
    return this.serviciosSubject.asObservable();
  }

  save(Nota: any): void {
    const Notas = this.getAllServiciosData();
    Nota.id = Math.random().toString(36).substr(2, 9);
    Notas.push(Nota);
    this.updateServicios(Notas);
  }

  delete(servicioId: string): void {
    const Notas = this.getAllServiciosData().filter(
      (Nota) => Nota.id !== servicioId
    );
    this.updateServicios(Notas);
  }

  private getAllServiciosData(): any[] {
    const Notas = localStorage.getItem(this.apiUrl);
    return Notas ? JSON.parse(Notas) : [];
  }

  private updateServicios(Notas: any[]): void {
    localStorage.setItem(this.apiUrl, JSON.stringify(Notas));
    this.serviciosSubject.next(Notas);
  }
}
