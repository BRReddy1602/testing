import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MatSort, MatSortable, MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { DataService } from './../../services/data.service';
import { PopupComponent } from './../popup/popup.component';

@Component({
	selector: 'data-grid',
	templateUrl: './data-grid.component.html',
	styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {
	@ViewChild(MatSort) sort: MatSort;
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@Input() selectedApp: Object;
	displayedColumns = [];
	dataSource: MatTableDataSource<any>;
	constructor(private dataService: DataService, public dialog: MatDialog) {

	}

	ngOnInit() {
		this.getServerData();
	}

	ngOnChanges(changes) {
		this.getServerData();
	}

	applyFilter(filterValue: string) {
		filterValue = filterValue.trim(); // Remove whitespace
		filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
		this.dataSource.filter = filterValue;
	}

	getServerData() {
		this.dataService.getUser(this.selectedApp).subscribe(results => {
			let columns: string[];
			if (!results) {
				return;
			}
			this.dataSource = new MatTableDataSource(results);
			this.dataSource.sort = this.sort;
			this.dataSource.paginator = this.paginator;
			if (results && results.length) {
				this.displayedColumns = [];
				for (let key in results[0]) {
					this.displayedColumns.push(key)
				}

			}
		});
	}

	private openAddPopup() {
		console.log('open popup');
		this.dialog.open(PopupComponent, {
			data: {
				selectedApp: this.selectedApp
			}
		});
	}


}