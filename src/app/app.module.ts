import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MenuComponent } from "./menu/menu.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { LandingpageComponent } from "./landingpage/landingpage.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillsComponent } from "./skills/skills.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./footer/footer.component";
import { IconsComponent } from "./icons/icons.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SozialmedialinksComponent } from './sozialmedialinks/sozialmedialinks.component';
import { ProjectcardComponent } from './projectcard/projectcard.component';
import { ImpressumComponent } from './impressum/impressum.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PortfolioComponent,
    LandingpageComponent,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    IconsComponent,
    SozialmedialinksComponent,
    ProjectcardComponent,
    ImpressumComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
