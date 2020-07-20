import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module'
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SortPipe } from './sort.pipe';
import { CartService} from './cart.service';
import { CartdialogComponent } from './cart/cartdialog/cartdialog.component'

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    SortPipe,
    CartdialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    Ng2SearchPipeModule,
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
