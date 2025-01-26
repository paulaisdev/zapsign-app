import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DocumentService } from './document.service';

describe('DocumentService', () => {
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

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch documents via GET', () => {
    const mockDocuments = [
      { name: 'Doc 1', pdf_path: 'https://example.com/doc1.pdf' },
      { name: 'Doc 2', pdf_path: 'https://example.com/doc2.pdf' },
    ];

    service.getDocuments().subscribe((documents) => {
      expect(documents.length).toBe(2);
      expect(documents).toEqual(mockDocuments);
    });

    const req = httpMock.expectOne('http://localhost:8000/api/documents/');
    expect(req.request.method).toBe('GET');
    req.flush(mockDocuments);
  });

  it('should post a document via POST', () => {
    const mockDocument = {
      name: 'Test Document',
      pdf_path: 'https://example.com/doc.pdf',
    };

    service.createDocument(mockDocument).subscribe((response) => {
      expect(response).toEqual(mockDocument);
    });

    const req = httpMock.expectOne('http://localhost:8000/api/documents/');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockDocument);
    req.flush(mockDocument);
  });
});
