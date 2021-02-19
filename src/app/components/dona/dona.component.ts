import { Component, Input } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent{

  @Input() titulo = 'Sin Titulo';
  @Input() labels = ['Sin label1', 'Sin label2', 'Sin label3'];
  @Input() data: MultiDataSet = [[3, 2, 1]];
  @Input() colores = [
    {backgroundColor: ['#6857E6', '#009FEE', '#F02059']}
  ];

}
