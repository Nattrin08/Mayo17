import { Component, Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
    //creacion de un parametro privado
    constructor(private router: Router) {}
        //es cada boton
        redireccionHome(){
            this.router.navigate(['/']);
        }
        redireccionCrud(){
            this.router.navigate(['/crud']);

        }
}