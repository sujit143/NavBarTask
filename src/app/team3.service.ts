import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class Team3Service {

  constructor(private _data:Team3Service, private _http:HttpClient) { }
  currentuser;
  isAdmin: boolean;

  url="https://3df52e24.ngrok.io/api/KB/GetArticles?getall=0&categ=";
  add_article:string="https://3df52e24.ngrok.io/api/KB/InsertUpdateKBAricles";
  URLfetchDataById = 'https://3df52e24.ngrok.io/api/KB/GetKBArticlesById?ArticleId=';
  URLInsertUpdate = 'https://3df52e24.ngrok.io/api/KB/InsertUpdateKBAricles';

  getAllData(){
     return this._http.get(this.url);
  }

  addArticles(item){

    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.add_article,body,{headers:head});
  }

fetchDataById(id) {
// let path= 'GetKBArticlesById?ArticleId='+id;
// let body=JSON.stringify(path)
return this._http.get(this.URLfetchDataById + id);
}
  login(username: string, password: string) {
    if (username == 'admin' && password == '1234') {

      this.currentuser = {
        username:username,
        password:password,
       isAdmin :true
      };
        return;
    }
        {
      this.currentuser = {
        username:username,
        password:password,
      isAdmin:false
      };

    }


  }
  updateArticle(item){
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.URLInsertUpdate,body,{headers:head});
  }

}



