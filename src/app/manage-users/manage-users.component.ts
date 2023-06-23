import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { UserformComponent } from '../shared/userform/userform.component';

export interface PeriodicElement {
  position: number;
  age: number;
  gender: string;
  email: string;
  name: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'sonia',
    age: 21,
    gender: 'f',
    email: 'sonia@gmail.com',
  },
  {
    position: 2,
    name: 'amita',
    age: 21,
    gender: 'f',
    email: 'abc@gmail.com',
  },
  {
    position: 3,
    name: 'sonia',
    age: 21,
    gender: 'f',
    email: 'sonia@gmail.com',
  },
  {
    position: 4,
    name: 'a',
    age: 21,
    gender: 'm',
    email: 'abc@gmail.com',
  },
  {
    position: 5,
    name: 's',
    age: 21,
    gender: 'm',
    email: 's@gmail.com',
  },
  {
    position: 6,
    name: 'abc',
    age: 21,
    gender: 'f',
    email: 'abc@gmail.com',
  },
  {
    position: 7,
    name: 'sonia',
    age: 21,
    gender: 'f',
    email: 'sonia@gmail.com',
  },
];

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss'],
})
export class ManageUsersComponent {
  displayedColumns: string[] = [
    'position',
    'name',
    'age',
    'gender',
    'email',
    'action',
  ];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
  }

  ///////////////dialog box//////////

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(UserformComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
