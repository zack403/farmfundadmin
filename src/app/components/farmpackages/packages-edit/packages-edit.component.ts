import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PackagesService } from 'src/app/services/packages.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-packages-edit',
  templateUrl: './packages-edit.component.html',
  styleUrls: ['./packages-edit.component.css']
})
export class PackagesEditComponent implements OnInit {
  package: any = {};
  constructor(private route: ActivatedRoute, 
    private toastr: ToasterService,
    private pckSvc: PackagesService,
    private router: Router) { }

  ngOnInit() {
    this.getPackage();
  }

  getPackage() {
    this.pckSvc.GetById(this.route.snapshot.paramMap.get('id')).subscribe((res: any) => {
      this.package = res.data;
    })
  }

  OnfileChanged(event) {
    const files = event.target.files;
    this.package.imageUrl = files[0];
    if (!this.package.imageUrl.type.match(/image.*/)) return this.toastr.Error('Sorry, only images are allowed');
  }

  save(){
    const formData = new FormData();
    formData.append('image', this.package.imageUrl);
    formData.append('packageName', this.package.packageName);
    formData.append('unit', this.package.unit);
    formData.append('amountPerUnit', this.package.amountPerUnit);
    formData.append('cycle', this.package.cycle);
    formData.append('location', this.package.location);
    formData.append('profit', this.package.profit);

    this.pckSvc.update(this.package.id, formData).subscribe((res: any) => {
      this.toastr.Success(res.data);
      this.router.navigateByUrl('admin/packages-list')
    }, err => {
      console.log(err);
    })

  }

}
