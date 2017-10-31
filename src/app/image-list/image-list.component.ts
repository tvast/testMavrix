import { Component, OnInit } from '@angular/core';

import { Router }            from '@angular/router';

import { ImageService } from './../image.service';
import { Image} from './../image';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

	image: Image[] = [];

  constructor(
		private router: Router,
		private imageService: ImageService) {
	}

  ngOnInit() {
  	this.imageService.getAllImages().subscribe(image => this.image = image);
  }

}



// @Component({
// 	selector: 'app-wolfsound-list',
// 	templateUrl: './wolfsound-list.component.html',
// 	styleUrls: ['./wolfsound-list.component.css']
// })
// export class WolfsoundListComponent implements OnInit {

// 	wolf: Wolf[] = [];

// 	constructor(
// 		private router: Router,
// 		private wolfService: WolfsoundService) {
// 	}

// 	ngOnInit(): void {
// 		this.wolfService.getAllBears().subscribe(wolf => this.wolf = wolf);
// 	}

// 	gotoDetail(wolf: Wolf): void {
// 		let link = ['/beardetail', wolf.id];
// 		this.router.navigate(link);
// 	}

// }
