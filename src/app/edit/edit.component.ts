import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../Product';
import { WebService } from '../web.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input() product: Product;

  constructor(private web: WebService) { }

  edit() {
    this.web.updateProduct(this.product).subscribe(res => {
      if(res.ok == true) {
        alert("A edição foi realizado com sucesso");
      }
      else {
        alert("A edição não foi realizado");
      }
    });
  }

  ngOnInit(): void {
  }

}
