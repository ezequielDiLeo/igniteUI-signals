import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { ProductList, productsList } from '../mock/products.mock';


@Component({
  selector: 'app-tabla-tipo-excel',
  templateUrl: './tabla-tipo-excel.component.html',
  styleUrls: ['./tabla-tipo-excel.component.css']
})


export class TablaTipoExcelComponent implements OnInit {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    
    public grid1!: IgxGridComponent;

    public data = productsList();

    public size = 'large';
    public sizes! : any[];

    constructor() {
    }
    public ngOnInit(): void {
        this.sizes = [
            {
                label: 'small',
                selected: this.size === 'small',
                togglable: true
            },
            {
                label: 'medium',
                selected: this.size === 'medium',
                togglable: true
            },
            {
                label: 'large',
                selected: this.size === 'large',
                togglable: true
            }
        ];
    }

    @HostBinding('style.--ig-size')
    protected get sizeStyle() {
        return `var(--ig-size-${this.size})`;
    }

    public selectSize(event:any) {
      
        this.size = this.sizes[event.index].label;
        this.grid1.reflow();
    }

    public formatDate(val:any) {
      
        if (val !== 'Select All') {
            return new Intl.DateTimeFormat('en-US').format(val);
        } else {
            return val;
        }
    }

    public formatCurrency(val: number): string {
      return val.toFixed(2);
  }
}
