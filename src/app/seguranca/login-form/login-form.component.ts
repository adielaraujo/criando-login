import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {


  @Input() login: string;
  @Input() senha: string;

  constructor() { }

  ngOnInit() {
  }

  salvar(form:any){
    console.log(form);
    console.log(form.value.login);
    console.log(form.value.senha);
  }


}
