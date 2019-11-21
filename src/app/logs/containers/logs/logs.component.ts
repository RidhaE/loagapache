import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LogsService } from '../../services/logs.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
import { IpList } from '../../models/logs.model';
@Component({
  selector: 'app-random-number',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {


  public config;
  public ipList: IpList = new IpList();
  constructor(private logs: LogsService, private authService: AuthService, private router: Router) {}

 ngOnInit(): void {
 
    this.logs.getIp().subscribe(
      res => {
        this.ipList = res;
		this.config = {
			  itemsPerPage: 5,
			  currentPage: 1,
			  totalItems: this.ipList.length
		};	
      },
      _ => {
    
      }
    );
	
  }
  pageChanged(event){
    this.config.currentPage = event;
  }
  
 
   


  logout() {
    this.authService.logout()
      .subscribe(success => {
        if (success) {
          this.router.navigate(['/login']);
        }
      });
  }

}
