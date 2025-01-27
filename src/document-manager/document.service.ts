import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private apiUrl = 'https://zapsign-backend-l4jq.onrender.com/api/documents/';

  constructor(private http: HttpClient) {}

  createDocument(document: any): Observable<any> {
    return this.http.post(this.apiUrl, document);
  }

  getDocuments(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
