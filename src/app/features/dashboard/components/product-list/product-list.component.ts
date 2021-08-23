import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  title = 'LENDO';

  products: Array<Product> = [
    {
        id: 1,
        description: 'Livro - Harry Potter e a Câmara Secreta',
        img: 'https://images-americanas.b2w.io/produtos/imagens/181293/181294_1GG.jpg',
        
    },
    {
        id: 2,
        description: 'Livro – Harry Potter e a Ordem da Fênix',
        img: 'https://a-static.mlcdn.com.br/618x463/livro-harry-potter-e-a-ordem-da-fenix/magazineluiza/089061400/7a9aaf185dc32a81a6b708e68e429177.jpg',
        
    },
    {
        id: 3,
        description: 'Livro - Harry potter e o prisioneiro de Azkaban',
        img: 'https://images-americanas.b2w.io/produtos/imagens/198145/198146_1GG.jpg',
        
    },
    {
        id: 4,
        description: 'Livro - Harry potter e o cálice de fogo',
        img: 'https://i5.walmartimages.com/asr/810803e8-a900-48da-9f51-0163df609898_1.8b89af58642b89f54d225ef6ff2cb43a.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff',
        
    },
    {
        id: 5,
        description: 'Livro - Harry potter e o enigma do príncipe',
        img: 'https://lojasaraiva.vteximg.com.br/arquivos/ids/12100007/1008927231.jpg?v=637142215652570000',
        
    },
    {
        id: 6,
        description: 'Livro - Harry Potter e o enigma do príncipe',
        img: 'https://images-shoptime.b2w.io/produtos/01/00/item/123806/4/123806434_1GG.jpg',
        
    },
    {
        id: 7,
        description: 'Livro - Harry Potter e a Pedra Filosofal',
        img: 'https://a-static.mlcdn.com.br/618x463/livro-harry-potter-e-a-pedra-filosofal-volume-1-j-k-rowling-rocco/garshoplivrosecia/5893897467/8ee8a0fd7788b33a9e67413ade2d3844.jpg',
        
    },
    {
        id: 8,
        description: 'Livro – Harry Potter e a Ordem da Fênix',
        img: 'https://a-static.mlcdn.com.br/618x463/livro-harry-potter-e-a-ordem-da-fenix/magazineluiza/223247300/750a947a0192177937281172d5f048c7.jpg',
        
    },
    {
        id: 9,
        description: 'Livro - Harry Potter e a Pedra Filosofal',
        img: 'https://images-americanas.b2w.io/produtos/imagens/132451428/132451436_1GG.jpg',
        
    },
    {
        id: 10,
        description: 'Livro - Harry Potter e a Câmara Secreta',
        img: 'https://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1833742576',
        
    }
  ];

  filteredProducts: Array<Product> = this.products;

  constructor() { }

  ngOnInit(): void {

  }

  getProductsByDescription(event: any) {
      const value = event.target.value;

      this.filteredProducts = this.products.filter(
          (product) => product.description.toUpperCase().search(value.toUpperCase()) > -1);
      if(this.filteredProducts.length === 0) {
          this.filteredProducts = this.products;
      }
  }


}
