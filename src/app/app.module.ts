import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { FileUploadComponent } from './file-upload/file-upload.component';

@NgModule({
  imports: [
    BrowserModule,
    FileUploadComponent
  ]
})
export class AppModule { }