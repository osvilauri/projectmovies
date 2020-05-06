import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface OptionsParam {
    headers?:
        | HttpHeaders
        | {
        [header: string]: string | string[];
    };
    observe?: 'body';
    params?:
        | HttpParams
        | {
        [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType: 'arraybuffer';
    withCredentials?: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class BaseModel {
    baseUrl='https://api.themoviedb.org/3/';
    resourceUrl = '';

    constructor(protected http?: HttpClient) {}

    get(url: string, options?: OptionsParam): Observable<any> {
        return this.http.get(url, options);
    }

    post(url: string, body: any, options?: OptionsParam): Observable<any> {
        return this.http.post(url, body, options);
    }

    put(url: string, body: any, options?: OptionsParam): Observable<any> {
        return this.http.put(url, body, options);
    }
    patch(url: string, body: any, options?: OptionsParam): Observable<any> {
        return this.http.patch(url, body, options);
    }

    delete(url: string, options?: OptionsParam): Observable<any> {
        return this.http.delete(url, options);
    }

    list(options) {
        return this.get(this.baseUrl+this.resourceUrl, options || {});
    }

    getById(id) {
        return this.get(`${this.resourceUrl}${id}/`);
    }

    save(item) {
        return this.post(this.resourceUrl, item);
    }

    update(id, item) {
        return this.patch(`${this.resourceUrl}${id}/`, item);
    }

    destroy(id) {
        return this.delete(`${this.resourceUrl}${id}/`);
    }
}
