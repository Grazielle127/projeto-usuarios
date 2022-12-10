import { Component, OnInit } from '@angular/core';
import { UsuariosApiService } from '../../services/usuarios-api.service';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-usuarios-table',
  templateUrl: './usuarios-table.component.html',
  styleUrls: ['./usuarios-table.component.css']
})
export class UsuariosTableComponent implements OnInit {

  constructor(private usuariosService: UsuariosApiService) { }

  usuarios: Usuario[] = [];

  ngOnInit(): void {
    this.getUsuarios();
    console.log(this.usuarios);
  }

  getUsuarios() {
    this.usuariosService.getUsuario().subscribe((usuario) => {
      this.usuarios = usuario;
      console.log(this.usuarios);
    });
  }
}