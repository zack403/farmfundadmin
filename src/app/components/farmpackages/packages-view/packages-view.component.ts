import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PackagesService } from 'src/app/services/packages.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-packages-view',
  templateUrl: './packages-view.component.html',
  styleUrls: ['./packages-view.component.css']
})
export class PackagesViewComponent implements OnInit {

  package: any = {};
  apiUrl = environment.imagePath;
  constructor(private route: ActivatedRoute, private pckSvc: PackagesService) { }

  ngOnInit() {
    this.getPackage();
  }

  getPackage() {
    this.pckSvc.GetById(this.route.snapshot.paramMap.get('id')).subscribe((res: any) => {
      this.package = res.data;
      if(this.package.imageUrl.includes("http")) {
        return;
      }else {
        this.package.imageUrl =`${this.apiUrl}/${this.package.imageUrl}`;
      }
    })
  }

}
