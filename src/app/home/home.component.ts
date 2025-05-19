import { Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-home',
  imports: [MatProgressSpinnerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private dataService: DataService) {}
  schoolcn = 0;
  hospitalcn = 0;
  bankcn = 0;
  isWidgetOneSpinner = false;
  isWidgetTwoSpinner = false;
  isWidgetThreeSpinner = false;

  ngOnInit(): void {
    this.isWidgetOneSpinner = true;
    this.isWidgetTwoSpinner = true;
    this.isWidgetThreeSpinner = true;
    this.getData();
  }

  getData() {
    // this.dataService.getwidgetOneData().subscribe(res => {
    //   this.schoolcn = res;
    //   this.isWidgetOneSpinner = false;
    // })

    // this.dataService.getwidgetTwoData().subscribe(res => {
    //   this.hospitalcn = res;
    //   this.isWidgetTwoSpinner = false;
    // })

    // this.dataService.getwidgetThreeData().subscribe(res => {
    //   this.bankcn = res;
    //   this.isWidgetThreeSpinner = false;
    // })

    this.dataService.getAllDatas().subscribe(res => {
      this.schoolcn = res[0];
      this.hospitalcn = res[1];
      this.bankcn = res[2];
      this.isWidgetOneSpinner = false;
      this.isWidgetTwoSpinner = false;
      this.isWidgetThreeSpinner = false;
    })

  }



}
