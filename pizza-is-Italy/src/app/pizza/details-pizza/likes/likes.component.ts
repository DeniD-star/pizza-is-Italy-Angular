import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { USER_KEY } from 'src/app/shared/constants';
import { Likes } from 'src/app/types/pizza';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnInit {
  @Input() pizzaId: string | undefined = '';
  public likes: Likes[] = [];
  public like: Likes | undefined;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getLikes();
  }

  public addLike(): void {
    var user: User = JSON.parse(sessionStorage.getItem(USER_KEY)!);
    this.apiService.addLike(this.pizzaId!, user._id!).subscribe(
      (resp) => (console.log(resp), this.getLikes())
    )
  }

  public removeLike(likeId: string): void {
    this.apiService.removeLike(likeId).subscribe(
      (resp) => (console.log(resp), this.getLikes())
    )
  }

  private getLikes(): void {
    var user: User = JSON.parse(sessionStorage.getItem(USER_KEY)!);
    this.apiService.getPizzaLikes(this.pizzaId!).subscribe(
      (likes) => (
        this.likes = likes,
        // cerca il primo like che è stato inserito dall'utente loggato, se lo trova imposta disableLike a true altrimenti a false
        this.like = likes.find((like) => like._ownerId === user._id)
      )
    )
  }
}
