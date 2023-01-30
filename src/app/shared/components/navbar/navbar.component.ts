import { Component } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';

import { USER } from '../../utils/dummy';
import { UserModel } from '../../models/user/user.model';
import { CartComponent } from '../drawers/cart/cart.component';
import { ProductModel } from '../../models/product/product.model';
import { StateManagementService } from '../../state-management/state-management.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
})
export class NavbarComponent {
  public cart: Array<ProductModel> = [];
  public user: UserModel = USER;

  constructor(private readonly $drawer: NzDrawerService, private $state: StateManagementService) {
    this.getUser();
  }

  public getUser(): void {
    this.$state.users.subscribe((user) => {
      if (user) {
        this.user = user;
      }
    });
  }

  public showCartDrawer(): void {
    this.$drawer.create({
      nzTitle: 'Carrinho',
      nzWidth: '25%',
      nzContent: CartComponent,
    });
  }
}
