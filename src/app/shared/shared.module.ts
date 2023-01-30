import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, ModuleWithProviders, NgModule } from '@angular/core';

import { AntDesignModule } from './ant-design/ant-design.module';
import { IconsProviderModule } from './ant-design/icons-provider.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartComponent } from './components/drawers/cart/cart.component';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map((key) => antDesignIcons[key]);

@NgModule({
  declarations: [
    NavbarComponent,
    CartComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    AntDesignModule,
    HttpClientModule,
    IconsProviderModule,
    ReactiveFormsModule,
  ],
  exports: [FormsModule, AntDesignModule, HttpClientModule, ReactiveFormsModule, IconsProviderModule, NavbarComponent],
  providers: [{ provide: NZ_ICONS, useValue: icons }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
    };
  }
}
