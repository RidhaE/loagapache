import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hits } from '../../models/hits.model';
@Component({
  selector: 'app-hits',
  templateUrl: './hits.component.html',
  styleUrls: ['./hits.component.css']
})
export class HitsComponent implements OnInit {
  public config;
  public hits: Hits = new Hits();
  constructor(private route: ActivatedRoute) { }
  public ip;
  ngOnInit() {
	   const ip = +this.route.snapshot.paramMap.get('ip');
	   this.logs.gethitsIp($ip).subscribe(
      res => {
        this.hits = res;
		this.config = {
			  itemsPerPage: 5,
			  currentPage: 1,
			  totalItems: this.hits.length
		};	
      },
      _ => {
    
      }
    );
    }); 
  }

}
