import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  constructor() {}

  salvarCadastro(cadastro: any) {
    const texto = `Nome: ${cadastro.nome}\nEmail: ${cadastro.email}\nTelefone: ${cadastro.telefone}\n\n`;
    this.downloadTxtFile(texto, 'cadastro.txt');
  }

  downloadTxtFile(text: string, filename: string) {
    const element = document.createElement('a');
    element.setAttribute(
      'href',
      'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
    );
    element.setAttribute('download', filename);
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
}
