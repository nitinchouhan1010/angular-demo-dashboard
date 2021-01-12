import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HomeComponent } from "./home/home.component";

import { Routes, RouterModule } from "@angular/router";
import { SubscriptionComponent } from "./subscription/subscription.component";
import { CompanyProfileComponent } from "./company-profile/company-profile.component";
import { InventoryComponent } from "./inventory/inventory.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "Subscription", component: SubscriptionComponent },
  { path: "company-profile", component: CompanyProfileComponent },
  { path: "Inventory", component: InventoryComponent }
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    SubscriptionComponent,
    CompanyProfileComponent,
    InventoryComponent
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {}
