import { Injectable } from '@angular/core';

@Injectable()
export class Sciadv {
    name: string ="";
    year: string = "";
    type: string = "";
    casting: string = "";
    length: string = "";
    releaseDate: string = "";
    image: string = "";
    short: string = "";

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}