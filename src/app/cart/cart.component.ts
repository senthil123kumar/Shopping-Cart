import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CartService} from '../cart.service'
import { CartdialogComponent } from './cartdialog/cartdialog.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @Input() title: string;
  products: any = [];
  searchText;
  badgeCount: number = 0;
  constructor(private http: HttpClient,
              public dialog: MatDialog, 
              private cartService:CartService) { }


  ngOnInit() {
    this.http.get("assets/data.json").subscribe(data => {
      this.products = data;
    })
  }

  AddtoCart(product: any) {
    this.cartService.addCartItem(product);
    this.badgeCount++;
  }
  clearCount() {
    this.badgeCount = 0;
  }

  key = 'name';
  reverse = false;
  sortList(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  AddtoCartComponent() {
    const dialogConfig = new MatDialogConfig();

     dialogConfig.data=this.cartService.cartItem;
     dialogConfig.disableClose=true;
     dialogConfig.width= '450px';
     dialogConfig.position={
     	top:"20px"
     }
     const dialogRef = this.dialog.open(CartdialogComponent, dialogConfig);
     dialogRef.afterClosed().subscribe(result => {
     	dialogRef.close();
     });
  }

}