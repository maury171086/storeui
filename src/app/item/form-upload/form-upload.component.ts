import {Component, Inject, OnInit} from '@angular/core';
import {HttpResponse, HttpEventType} from '@angular/common/http';
import {ItemService} from '@app/shared/service/item.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {Brand} from '@app/shared/model/brand';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.css']
})
export class FormUploadComponent implements OnInit {

  galleyForm = new FormGroup({});
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = {percentage: 0};
  private URL: string;

  constructor(public dialogRef: MatDialogRef<FormUploadComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Brand,
              private snackBar: MatSnackBar,
              private toastr: ToastrService,
              private itemService: ItemService, private fb: FormBuilder) {

    this.galleyForm = new FormGroup({
      url: new FormControl(this.URL, Validators.required),
      itemId: new FormControl(this.data.id)
    });
  }

  ngOnInit() {
  }

  selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
    this.itemService.pushFileToStorage(this.currentFileUpload).subscribe((event: any) => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
      if (event.partialText) {
        this.URL = event.partialText;
        this.galleyForm.patchValue({
          url: event.partialText,
          itemId: this.data.id
        });
      }
    });

    this.selectedFiles = undefined;
  }

  onClickSave() {
    this.itemService.createGallery(this.galleyForm.value).subscribe(value => {
      this.dialogRef.close();
      this.toastr.success('Image message', 'The image was uploaded!');
    });
  }
}
