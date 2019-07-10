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
    this.query = 'SELECT c.state,\n' +
        '  cat.categoryname,\n' +
        '  sum(o.netamount),\n' +
        '  sum(o.totalamount)\n' +
        'FROM customers c\n' +
        '  INNER JOIN cust_hist ch ON c.customerid = ch.customerid\n' +
        '  INNER JOIN orders o ON ch.orderid = o.orderid\n' +
        '  INNER JOIN orderlines ol ON ol.orderid = o.orderid\n' +
        '  INNER JOIN products p ON ol.prod_id = p.prod_id\n' +
        '  INNER JOIN categories cat ON p.category = cat.category\n' +
        'GROUP BY c.state, cat.categoryname\n' +
        'ORDER BY c.state, sum(o.totalamount) DESC\n' +
        'LIMIT 10 OFFSET 1';
    this.plan = plan.default[0];
  }
}
