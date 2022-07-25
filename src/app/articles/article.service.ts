import {Injectable} from '@angular/core';
import {Article} from './article';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private options = {headers: new HttpHeaders().set('Content-Type', 'application/json')};
  articles: Article[] = []

  getArticles(): Observable<Article[]> {
    return this.httpClient.get<Article[]>("http://192.168.100.3:8080/articles");
  }

  addArticle(article: Article): Observable<Article> {
    return this.httpClient.post<Article>("http://192.168.100.3:8080/articles", {
      title: article.title,
      description: article.description
    }, this.options);
  }

  deleteArticle(id: bigint){
    this.httpClient.delete("http://192.168.100.3:8080/articles/" + id).subscribe()
  }
  constructor(private httpClient: HttpClient) {
  }
}
