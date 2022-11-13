import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { Article } from '../_models/article';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private options = {
    headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
  };
  url = "http://192.168.100.4:8080/api/v1/articles";

  getArticles(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(this.url, this.options);
  }

  addArticle(article: Article): Observable<Article> {
    return this.httpClient.post<Article>(this.url, {
      title: article.title,
      description: article.description
    }, this.options);
  }

  deleteArticle(id: bigint){
    this.httpClient.delete(`${this.url}/` + id,this.options).subscribe()
  }
  constructor(private httpClient: HttpClient) {
  }
}
