import {Component, OnInit} from '@angular/core';
import { Article } from '../_models/article';
import { ArticleService } from '../_services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  title: string = "Articles"
  article: Article = {description: "", id: 0n, title: "", date: ""}
  articles: Article[] = []
  writeArticle: boolean = false;
  constructor(public articleService: ArticleService) {
    this.getArticles()
  }

  getArticles() {
    this.articleService.getArticles().subscribe(articles => {
      this.articles = articles
    })
  }

  ngOnInit(): void {
    //this.getArticles()
  }

  sendArticle(article: Article) {
    this.article = {description: "", id: 0n, title: "", date: ""}
    this.articleService.addArticle(article).subscribe(article => {
      this.articles.push(article)
    })
    this.writeArticle=false
  }

  deleteArticle(id: bigint) {
    this.articleService.deleteArticle(id)
    location.reload()
  }

  close(){
    this.writeArticle=!this.writeArticle
    this.article = {description: "", id: 0n, title: "", date: ""}
  }
}
