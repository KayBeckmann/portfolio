import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ImpressumComponent } from "./impressum/impressum.component";

const routes: Routes = [
  { path: ``, component: PortfolioComponent },
  { path: `impressum`, component: ImpressumComponent }
  //{ path: `game/:id`, component: GameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
