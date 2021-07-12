import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  showParagraph: boolean = false;
  arrayOflogs: string[] = [];
  toogleParagraph() {
    this.showParagraph = !this.showParagraph;
    this.arrayOflogs.push(String(new Date()));
  }
  getColor(i: number): string {
    return i >= 5 ? "blue" : "white";
  }
}
