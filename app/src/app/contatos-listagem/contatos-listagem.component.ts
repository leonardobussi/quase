import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})
export class ContatosListagemComponent implements OnInit {

  contatos: Array<any>;

  constructor(private contatoService: ContatoService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.listar()
  }
  listar(){
    return this.contatoService.listar().subscribe(dados => this.contatos = dados)
  }
  getEmbedUrl(dados){
    const {videoID} = dados
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+videoID)
  }

}
