import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private apiUrl = 'http://localhost:8080/api/loans';

  constructor(private http: HttpClient) { }

  getAllLoans(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getLoanById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createLoan(loan: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, loan);
  }

  updateLoan(id: number, loan: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, loan);
  }

  returnBook(id: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}/return`, {});
  }
}
