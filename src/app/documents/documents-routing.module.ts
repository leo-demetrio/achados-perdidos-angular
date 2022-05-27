import { DocumentFormComponent } from './document-form/document-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocumentsComponent } from './documents/documents.component';

const routes: Routes = [
  { path: '', component: DocumentsComponent },
  { path: 'new', component: DocumentFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsRoutingModule { }
