import { Component, OnInit } from '@angular/core';
import { Team3Service } from 'src/app/team3.service';
import { Articles } from 'src/app/article';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  AddForm:FormGroup;
  arrReadMore:any;
  updatedid:any;
  closeResult: string;
arr: Articles[] = [];
arr1:Articles[] =[];
fetchData:Articles[]=[];
arrReadMor:Articles[]=[];
all_arr: any;
data:any;
  constructor(private _data:Team3Service, private modalService: NgbModal,private fb:FormBuilder,private act:ActivatedRoute) { }

  ngOnInit() {
    this.AddForm=this.fb.group({
      articleName:new FormControl(null),
      content:new FormControl(null),
      createdBy:new FormControl(null),
      previewContent:new FormControl(null),
      articleId:new FormControl(null),
      categoryName:new FormControl(null),
      createdByName:new FormControl(null),
      createdDate:new FormControl(null),
      modifiedBy:new FormControl(null),
      modifiedByName:new FormControl(null),
      modifiedDate:new FormControl(null),
      categoryId:new FormControl(null),

    })
    //
    this.getArticles();
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

getArticles(){
  this._data.getAllData().subscribe(
    (data:Articles[])=>
    {
    this.arr=data;
    console.log(this.arr);
     this.all_arr=this.arr['kbArticles'];
  },
  );
}
onDelete(){
  //this._data.deletItem()
}




OnAddArticleSave(){

    this._data.addArticles(
    new Articles(
    this.AddForm.value.articleId,
    this.AddForm.value.articleName,
    this.AddForm.value.content,
    this.AddForm.value.previewContent,
    this.AddForm.value.categoryId,
    this.AddForm.value.categoryName,
    this.AddForm.value.createdBy,
    this.AddForm.value.createdByName,
    this.AddForm.value.createdDate,
    this.AddForm.value.modifiedBy,
    this.AddForm.value.modifiedByName,
    this.AddForm.value.modifiedDate
    )
    ).subscribe(
    (data:Articles[])=>{
      this.arr1=data;
      console.log(this.arr1);
    alert("Added successfully");
    }
    );
    console.log('completed');

    }

    openEditPopup(Editpopup,item){



      this.AddForm.patchValue({
        articleId:this.all_arr[item].articleId,
        articleName:this.all_arr[item].articleName,
        content:this.all_arr[item].content,
        previewContent:this.all_arr[item].previewContent,
        categoryId:this.all_arr[item].categoryId,
        categoryName:this.all_arr[item].categoryName,
        createdBy:this.all_arr[item].createdBy,
        createdByName:this.all_arr[item].createdByName,
        createdDate:this.all_arr[item].createdDate,
        modifiedBy:this.all_arr[item].modifiedBy,
        modifiedByName:this.all_arr[item].modifiedByName,
        modifiedDate:this.all_arr[item].modifiedDate
      });
      this.modalService.open(Editpopup,{
        size:"lg"
      });
  }

  UpdateArticles(){

        this._data.updateArticle(this.updatedid.articleId).subscribe(
          (x:any)=>{
            alert('updated successfully')
          }
        );
      }
      search(value) {
        if (value != "") {
          // Search the corresponding registration entry from the list.
          this.arr = this.arr.filter(x => x.articleName.indexOf(value) != -1);
        }
        }
}









