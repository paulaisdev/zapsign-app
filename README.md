# Documentação de Frontend com Angular e TypeScript

## Sumário
1. [Introdução](#1-introdução)
2. [Estrutura do Projeto](#2-estrutura-do-projeto)
3. [Configuração e Instalação](#3-configuração-e-instalação)
4. [Componentes](#4-componentes)
5. [Serviços](#5-serviços)
6. [Rotas](#6-rotas)
7. [Estado da Aplicação](#7-estado-da-aplicação)
8. [Testes](#8-testes)
9. [Práticas Recomendadas](#9-práticas-recomendadas)
10. [Recursos Adicionais](#10-recursos-adicionais)

---

Esta aplicação Angular é uma interface frontend para gerenciar documentos para assinatura digital. Ela permite criar documentos, adicionar signatários e associar arquivos PDF para assinatura.

### Tecnologias Utilizadas
- **Framework:** Angular 15+
- **Linguagem:** TypeScript
- **Estilização:** Angular Material, CSS Responsivo
- **Outras Bibliotecas:** RxJS, Angular Animations

---

## Estrutura do Projeto

A estrutura segue o padrão do Angular CLI:

```
/src
  /app
    /components
      document-manager.component.ts // Componente principal
    /services
      document.service.ts           // Serviço de API
  /assets                          // Recursos estáticos (imagens, ícones, etc.)
  environments                     // Configuração de ambientes (dev/prod)
  main.ts                          // Arquivo de entrada
```

### Diretórios Principais
- **`/components`**: Contém os componentes reutilizáveis.
- **`/services`**: Contém os serviços para interagir com APIs RESTful.
- **`/environments`**: Configuração de URLs e chaves para diferentes ambientes.

---

## Demo

Confira a aplicação em funcionamento clicando no link abaixo:

[🔗 ZapSign App - Demo](https://paulaisdev.github.io/zapsign-app/)

---

## Configuração e Instalação

### Pré-requisitos
- **Node.js**: 16+
- **npm** ou **yarn**
- **Angular CLI**: 15+

### Passos de Instalação
1. Clone o repositório:
```bash
git clone [URL]
cd [nome-do-projeto]
```

2. Instale as dependências:
```bash
npm install
```

3. Rode o servidor de desenvolvimento:
```bash
ng serve
```

4. Acesse em: [http://localhost:4200](http://localhost:4200).

---

## Componentes

### DocumentManagerComponent
Este é o componente principal para criar e listar documentos.

#### Funcionalidades
- Criação de documentos.
- Listagem de documentos criados.
- Adição/remoção dinâmica de signatários.

#### Comunicação
- Comunicação com o serviço `DocumentService` para operações CRUD.

---

## Serviços

### DocumentService
Responsável por gerenciar a comunicação com o backend.

#### Métodos
- **`getDocuments`**: Retorna a lista de documentos criados.
- **`createDocument`**: Envia os dados de um novo documento para o backend.

#### Exemplo de Serviço
```typescript
@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  private apiUrl = 'https://zapsign-backend-l4jq.onrender.com/api/documents';

  constructor(private http: HttpClient) {}

  getDocuments(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createDocument(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
```

---

## Rotas

Atualmente, a aplicação usa um único componente sem navegação adicional.

Para futuras extensões, você pode configurar as rotas no `app-routing.module.ts`:
```typescript
const routes: Routes = [
  { path: '', component: DocumentManagerComponent },
];
```

---

## Estado da Aplicação

### Gerenciamento Simples
A aplicação utiliza serviços Angular (`@Injectable`) para gerenciar o estado da lista de documentos.

#### Exemplo
Os documentos são armazenados em um array dentro do `DocumentManagerComponent` e atualizados dinamicamente após as operações de criação.

---

## Testes

### Testes Unitários
Os testes utilizam Jasmine e Karma. Exemplos:

#### Teste de Serviço
```typescript
describe('DocumentService', () => {
  let service: DocumentService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocumentService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(DocumentService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('deve buscar documentos', () => {
    const mockDocuments = [
      { id: 1, name: 'Doc1' },
      { id: 2, name: 'Doc2' },
    ];

    service.getDocuments().subscribe((docs) => {
      expect(docs.length).toBe(2);
      expect(docs).toEqual(mockDocuments);
    });

    const req = httpMock.expectOne(service.apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockDocuments);
  });
});
```

---

## Práticas Recomendadas

### Padrões de Código
- Use **ESLint** para manter consistência no código.
- Nomeie variáveis e funções de forma descritiva.

### Desempenho
- Utilize **Lazy Loading** para módulos grandes.
- Evite cálculos pesados no template HTML.

### Acessibilidade
- Utilize atributos como `aria-label` em botões e inputs.

---

## Recursos Adicionais

- [Documentação do Angular](https://angular.io/docs)
- [Documentação do TypeScript](https://www.typescriptlang.org/docs)
- [Angular Material](https://material.angular.io)
- [RxJS](https://rxjs.dev/)
