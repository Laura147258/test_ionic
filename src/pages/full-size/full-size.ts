import { Component } from '@angular/core';
import { SharedService } from "../../providers/shared-service";


/**
 * Generated class for the FullSize page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-full-size',
  templateUrl: 'full-size.html',
})
export class FullSize {

  data: any;
  id: number;

  constructor(public sharedService: SharedService) {

  }

  ionViewDidLoad() {
  }

    ngOnInit(){
        this.id = this.sharedService.id;
        this.data = this.sharedService.data;

    }

}
