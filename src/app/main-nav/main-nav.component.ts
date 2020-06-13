import { Component, OnInit } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { ActivatedRoute, Router } from "@angular/router";
import { LoginService } from "../login/login.service";

@Component({
  selector: "app-main-nav",
  templateUrl: "./main-nav.component.html",
  styleUrls: ["./main-nav.component.css"],
})
export class MainNavComponent implements OnInit {
  isSelected: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit() {}
  onSelected() {
    this.isSelected = true;
    this.router.navigate(["category"], { relativeTo: this.route });
  }
  onSelectProduct() {
    this.isSelected = true;
    this.router.navigate(["product"], { relativeTo: this.route });
  }
  onSelectBrand() {
    this.isSelected = true;
    this.router.navigate(["brand"], { relativeTo: this.route });
  }
  onLogout() {
    this.isSelected = true;
    this.loginService.logout();
  }
}
