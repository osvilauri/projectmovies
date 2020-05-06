import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Menu } from '../../models/movie.model';

export const ADD_MENU    = 'Add';
export const UPDATE_MENU    = 'Update';
export const RESET_MENU    = 'Update';


export class AddMenu implements Action {
    readonly type = ADD_MENU;

    constructor(public payload: Menu) {}
}

export class UpdateMenu implements Action {
    readonly type = UPDATE_MENU;

    constructor(public payload: number) {}
}

export class ResetMenu implements Action {
    readonly type = RESET_MENU;

    constructor(public payload: []) {}
}

export type Actions = AddMenu | UpdateMenu | ResetMenu
