import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { Document } from '../model/document';
import { DocumentsService } from '../services/documents.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  documents$: Observable<Document[]>;
  displayedColumns =  ['numberDocument','situation','actions'];

  constructor(
    private documentService: DocumentsService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.documents$ = this.documentService.list()
    .pipe(     
      catchError(error => {      
        this.ErrorDialog('Erro ao carregar documentos');
        return of([]);
      })
    );  
   }

  ErrorDialog(errorMessage: string) {   
      this.dialog.open(ErrorDialogComponent, {
        data: errorMessage
      });    
  }

  ngOnInit(): void {
    
  }
  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
