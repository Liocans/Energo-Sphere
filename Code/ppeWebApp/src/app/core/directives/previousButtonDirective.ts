import { Directive, HostListener } from "@angular/core";
import { RouteHistoryService } from "./route-history.service";

@Directive({
    selector: "[previousButton]", //don't work currently
  })
export class PreviousButtonDirective{

    constructor(private routeHistory: RouteHistoryService){}

    @HostListener("click")
    onClick(): void {
        this.routeHistory.back();
    }
}