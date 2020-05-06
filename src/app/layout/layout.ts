import {Component, HostListener, OnInit} from '@angular/core';
import { Menu } from "../../models/movie.model";


@Component({
    selector: 'layout',
    templateUrl: './layout.html',
    styleUrls: ['./layout.less']
})
export class LayoutComponent implements OnInit {
    title = 'projectmovies';
    visible = false;
    size = null;
    menuTag = 'menu-fold';
    isVisible = false;
    emptyStore = true;
    menuLayout: Menu[] = [
        {name: 'In Theaters', url:'/', visible:true},
        {name: 'Movies', url:'/movies', visible:true},
        {name: 'Kids', url:'/kids', visible:true},
        {name: 'Favourites', url:'/favourites', visible:true},
    ];
    nameMenu = '';
    indexMenu: number;

    get isMobile() {
        return this.size && this.size < 768;
    }

    @HostListener('window:resize')

    onWindowResize() {
        this.size = document.querySelector('body').offsetWidth;
    }
    constructor(){
    }

    ngOnInit(): void {
        const storage = JSON.parse(localStorage.getItem('menus'));

        if(localStorage && storage === null ){
            localStorage.setItem('menus',JSON.stringify(this.menuLayout));
        }

        this.menuLayout = JSON.parse(localStorage.getItem(('menus')));
        console.log(this.menuLayout);

    }

    open(): void {
        this.visible = true;
        this.menuTag = 'menu-unfold'
    }

    close(): void {
        this.visible = false;
        this.menuTag = 'menu-fold'
    }

    showOptions() {
        this.isVisible = !this.isVisible
    }

    checkChange($event: boolean, i: number) {
        this.menuLayout[i].visible = $event;
        localStorage.setItem('menus',JSON.stringify(this.menuLayout));
    }

    selectedIndex(event) {
        this.indexMenu = event;
    }

    saveMenu(indexMenu: number, nameMenu: string) {
        this.menuLayout[indexMenu].name = nameMenu;
        localStorage.setItem('menus',JSON.stringify(this.menuLayout));
    }
}
