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
      img: "./assets/project-img/epl.png",
      technic: ["HTML", "CSS", "JavaScript", "OOP"],
      github: "https://github.com/KayBeckmann/el_pollo_loco",
      live: "https://kay-beckmann.developerakademie.net/el_pollo_loco/index.html"
    },
    {
      title: "Join",
      description: "Canban Board for your projects.",
      img: "./assets/project-img/join.png",
      technic: ["HTML", "CSS", "JavaScript", "Group project"],
      github: "https://github.com/KayBeckmann/join",
      live: "https://kay-beckmann.developerakademie.net/join/index.html"
    },
    /*{
      title: "CRM",
      description: "Project don't finished jet",
      img:"./assets/project-img/crm.png",
      technic:[],
      github: "https://#",
      live: "https://#"
    },*/
    {
      title: "Ring of fire",
      description: "Online drinking game with your friends.",
      img: "./assets/project-img/rof.jpg",
      technic: ["Angular", "TypeScript", "Firebase"],
      github: "https://github.com/KayBeckmann/ringoffire",
      live: "https://kay-beckmann.developerakademie.net/ringoffire/"
    },
    {
      title: "Portfolio",
      description: "This page. No project for final portfolio.",
      img: "./assets/project-img/pf.png",
      technic: ["Angular", "TypeScript"],
      github: "https://github.com/KayBeckmann/portfolio",
      live: "https://kay-beckmann.developerakademie.net/portfolio/"
    }
  ];
}
