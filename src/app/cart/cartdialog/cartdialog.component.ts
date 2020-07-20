import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cartdialog',
  templateUrl: './cartdialog.component.html',
  styleUrls: ['./cartdialog.component.scss']
})
export class CartdialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public CartItem: any,
  public dialogRef: MatDialogRef<CartdialogComponent>,) { }

  ngOnInit(): void {
  }

}
