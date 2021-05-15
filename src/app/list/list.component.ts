import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { WebService } from '../web.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listProducts: Product[];
  selectedProduct: Product;

  constructor(private web: WebService) { }

  loadAllProducts(): void {
    this.web.getAllProducts().subscribe(res => {
      this.listProducts = res;
    });
  }

  selectProduct(product: Product): void {
    this.selectedProduct = product;
  }

  delete(productId: string, productTitle: string) {
    if (confirm("Remover "+ productTitle +"?")) {
      this.web.deleteProduct(productId).subscribe(res => {
        if (res.ok == true) {
          alert("O produto foi deletado com sucesso");
          this.loadAllProducts();
        }
        else {
          alert("O produto não foi deletado");
        }
      });
    }
  }

  ngOnInit(): void {
    this.loadAllProducts();
  }

}
