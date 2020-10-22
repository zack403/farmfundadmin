import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PackagesService } from 'src/app/services/packages.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-packages-create',
  templateUrl: './packages-create.component.html',
  styleUrls: ['./packages-create.component.css']
})
export class PackagesCreateComponent implements OnInit {
  packageData: any = {
    packageName: '',
    cycle: 0,
    unit: 0,
    amountPerUnit: '',
    location: '',
    profit: 0
  };
  isBusy: boolean = false;
  constructor(private toastr: ToasterService, private pckSvc: PackagesService, private router: Router) { }

  ngOnInit() {
  }

  OnfileChanged(event) {
    const files = event.target.files;
    const f = files[0];
    if (!f.type.match(/image.*/)) return this.toastr.Error('Sorry, only images are allowed');
    this.packageData.imageUrl = f;
  }

  save() {
    this.isBusy = true;
    const formData = new FormData();
    formData.append('image', this.packageData.imageUrl);
    formData.append('packageName', this.packageData.packageName);
    formData.append('unit', this.packageData.unit);
    formData.append('amountPerUnit', this.packageData.amountPerUnit);
    formData.append('cycle', this.packageData.cycle);
    formData.append('location', this.packageData.location);
    formData.append('profit', this.packageData.profit);



    this.pckSvc.CreatePackages(formData).subscribe((res: any) => {
      this.toastr.Success(res.message);
      this.isBusy = false;
      this.router.navigateByUrl("admin/packages-list");
    }, err => {
      this.isBusy = false;
      console.log(err);
    })
  }

}
