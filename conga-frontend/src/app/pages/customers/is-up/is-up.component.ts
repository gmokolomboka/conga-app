import { Component, OnInit } from '@angular/core';
import { IsUpService } from './is-up.service';

@Component({
  selector: 'is-up',
  templateUrl: './is-up.component.html',
  styleUrls: ['./is-up.component.scss']
})
export class IsUpComponent implements OnInit {

  fromServerNumber: boolean; 
  
  constructor(private isupService: IsUpService) { }

  ngOnInit() {
    this.isupService.isUp()
      .subscribe( data => {
        this.fromServerNumber = data;
      });
  };


  



}
