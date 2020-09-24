import { Component, OnInit } from '@angular/core';
import { Sciadv } from 'src/app/sciadv/sciadv';
import { SciadvService } from 'src/app/sciadv/sciadv.service'

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  
  sciadvsFav: Sciadv[] = [];
  
  constructor(private sciadvService: SciadvService) {}

  ngOnInit() {
    this.getSciadvsFav();
  }

  selectedSciadv: Sciadv;
  onSelect(movie: Sciadv): void {
    this.selectedSciadv = movie;
  }

  remFav(movie: Sciadv): void {
    const index: number = this.sciadvService.sciadvsFav.indexOf(movie);
    if (index !== -1) {
      this.sciadvService.sciadvsFav.splice(index,1);
    }
  }

  deleteInfo(): void {
    this.selectedSciadv = null;
  }

  delete(sciadv: Sciadv): void {
    const index: number = this.sciadvService.sciadvs.indexOf(sciadv);
    const indexFav: number = this.sciadvService.sciadvsFav.indexOf(sciadv);
    if (index !== -1) {
      this.sciadvService.sciadvsFav.splice(indexFav,1);
      this.sciadvService.sciadvs.splice(index,1);
      this.deleteInfo();
    }
  }
  
  getSciadvsFav(): void {
    this.sciadvsFav = this.sciadvService.getSciadvsFav();
  }
}