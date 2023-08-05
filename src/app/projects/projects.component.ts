import { Component } from "@angular/core";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"]
})
export class ProjectsComponent {
  list = [
    {
      title: "El Pollo Loco",
      description: "Jump and run game.",
      img: "",
      github: "https://github.com/KayBeckmann/el_pollo_loco",
      live: "https://#"
    },
    {
      title: "Join",
      description: "Canban Board for your projects.",
      img: "",
      github: "https://github.com/KayBeckmann/join",
      live: "https://#"
    },
    /*{
      title: "CRM",
      description: "Project don't finished jet",
      img:"",
      github: "https://#",
      live: "https://#"
    },*/
    {
      title: "Ring of fire",
      description: "Online drinking game with your friends.",
      img: "",
      github: "https://github.com/KayBeckmann/ringoffire",
      live: "https://#"
    },
    {
      title: "Portfolio",
      description: "This page.",
      img: "",
      github: "https://github.com/KayBeckmann/portfolio",
      live: "https://#"
    }
  ];
}
