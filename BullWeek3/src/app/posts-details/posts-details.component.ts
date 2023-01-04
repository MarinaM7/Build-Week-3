import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post';
import { PostService } from '../service/post.service';


@Component({
  selector: 'app-posts-details',
  templateUrl: './posts-details.component.html',
  styleUrls: ['./posts-details.component.scss']
})
export class PostsDetailsComponent implements OnInit {
  posts: Post | undefined;

  constructor(private postSrv: PostService, private route: ActivatedRoute,) { }



    ngOnInit(): void {
      let id = this.route.snapshot.params['id'];
      console.log(id);
      this.postSrv.getDet(id).subscribe((value)=>{
        this.posts = value
        console.log(this.posts)
      })

    }
  }
