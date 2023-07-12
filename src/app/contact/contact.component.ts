import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent {
  @ViewChild("myForm") myForm!: ElementRef;
  @ViewChild("nameField") nameField!: ElementRef;
  @ViewChild("emailField") emailField!: ElementRef;
  @ViewChild("messageField") messageField!: ElementRef;
  @ViewChild("sendButton") sendButton!: ElementRef;
  @ViewChild("infobox") infobox!: ElementRef;
  isDisabled: boolean = false;

  constructor() {}

  /**
   * link the HTML-Elements and generate Formdata to transmitt
   */
  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let formdata = new FormData();
    formdata.append("name", nameField.value);
    formdata.append("message", emailField.value + " " + messageField.value);

    this.isDisabled = true;

    this.fetchData(formdata);
  }

  /**
   * Sending Formdata to server, for generating email.
   * @param formdata JSON
   */
  async fetchData(formdata: any) {
    await fetch(
      "https://kay-beckmann.developerakademie.net/send_mail/send_mail.php",
      {
        method: "POST",
        body: formdata
      }
    )
      .then((res) => {
        this.showInfobox(res.ok);
      })
      .catch((err) => {
        console.log("ERROR");

        this.showInfobox(false);
      });
  }

  /**
   * Generate Infobox, after getting respons of the Server
   * @param result BOOLEAN
   */
  showInfobox(result: Boolean) {
    // let infobox = this.infobox.nativeElement;
    let infobox: any = document.getElementById("infobox");
    let message: String;
    console.log(result);

    infobox.classList.remove("d-none");
    if (result) {
      message = "Your Mail was send.";
    } else {
      message = "There was an error, please try again.";
    }

    infobox.innerHTML = message;
    this.enableElements(result);
  }

  /**
   * Enables and clear the Input fields and hide the infobox
   * @param result BOOLEAN
   */
  enableElements(result: Boolean) {
    let nameField = this.nameField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let emailField = this.emailField.nativeElement;

    if (result) {
      nameField.value = "";
      messageField.value = "";
      emailField.value = "";
    }

    setTimeout(() => {
      let infobox: any = document.getElementById("infobox");
      infobox.classList.add("d-none");
      this.isDisabled = false;
    }, 3000);
  }
}
