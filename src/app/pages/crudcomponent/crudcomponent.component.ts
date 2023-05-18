import { Component } from '@angular/core';

@Component({
  selector: 'app-crudcomponent',
  templateUrl: './crudcomponent.component.html',
  styleUrls: ['./crudcomponent.component.scss']
})
export class CrudComponent {
  user = {
    usuario: '',
    correo: '',
    password: 0
  }

  usuarios = [
    {
      usuario: 'natt',
      correo: 'natt@gmail.com',
      password: 9689
    },
    {
      usuario: 'sebas',
      correo: 'seb@gmail.com',
      password: 65345
    },
    {
      usuario: 'mauricio',
      correo: 'mao@hotmail.com',
      password: 31245
    },
    {
      usuario: 'Ricardo',
      correo: 'richard@yahoo.com',
      password: 456789
    },
    {
      usuario: 'valentina',
      correo: 'val@yahoo.es',
      password: 8363
    }
  ]

  monstrarRegistros() {
    return this.usuarios.length > 0;
  }

  crearRegistro() {
    if (this.user.usuario == "" || this.user.password == null || this.user.correo == "" || this.user.password == 0) {
      alert("No debe estar vacio")
      return;
    }
    for (let x = 0; x < this.usuarios.length; x++)
      if (this.usuarios[x].usuario == this.user.usuario) {
        alert("usuario registrado")
        return;
      }
    this.usuarios.push({
      usuario: this.user.usuario,
      correo: this.user.correo,
      password: this.user.password
    })
    this.user.usuario = '';
    this.user.correo = '';
    this.user.password = 0;
  }

  borrarRegistro(parametro: string) {
    for (let x = 0; x < this.usuarios.length; x++)
      if (this.usuarios[x].usuario == parametro) {
        this.usuarios.splice(x, 1);
        return;
      }
  }

  modificarRegistro() {
    for (let x = 0; x < this.usuarios.length; x++)
      if (this.usuarios[x].usuario == this.user.usuario) {
        this.usuarios[x].correo = this.user.correo;
        this.usuarios[x].password = this.user.password;
        this.user.usuario = '';
        this.user.correo = '';
        this.user.password = 0;
        return;
      }
    alert("No existe")
  }

  seleccionarUsuario(usuario:string, password:number, correo:string) {
    this.user.usuario = usuario;
    this.user.correo = correo;
    this.user.password = password;
  }

}
