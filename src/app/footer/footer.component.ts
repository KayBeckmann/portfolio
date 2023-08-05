import { Component } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent {
  constructor(private router: Router) {}

  impressum() {
    this.router.navigateByUrl("/impressum");
  }
}

/*
async newGame() {
    const docRef: any = await addDoc(
      this.gameCollection,
      this.game.toJson()
    ).then((gameInfo: any) => {
      let URL = "/game/" + gameInfo.id;
      this.router.navigateByUrl(URL);
    });
  }
*/
