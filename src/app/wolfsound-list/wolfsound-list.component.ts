import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { WolfsoundService } from './../contact.service';
import { Contact} from './../contact';

@Component({
	selector: 'app-wolfsound-list',
	templateUrl: './wolfsound-list.component.html',
	styleUrls: ['./wolfsound-list.component.css']
})
export class WolfsoundListComponent implements OnInit {

	contact: Contact[] = [];

	constructor(
		private router: Router,
		private wolfService: WolfsoundService) {
	}

	ngOnInit(): void {
		this.wolfService.getAllBears().subscribe(contact => this.contact = contact);
		
	}

	gotoDetail(wolf: Contact): void {
		let link = ['/beardetail', wolf.id];
		this.router.navigate(link);
	}

}
