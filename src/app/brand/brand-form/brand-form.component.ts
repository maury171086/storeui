import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {Brand} from '@app/shared/model/brand';
import {BrandService} from '@app/shared/service/brand.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-brand-form',
  templateUrl: './brand-form.component.html',
  styleUrls: ['./brand-form.component.scss']
})
export class BrandFormComponent implements OnInit {
  brandForm = new FormGroup({});
  constructor(public dialogRef: MatDialogRef<BrandFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Brand,
              private snackBar: MatSnackBar,
              private toastr: ToastrService,
              private brandService: BrandService, private fb: FormBuilder) {
    this.brandForm = this.fb.group({
      name: [this.data.name, Validators.required],
      id: [this.data.id]
    });
  }

  ngOnInit() {
  }

  get name() {
    return this.brandForm.get('name');
  }

  onClickSave(): void {
    if (this.brandForm.value.id) {
      this.brandService.updateEntity(this.brandForm.value, this.brandForm.value.id).subscribe(value => {
        this.dialogRef.close();
        this.toastr.success('Brand message', 'The Brand was updated!');
      });
    } else {
      this.brandService.createEntity(this.brandForm.value).subscribe(value => {
        this.dialogRef.close();
        this.toastr.success('Brand message', 'The Brand was created!');
      });
    }
  }
}
