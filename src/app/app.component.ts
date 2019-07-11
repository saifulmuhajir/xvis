import {Component, OnInit} from '@angular/core';
import * as plan from 'src/app/models/plan.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'explain-visualizer';
  query;
  plan;

  ngOnInit() {
    this.query = 'SELECT d.deptno, d.name, sum(e.salary), sum(e.commission), count(e.empid)\n' +
        'FROM csv.depts d\n' +
        'INNER JOIN csv.emps e ON e.deptno = d.deptno\n' +
        'WHERE e.commission > 0 OR e.salary > 1000\n' +
        'GROUP BY d.deptno, d.name';
    this.plan = plan.default;
  }
}
