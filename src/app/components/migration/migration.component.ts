import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'src/app/services/toaster.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-migration',
  templateUrl: './migration.component.html',
  styleUrls: ['./migration.component.css']
})
export class MigrationComponent implements OnInit {
  isBusy: boolean = false;
  migrationData :any = {
    migrationType: ''
  };
  migrationType: string;
  errors: any;

  constructor(private http: HttpClient, private toastr: ToasterService) { }

  ngOnInit(): void {
  }

  OnfileChanged(event) {
    const files = event.target.files;
    const f = files[0];
    this.migrationData.file = f;
  }


  save() {
    this.isBusy = true;
    
    let formData = new FormData();
    formData.append('file', this.migrationData.file);
    formData.append('migrationType', this.migrationData.migrationType);

    this.http.post(`${environment.baseUrl}utility/migration`, formData).subscribe((res: any) => {
      this.isBusy = false;
      this.toastr.Success(res.message);
      if(res.errors.length > 0) {
        this.errors = res.errors;
        document.getElementById('alt').click();
      }
      formData.delete("file");
      formData.delete("migrationType");
    }, err => {
      this.isBusy = false;
    })

  }
}
