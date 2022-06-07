import { DocumentsService } from './../services/documents.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-document-form',
  templateUrl: './document-form.component.html',
  styleUrls: ['./document-form.component.scss']
})
export class DocumentFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: DocumentsService,
    private _snackBar: MatSnackBar,
    private location: Location
  ) { 
    this.form = this.formBuilder.group({
      numberDocument: [null],
      situation: [null]
    });
  }

  ngOnInit(): void {
  }
  onSubmit(){
    this.service.save(this.form.value).subscribe( 
      res => {
        this.onMessage("Cadastrado com sucesso!!");
        this.onCancel();
      },     
      error => {
        this.onMessage("Não foi possível cadastrar");
      }      
      );
  }
  onCancel(){
    this.location.back();
  }
  onMessage(msg: string){
    this._snackBar.open(msg,'', {duration: 5000});
  }

}
