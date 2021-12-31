import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {


@Input() item! :any ;
readMore! : boolean;
readLess! : boolean;
  constructor() { }


  ngOnInit(): void {

    this.readMore = true;
    this.readLess = false;
  }

  clickMoreLess(){
    if(this.readMore){
      this.readMore = false;
      this.readLess = true ;
    }else{
      this.readMore = true;
    this.readLess = false;
    }
  }
}
