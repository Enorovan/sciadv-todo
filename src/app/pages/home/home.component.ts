import { Component, OnInit } from '@angular/core';
import { SciadvService } from 'src/app/sciadv/sciadv.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SCIADVS } from '../../mock-sciadvs'
import { Sciadv } from 'src/app/sciadv/sciadv';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  sciadvForm: FormGroup;
  submitted: boolean = false;
  success: boolean = false;
  sciadvs: Sciadv[]  = this.sciadvService.getSciadvs();
  alreadyFav: Sciadv[] = this.sciadvService.getSciadvsFav();

  constructor(private formBuilder: FormBuilder, private sciadvService: SciadvService) {
    this.sciadvForm = this.formBuilder.group({
      name: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.getSciadvs();
    this.getSciadvsFav();
  }

  selectedSciadv: Sciadv;
  onSelect(sciadv: Sciadv): void {
    this.selectedSciadv = sciadv;
  }

  onSubmit(sciadvShort) {
    SCIADVS.forEach(sciadv => {
      if (sciadvShort == sciadv.name || sciadvShort == sciadv.short) {
        this.sciadvs.push(sciadv);
        this.setSciadvs();
      }
    });
  }

  deleteInfo(): void {
    this.selectedSciadv = null;
  }

  addFav(sciadv: Sciadv): void {
    if (this.alreadyFav.indexOf(sciadv) !== -1){
      return;
    }
    else {
      this.sciadvService.sciadvsFav.push(sciadv);
    }
  }

  remFav(sciadv: Sciadv): void {
    const index: number = this.sciadvService.sciadvsFav.indexOf(sciadv);
    if (index !== -1) {
      this.sciadvService.sciadvsFav.splice(index,1);
    }
  }

  delete(sciadv: Sciadv): void {
    const index: number = this.sciadvService.sciadvs.indexOf(sciadv);
    if (index !== -1) {
      this.sciadvService.sciadvs.splice(index,1);
      this.sciadvService.sciadvsFav.splice(index,1);
      this.deleteInfo();
    }
  }

  getSciadvs(): void {
    this.sciadvs = this.sciadvService.getSciadvs();
  }

  getSciadvsFav(): void {
    this.alreadyFav = this.sciadvService.getSciadvsFav();
  }

  setSciadvs(): void {
    this.sciadvService.sciadvs = this.sciadvs;
  }
}