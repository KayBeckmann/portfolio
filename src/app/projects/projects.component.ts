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
      description: "Some text to explain the project",
      github: "https://#",
      live: "https://#"
    },
    { title: "Join" },
    { title: "CRM" },
    { title: "Ring of fire" }
  ];
}
