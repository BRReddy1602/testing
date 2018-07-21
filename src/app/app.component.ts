import { Component, OnInit, HostListener } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'app';
	mode: string;
	open: boolean;
	selectedApp: Object;
	appList: any[];

	@HostListener('window:resize', ['$event'])
	onResize(event) {
		this.configureSideNav()
	}

	constructor(public overlayContainer: OverlayContainer) {
		this.configureSideNav();
		this.appList = [
			{ id: 1, name: 'Ambitions', icon: 'trending_up' },
			{ id: 2, name: 'Subjects', icon: 'code' },
			{ id: 3, name: 'Institutions', icon: 'account_balance' },
			{ id: 4, name: 'Colleges', icon: 'card_membership' },
			{ id: 5, name: 'Books', icon: 'library_books' },
			{ id: 6, name: 'Exams', icon: 'border_color' },
			{ id: 7, name: 'Users', icon: 'verified_user' },
			{ id: 8, name: 'Jobs', icon: 'build' },
			{ id: 9, name: 'Feedback', icon: 'feedback' },
		];
	}

	changeTheme() {
		document.body.classList.toggle('light-theme');
		// this.overlayContainer.getContainerElement().classList.toggle('light-theme');
	}


	onAppSelect(item) {
		this.selectedApp = item;
	}
	configureSideNav() {

		if (window.innerWidth < 950) {
			this.mode = "over"
			this.open = false
		} else {
			this.mode = 'side'
			this.open = true
		}
	}

}
