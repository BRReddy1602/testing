import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
	selector: 'applications-list',
	templateUrl: './applications-list.component.html',
	styleUrls: ['./applications-list.component.scss']
})
export class ApplicationsListComponent implements OnInit {
	@Output() onselect = new EventEmitter();
	@Input() applications;


	constructor() {

	}

	itemSelected(item) {
		if (!item.active) {
			this.applications.forEach(function (listItem) {
				listItem.active = false;
			});
			item.active = true;
			this.onselect.emit(item);
		}
	}

	ngOnInit() {
		if (this.applications.length) {
			this.itemSelected(this.applications[0]);
		}

	}

}
