import { Component } from '@angular/core';
import { CadastroService } from '../../services/app.services';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',
})
export class CadastroComponent {
  nome!: string;
  email!: string;
  telefone!: string;
  stack!: string;

  constructor(private cadastroService: CadastroService) {}

  salvarCadastro() {
    const novoCadastro = {
      nome: this.nome,
      email: this.email,
      telefone: this.telefone,
      stack: this.stack,
    };
    this.cadastroService.salvarCadastro(novoCadastro);
    this.nome = '';
    this.email = '';
    this.telefone = '';
    this.stack = '';
  }
}
