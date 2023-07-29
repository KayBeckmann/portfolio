import { Component } from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent {
  element!: HTMLElement;

  constructor() {}

  /**
   * Go to Section with HTML-ID
   * @param id (String)
   */
  goTo(id: string) {
    this.element = document.getElementById(id) as HTMLElement;
    this.element.scrollIntoView();

    this.toggleMenu();
  }

  /**
   * Toggle mobilemenu view
   */
  toggleMenu() {
    this.element = document.getElementById("mobilemenu") as HTMLElement;
    if (this.element.classList.contains("d-none")) {
      this.element.classList.remove("d-none");
    } else {
      this.element.classList.add("d-none");
    }
    console.log("TOGGLE");
  }
}
