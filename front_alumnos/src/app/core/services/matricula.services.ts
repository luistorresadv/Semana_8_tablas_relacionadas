import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Imatricula } from '../interfaces/imatricula';

@Injectable({
  providedIn: 'root',
})
export class MatriculaServices {
  private readonly http = inject(HttpClient);
  private readonly apiurl = 'http://localhost:3000/matriculas';

  todos(): Observable<Imatricula[]> {
    return this.http.get<Imatricula[]>(this.apiurl);
  }

  uno(id: number): Observable<Imatricula> {
    return this.http.get<Imatricula>(`${this.apiurl}/${id}`);
  }

  nuevo(matricula: any): Observable<Imatricula> {
    return this.http.post<Imatricula>(this.apiurl, matricula);
  }

  editar(id: number, matricula: any): Observable<Imatricula> {
    return this.http.put<Imatricula>(`${this.apiurl}/${id}`, matricula);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiurl}/${id}`);
  }
}