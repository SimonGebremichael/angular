import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute, ParamMap } from '@angular/router';
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./components/header/header.component";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {MaintainanceComponent} from "./components/maintainance/maintainance.component";
import {TransactionsComponent} from "./components/transactions/transactions.component";
import {PathComponent} from "./components/path/path.component";

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
  AppComponent,
  HeaderComponent,
  NavigationComponent,
  TransactionsComponent,
  MaintainanceComponent,
  PathComponent
]

