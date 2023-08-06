import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

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

  constructor(private router: Router) {}

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
  }

  /**
   * add class 'Active' to selected item
   * @param name Name of the active item
   */
  setActive(name: string) {
    let about = this.aboutme.nativeElement;
    let skill = this.skills.nativeElement;
    let pf = this.portfolio.nativeElement;

    this.deactivate();

    if (name == "aboutme") {
      about.classList.add("active");
    }
    if (name == "skills") {
      skill.classList.add("active");
    }
    if (name == "portfolio") {
      pf.classList.add("active");
    }
  }

  /**
   * remove class 'Active' from all items
   */
  deactivate() {
    let about = this.aboutme.nativeElement;
    let skill = this.skills.nativeElement;
    let pf = this.portfolio.nativeElement;

    about.classList.remove("active");
    skill.classList.remove("active");
    pf.classList.remove("active");
  }
}
