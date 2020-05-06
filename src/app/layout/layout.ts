import {Component, HostListener, OnInit} from '@angular/core';
import {MovieModel} from "../../models/movie.model";

@Component({
    selector: 'layout',
    templateUrl: './layout.html',
    styleUrls: ['./layout.less']
})
export class LayoutComponent {
    title = 'projectmovies';
    visible = false;
    size = null;
    menuTag = 'menu-fold';

    get isMobile() {
        return this.size && this.size < 768;
    }

    @HostListener('window:resize')

    onWindowResize() {
        this.size = document.querySelector('body').offsetWidth;
    }
    constructor(){}

    open(): void {
        this.visible = true;
        this.menuTag = 'menu-unfold'
    }

    close(): void {
        this.visible = false;
        this.menuTag = 'menu-fold'
    }

}
