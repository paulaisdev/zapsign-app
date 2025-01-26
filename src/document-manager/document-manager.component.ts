import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar'; 
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { DocumentService } from './document.service'


@Component({
  selector: 'app-document-manager',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './document-manager.component.html',
  styleUrls: ['./document-manager.component.css'],
})
export class DocumentManagerComponent implements OnInit {
  documentForm: FormGroup;
  documents: any[] = [];
  loading: boolean = false; // Adicionado para controlar o spinner
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private documentService: DocumentService,
    private snackBar: MatSnackBar // Serviço de snack bar para feedbacks
  ) {
    this.documentForm = this.fb.group({
      company: [{ value: 'ZapSign', disabled: false }],
      name: ['', Validators.required],
      signers: this.fb.array([this.createSigner()]),
      pdf_path: ['', [Validators.required, Validators.pattern('https?://.+')]],
    });
  }

  ngOnInit(): void {
    this.loadDocuments();
  }

  get signers(): FormArray {
    return this.documentForm.get('signers') as FormArray;
  }

  createSigner(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  addSigner(): void {
    this.signers.push(this.createSigner());
  }

  removeSigner(index: number): void {
    this.signers.removeAt(index);
  }

  submit(): void {
    this.errorMessage = null;
    const formData = this.documentForm.value;

    if (this.documentForm.valid) {
      this.loading = true;
      this.documentService.createDocument(formData).subscribe(
        () => {
          this.loading = false;
          this.snackBar.open('Documento criado com sucesso!', 'Fechar', {
            duration: 3000,
            panelClass: ['success-snackbar'],
          });
          this.loadDocuments();
        },
        (error) => {
          this.loading = false;
          this.snackBar.open(
            error.error?.error || 'Erro ao criar o documento.',
            'Fechar',
            { duration: 3000, panelClass: ['error-snackbar'] }
          );
        }
      );
    }
  }

  private loadDocuments(): void {
    this.documentService.getDocuments().subscribe((data) => {
      this.documents = data;
    });
  }
}
