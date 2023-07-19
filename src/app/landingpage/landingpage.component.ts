import { Component } from "@angular/core";

@Component({
  selector: "app-landingpage",
  templateUrl: "./landingpage.component.html",
  styleUrls: ["./landingpage.component.scss"]
})
export class LandingpageComponent {
  gotoBottom() {
    window.scroll({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth"
    });
  }
}
