import {Component, OnInit} from '@angular/core';
import {ArticleService} from "./article.service";
import {Article} from "./article";

@Component({
  selector: 'app-topics',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  title: string = "Articles"
  article: Article = {description: "", id: 0n, title: "", date: ""}
  articles: Article[] = []
  writeArticle: boolean = false;
  constructor(public articleService: ArticleService) {
  }

  getArticles() {
    this.articleService.getArticles().subscribe(articles => {
      this.articles = articles
      console.log(articles)
    })
  }

  ngOnInit(): void {
    this.getArticles()
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
