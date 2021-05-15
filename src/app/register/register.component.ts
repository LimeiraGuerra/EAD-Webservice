import { Component, OnInit } from '@angular/core';
import { WebService } from '../web.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  product = {
    title: "",
    price: 0.0,
    description: ""
  }

  constructor(private web: WebService) { }

  register() {
    this.web.registerProduct(this.product).subscribe(res => {
      if(res.ok == true) {
        alert("O cadastro foi realizado com sucesso");
      }
      else {
        alert("O cadastro não foi realizado");
      }
    });
  }

  ngOnInit(): void {
  }

}
