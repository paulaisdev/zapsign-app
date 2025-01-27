import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DocumentService } from './document.service';

describe('Integration: DocumentManagerComponent with Backend', () => {
  let service: DocumentService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DocumentService],
    });

    service = TestBed.inject(DocumentService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch documents from the backend', () => {
    const mockDocuments = [
      { id: 1, name: 'Test Doc 1', pdf_path: 'https://example.com/doc1.pdf' },
      { id: 2, name: 'Test Doc 2', pdf_path: 'https://example.com/doc2.pdf' },
    ];

    service.getDocuments().subscribe((documents) => {
      expect(documents).toEqual(mockDocuments);
      expect(documents.length).toBe(2);
    });

    const req = httpMock.expectOne('https://zapsign-backend-l4jq.onrender.com/api/documents/');
    expect(req.request.method).toBe('GET');
    req.flush(mockDocuments);
  });

  it('should send a document to the backend', () => {
    const newDocument = {
      name: 'New Test Doc',
      pdf_path: 'https://example.com/new-doc.pdf',
      signers: [{ name: 'João Silva', email: 'joaosilva@email.com' }],
    };

    service.createDocument(newDocument).subscribe((response) => {
      expect(response).toEqual(newDocument);
    });

    const req = httpMock.expectOne('https://zapsign-backend-l4jq.onrender.com/api/documents/');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newDocument);
    req.flush(newDocument);
  });
});
