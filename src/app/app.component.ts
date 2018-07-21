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
	height:any;

	@HostListener('window:resize', ['$event'])
	onResize(event) {
		this.configureSideNav()
	}

	constructor(public overlayContainer: OverlayContainer) {
		this.configureSideNav();
		this.appList = [
			{ id: 1, name: 'App Name 1', icon: 'trending_up' },
			{ id: 2, name: 'App Name 2', icon: 'code' },
			{ id: 3, name: 'App Name 3', icon: 'account_balance' },
			{ id: 4, name: 'App Name 4', icon: 'card_membership' },
			{ id: 5, name: 'App Name 5', icon: 'library_books' }
		];
	}

	changeTheme() {
		document.body.classList.toggle('light-theme');
		// this.overlayContainer.getContainerElement().classList.toggle('light-theme');
	}

	ngAfterContentChecked() {
		this.height = ($('body').height() - 239);
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
