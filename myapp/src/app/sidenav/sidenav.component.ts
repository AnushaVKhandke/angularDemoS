import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';


interface sideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent implements OnInit {
   ngOnInit(): void {
    this.screenWidth=window.innerWidth;
   }
   @Output() onToggleSidenav:EventEmitter<sideNavToggle>=new EventEmitter();
   collapsed = true;
   screenWidth=0;
   navData=navbarData;

   toggleCollapse():void{
     this.collapsed=!this.collapsed;
     this.onToggleSidenav.emit({collapsed: this.collapsed,screenWidth:this.screenWidth})
   }

   closesidenav():void{
       this.collapsed=false;
       this.onToggleSidenav.emit({collapsed: this.collapsed,screenWidth:this.screenWidth})
   }
}
