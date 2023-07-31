import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent {
  element!: HTMLElement;
  @ViewChild("aboutme") aboutme!: ElementRef;
  @ViewChild("skills") skills!: ElementRef;
  @ViewChild("portfolio") portfolio!: ElementRef;

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

  setActive(name: string) {
    alert(name);
    //class="aktive"
  }
}
