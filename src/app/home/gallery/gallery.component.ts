import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {Gallery} from '@app/shared/model/gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<GalleryComponent>,
              @Inject(MAT_DIALOG_DATA) public galleries: Gallery[]) {
  }

  ngOnInit() {
  }

}
