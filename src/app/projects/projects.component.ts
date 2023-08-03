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
      github: "https://#",
      live: "https://#"
    },
    {
      title: "Join",
      description: "Canban Board for your projects.",
      github: "https://#",
      live: "https://#"
    },
    {
      title: "CRM",
      description: "Project don't finished jet",
      github: "https://#",
      live: "https://#"
    },
    {
      title: "Ring of fire",
      description: "Online drinking game with your friends.",
      github: "https://#",
      live: "https://#"
    }
  ];
}
