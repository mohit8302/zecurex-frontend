import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment'; // Import environment

@Injectable({
  providedIn: 'root',
})
export class CertificateService {
  private apiUrl = `${environment.apiUrl}/certificates/verify`; // Use environment variable

  constructor(private http: HttpClient) {}

  verifyCertificate(code: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?code=${code}`).pipe(
      map((response: any) => {
        // Transform the response if needed
        return {
          studentName: response.studentName || 'N/A',
          courseName: response.courseName || 'N/A',
          issuedAt: response.issuedAt || null,
          certificateNumber: response.certificateNumber || 'N/A',
        };
      })
    );
  }
  generateCertificate(name: string, courseName: string): Observable<Blob> {
    const body = { name, courseName };
    return this.http.post(`${environment.apiUrl}/certificates/generate`, body, {
      responseType: 'blob',
    });
  }
}
