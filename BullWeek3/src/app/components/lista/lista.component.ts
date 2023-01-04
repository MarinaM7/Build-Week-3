import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {
  sub!: Subscription;
  posts: Post[] | undefined;

  constructor(private postSrv: PostService) {}

  ngOnInit(): void {
    this.recuperaPost();
  }

  recuperaPost() {
    this.sub = this.postSrv.get().subscribe((res) => {
      console.log(res);
      this.posts = res;
    });
  }

  cancellaPost(id: number) {
    this.sub = this.postSrv.delete(id).subscribe(() => {
      this.posts = this.posts?.filter((post) => post.id != id);
      console.log(`Post ${id} cancellato`);
    });
  }

  conferma(id:number){
    if(confirm("Sei sicuro di voler cancellare?")==true){
      this.cancellaPost(id)
    }
  }

}
