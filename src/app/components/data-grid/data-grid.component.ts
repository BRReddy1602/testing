import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MatSort, MatSortable, MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { DataService } from './../../services/data.service';
import { PopupComponent } from './../popup/popup.component';
import { runInThisContext } from 'vm';
declare var jquery: any;
declare var $: any;

@Component({
	selector: 'data-grid',
	templateUrl: './data-grid.component.html',
	styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {
	@ViewChild(MatSort) sort: MatSort;
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@Input() height: any;
	displayedColumns = [];
	dataSource: MatTableDataSource<any>;
	selectedData: any;
	frontVisible: boolean = true;
	data: any;
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
		this.dataService.getUser('').subscribe(results => {
			let columns: string[];
			if (!results) {
				return;
			}
			this.data = results;
			this.dataSource = new MatTableDataSource(results);
			this.dataSource.sort = this.sort;
			this.dataSource.paginator = this.paginator;
			if (results && results.length) {
				this.displayedColumns = [];
				for (let key in results[0]) {
					this.displayedColumns.push(key)
				}
				this.displayedColumns.push('actions');
				//this.height = $('.grid-body').height() - 47;
			}
		});
	}

	flip() {
		$('.card').toggleClass('flipped');
		this.frontVisible = !this.frontVisible;
		setTimeout(() => this.dataSource.paginator = this.paginator);
	}

	getDetails(user) {
		this.selectedData = user;
		this.flip();
	}
}