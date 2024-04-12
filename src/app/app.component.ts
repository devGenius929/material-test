import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatFormField, MatLabel, MatPrefix, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatIconButton} from "@angular/material/button";
import {DecimalPipe} from "@angular/common";

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-root',
  styleUrl: 'app.component.scss',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatFormField, MatIcon, MatPrefix, MatInput, MatLabel, FormsModule, MatIconButton, MatSuffix, DecimalPipe],
})
export class AppComponent implements AfterViewInit {
  displayedColumns: string[] = ['league', 'player', 'paymentDate', 'paid', 'compensation'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  searchValue: string | undefined;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  protected readonly ELEMENT_DATA = ELEMENT_DATA;
}

export interface PeriodicElement {
  id: number;
  player: string;
  league: string;
  paymentDate: string;
  paid: number;
  compensation: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, league: 'Test League', player: 'Travis Kruze', paymentDate: '01/02/2024', paid: 1, compensation: 0.20},
  {id: 2, league: 'Test League', player: 'Travis Kruze', paymentDate: '01/02/2024', paid: 1, compensation: 0.20},
  {id: 3, league: 'Test League', player: 'Travis Kruze', paymentDate: '01/02/2024', paid: 1, compensation: 0.20},
  {id: 4, league: 'Test League', player: 'Robert Sudduth', paymentDate: '03/26/2024', paid: 0.50, compensation: 0.20},
  {id: 5, league: 'Test League', player: 'Travis Kruze', paymentDate: '01/02/2024', paid: 1, compensation: 0.20},
  {id: 6, league: 'Test League', player: 'Travis Kruze', paymentDate: '01/02/2024', paid: 1, compensation: 0.20},
  {id: 7, league: 'Test League', player: 'Travis Kruze', paymentDate: '01/02/2024', paid: 1, compensation: 0.20},
  {id: 8, league: 'Test League', player: 'Travis Kruze', paymentDate: '01/02/2024', paid: 1, compensation: 0.20},
  {id: 9, league: 'Test League', player: 'Travis Kruze', paymentDate: '01/02/2024', paid: 1, compensation: 0.20},
  {id: 10, league: 'Test League', player: 'Travis Kruze', paymentDate: '01/02/2024', paid: 1, compensation: 0.20},
  {id: 11, league: 'Test League', player: 'Travis Kruze', paymentDate: '01/02/2024', paid: 1, compensation: 0.20},
  {id: 12, league: 'Test League', player: 'Travis Kruze', paymentDate: '01/02/2024', paid: 1, compensation: 0.20},
  {id: 13, league: 'Test League', player: 'Travis Kruze', paymentDate: '01/02/2024', paid: 1, compensation: 0.20},
  {id: 14, league: 'Test League', player: 'Travis Kruze', paymentDate: '01/02/2024', paid: 1, compensation: 0.20},
  {id: 15, league: 'Test League', player: 'Travis Kruze', paymentDate: '01/02/2024', paid: 1, compensation: 0.20},
  {id: 16, league: 'Test League', player: 'Travis Kruze', paymentDate: '01/02/2024', paid: 1, compensation: 0.20},
  {id: 17, league: 'Test League', player: 'Travis Kruze', paymentDate: '01/02/2024', paid: 1, compensation: 0.20},
  {id: 18, league: 'Test League', player: 'Travis Kruze', paymentDate: '01/02/2024', paid: 1, compensation: 0.20},
  {id: 19, league: 'Test League', player: 'Travis Kruze', paymentDate: '01/02/2024', paid: 1, compensation: 0.20},
  {id: 20, league: 'Test League', player: 'Travis Kruze', paymentDate: '01/02/2024', paid: 1, compensation: 0.20},
];
