import { Component, OnInit } from '@angular/core';
import { FilesService } from '../service/files.service';

@Component({
  selector: 'app-add-file',
  templateUrl: './add-file.component.html',
  styleUrls: ['./add-file.component.css']
})
export class AddFileComponent implements OnInit {
  selectedFile: File = null;

  constructor(private fileService: FilesService) { }

  ngOnInit() {
  }
  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile);

  }
  onSubmit() {
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);    
    this.fileService.postFile(fd).subscribe(res => {
      console.log(res);
    }, error => {
      console.log(error);
    });
  }
}
