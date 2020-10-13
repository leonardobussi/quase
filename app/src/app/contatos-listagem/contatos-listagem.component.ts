import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})
export class ContatosListagemComponent implements OnInit {

  contatos: Array<any[]>;
  name = 'Angular 6';
  safeSrc: SafeResourceUrl;


  constructor(private contatoService: ContatoService, private sanitizer: DomSanitizer) {
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/ZNSWsDJ-Su0");
   }

  ngOnInit(): void {
    this.listar()
  }
  listar(){
    return this.contatoService.listar().subscribe(dados => this.contatos = dados)
  }
 

}
