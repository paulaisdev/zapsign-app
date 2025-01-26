import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DocumentManagerComponent } from './document-manager.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DocumentService } from './document.service';

describe('DocumentManagerComponent', () => {
  let component: DocumentManagerComponent;
  let fixture: ComponentFixture<DocumentManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DocumentManagerComponent,
        ReactiveFormsModule,
        MatSnackBarModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        MatProgressSpinnerModule,
        HttpClientTestingModule 
      ],
      providers: [DocumentService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with a valid form', () => {
    expect(component.documentForm.valid).toBeFalse();
    component.documentForm.patchValue({
      company: 'ZapSign',
      name: 'Documento Teste',
      pdf_path: 'http://example.com/test.pdf',
    });
    expect(component.documentForm.valid).toBeTrue();
  });

  it('should call createDocument on submit with valid form', () => {
    spyOn(component, 'submit').and.callThrough();
    spyOn(component['documentService'], 'createDocument').and.callFake(() => {
      return { subscribe: () => {} };
    });

    component.documentForm.patchValue({
      company: 'ZapSign',
      name: 'Documento Teste',
      pdf_path: 'http://example.com/test.pdf',
    });

    const submitButton = fixture.debugElement.nativeElement.querySelector('button[type="submit"]');
    submitButton.click();

    expect(component.submit).toHaveBeenCalled();
    expect(component['documentService'].createDocument).toHaveBeenCalledWith({
      company: 'ZapSign',
      name: 'Documento Teste',
      pdf_path: 'http://example.com/test.pdf',
      signers: [],
    });
  });
});
