import { Injectable } from '@angular/core';
import { Sciadv } from './sciadv';

@Injectable({
  providedIn: 'root'
})
export class SciadvService {

  sciadvs: Sciadv[] = [];
  sciadvsFav: Sciadv[] = [];

  constructor() {}

  getSciadvs(): Sciadv[] {
    return this.sciadvs;
  }

  getSciadvsFav(): Sciadv[] {
    return this.sciadvsFav;
  }
}