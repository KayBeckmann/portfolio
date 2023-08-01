import { Component } from "@angular/core";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"]
})
export class ProjectsComponent {
  list = [
    { title: "EPL" },
    { title: "Join" },
    { title: "CRM" },
    { title: "Ring of fire" }
  ];
}
