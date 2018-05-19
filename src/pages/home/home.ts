import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SharedService } from "../../providers/shared-service";
import { FullSize } from '../full-size/full-size';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    data: any;
    id: number;

  constructor(public navCtrl: NavController,
              public sharedService: SharedService) {

  }

    ngOnInit(){

        this.sharedService.getItems().subscribe(
            (response) => {
                this.data = response;
                this.sharedService.data = this.data;

            }
        );
    }

    goFull(id){
      this.sharedService.id = id;
        this.navCtrl.push(FullSize);
    }

}
