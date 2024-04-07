import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Comments } from 'src/app/types/pizza';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() pizzaId: string | undefined = '';
  @Input() userName: string = '';
  public comments: Comments[] = [];
  public comment: string = '';

  constructor(private apiService: ApiService) { }


  ngOnInit(): void {
    // quando il componente viene creato chiama la funzione getComments che chiama il servizio per ricevere dal server i commenti inseriti
    this.getComments();
  }

  saveComment(): void {
    // chiamo il servizio per salvare un commento
    this.apiService.createComment(this.pizzaId!, this.comment, this.userName).subscribe({
      complete: () => (this.getComments(), this.comment = '')
    })
  }

  private getComments(): void {
    this.apiService.getPizzaComments(this.pizzaId!).subscribe(
      (comments) => this.comments = comments
    )
  }
}
