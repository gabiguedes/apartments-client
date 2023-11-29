import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../../services/user.service";
import { IUser } from "../../interfaces/IUser";
import { IUserTokenResponse } from "../../interfaces/IUserTokenResponse";
import { HttpErrorResponse } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit{

  loginForm!: FormGroup;
  msgInvalidCpf : string = "CPF Inválido"

  constructor(private formBuilder: FormBuilder, private userService: UserService, private snackBar: MatSnackBar, private router: Router) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      cpf: ['', Validators.compose([Validators.required, this.validateCpf])],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const user: IUser = this.loginForm.getRawValue() as IUser;
    this.userService.requestUser(user).subscribe(
      (response: IUserTokenResponse) => {
        // Sucesso na autenticação
        console.log('Autenticação bem-sucedida', response);
        // Redirecionar para a página desejada
        this.router.navigate(['/user-noob']);
        this.snackBar.open('Autenticação bem-sucedida', 'Fechar', {
          duration: 2000, // Duração em milissegundos
        });
      },
      (error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Código 401: Não autorizado (usuário ou senha incorretos)
          console.log('Falha na autenticação, usuário ou senha incorretos');
          this.snackBar.open('Falha na autenticação', 'Usuário ou senha incorretos.', {
            duration: 3000
          });
        } else if (error.status === 403) {
          // Código 403: Proibido (o usuário não tem permissão para acessar)
          console.log('Falha na autenticação, permissão negada');
          this.snackBar.open('Falha na autenticação', 'Usuário ou senha incorretos.', {
            duration: 3000
          });
        } else {
          // Outros códigos de erro
          console.log(`Erro na requisição: ${error.message}`);
        }
      }
    );
  }

  validateCpf = (control: AbstractControl): { invalidCpf: boolean } | null => {
    const cpf = control.value;

    if (cpf) {
      const cpfRegex : RegExp = /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}$/;

      if (!cpfRegex.test(cpf)) {
        return { invalidCpf: true };
      }

      if (!this.isValidCPF(cpf)) {
        return { invalidCpf: true };
      }
    }

    return null;
  };

   isValidCPF(cpf: string): boolean {
    cpf = cpf.replace(/[^\d]+/g, '');

    if (cpf === '' || cpf.length !== 11) {
      return false;
    }

    if (
      cpf === '00000000000' ||
      cpf === '11111111111' ||
      cpf === '22222222222' ||
      cpf === '33333333333' ||
      cpf === '44444444444' ||
      cpf === '55555555555' ||
      cpf === '66666666666' ||
      cpf === '77777777777' ||
      cpf === '88888888888' ||
      cpf === '99999999999'
    ) {
      return false;
    }

    // Valida 1o digito
    let add = 0;
    for (let i = 0; i < 9; i++) {
      add += parseInt(cpf.charAt(i), 10) * (10 - i);
    }

    let rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
      rev = 0;
    }

    if (rev !== parseInt(cpf.charAt(9), 10)) {
      return false;
    }

    // Valida 2o digito
    add = 0;
    for (let i = 0; i < 10; i++) {
      add += parseInt(cpf.charAt(i), 10) * (11 - i);
    }

    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
      rev = 0;
    }

    return rev === parseInt(cpf.charAt(10), 10);
  }

}
