import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'like-app';
	tweet = {
		body: "Tweet's body..",
		isLike: false,
		likesCount: 0
	};
}
