import { Component } from "@angular/core";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"]
})
export class SkillsComponent {
  skillsDesktop = [
    ["html", "css", "javascript", "typescript"],
    ["angular", "firebase", "api"],
    ["git", "automation"],
    ["scrum"]
  ];
  skillsMobile = [
    "html",
    "css",
    "javascript",
    "typescript",
    "angular",
    "firebase",
    "api",
    "git",
    "automation",
    "scrum"
  ];

  gotoBottom() {
    window.scroll({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth"
    });
  }

  // ["html", "css", "javascript", "typescript"],
  // ["angular", "firebase", "api"],
  // ["git", "automation"],
  // ["scrum"]
  //]; //, "wordpress"]
}
