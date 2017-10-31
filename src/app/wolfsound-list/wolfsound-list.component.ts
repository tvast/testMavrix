import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { WolfsoundService } from './../wolfsound.service';
import { Wolf} from './../wolf';

@Component({
	selector: 'app-wolfsound-list',
	templateUrl: './wolfsound-list.component.html',
	styleUrls: ['./wolfsound-list.component.css']
})
export class WolfsoundListComponent implements OnInit {

	wolf: Wolf[] = [];

	constructor(
		private router: Router,
		private wolfService: WolfsoundService) {
	}

	ngOnInit(): void {
		this.wolfService.getAllBears().subscribe(wolf => this.wolf = wolf);
		
	}

	gotoDetail(wolf: Wolf): void {
		let link = ['/beardetail', wolf.id];
		this.router.navigate(link);
	}

}
