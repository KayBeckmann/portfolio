import { Component } from "@angular/core";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"]
})
export class SkillsComponent {
  skills = [
    ["html", "css", "javascript", "typescript"],
    ["angular", "firebase", "api"],
    ["git", "automation"],
    ["scrum"]
  ]; //, "wordpress"]
}
