import { Component } from '@angular/core';
import { CertificateService } from '../../core/services/certificate.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss',
})
export class CertificationsComponent {
  licenseNumber: string = '';
  certificateDetails: any = null;
  errorMessage: string = '';
  name: string = '';
  courseName: string = '';
  generateError = '';
  isGenerating: boolean = false;
  constructor(private certificateService: CertificateService) {}

  verifyCertificate() {
    if (!this.licenseNumber.trim()) {
      this.errorMessage = 'Please enter a license number.';
      return;
    }

    this.certificateService.verifyCertificate(this.licenseNumber).subscribe({
      next: (data) => {
        this.certificateDetails = data;
        this.errorMessage = '';
      },
      error: () => {
        this.errorMessage =
          'Certificate not found. Please check the license number.';
        this.certificateDetails = null;
      },
    });
  }

  generateCertificate() {
    if (!this.name.trim() || !this.courseName.trim()) {
      this.generateError = 'Please provide both Name and Course Name.';
      return;
    }

    this.isGenerating = true; // Start loader
    this.certificateService
      .generateCertificate(this.name, this.courseName)
      .subscribe({
        next: (blob) => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `${this.name.replace(/\s+/g, '-')}-certificate.pdf`;
          a.click();
          this.generateError = '';
        },
        error: () => {
          this.generateError = 'Failed to generate certificate.';
        },
        complete: () => {
          this.isGenerating = false; // Stop loader
        },
      });
  }
}
