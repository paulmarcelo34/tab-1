import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
  ,styleUrls: ['about.css'],
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
compute(){
  this.downV=(this.Ap* .40);
  this.LoanA=this.Ap-this.downV; 
  
  this.IntR=0.039;
  this.TIP= (this.LoanA*this.IntR)*this.repay;
  this.MonthPay=(this.LoanA+this.TIP)/this.repay;
  }

}
