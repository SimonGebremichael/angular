import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute, ParamMap } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { MaintainanceComponent } from "./components/maintainance/maintainance.component";
import { TransactionsComponent } from "./components/pages/transactions/transactions.component";
import { PathComponent } from "./components/path/path.component";
import { AccountComponent } from './components/pages/account/account.component';
import { SettingsComponent } from './components/pages/settings/settings.component';
import { AtmComponent } from './components/pages/atm/atm.component';
import { UserComponent } from './components/pages/user/user.component';

const routes: Routes = [
  { path: 'transactions', component: PathComponent},
  { path: 'settings', component: PathComponent },
  { path: 'user', component: PathComponent },
  { path: 'atm', component: PathComponent },
  { path: 'account', component: PathComponent },
  { path: '**', component: PathComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}

export const RoutingComponents = [
  HeaderComponent,
  NavigationComponent,
  TransactionsComponent,
  MaintainanceComponent,
  PathComponent,
  AccountComponent,
  SettingsComponent,
  AtmComponent,
  UserComponent,
]

