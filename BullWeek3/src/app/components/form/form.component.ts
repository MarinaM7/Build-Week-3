import { HttpClient } from '@angular/common/http';
import { Component, } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/service/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  title = 'BullWeek3';
  newUser: {

    title: string,
    body: string
  } = {
    title: '',
    body: '',

  }
  sub!: Subscription;
  users: Post[] | undefined;

  constructor(private http: HttpClient, private postSrv: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    console.log(id);
    this.postSrv.getDet(id).subscribe((value)=>{
      this.newUser = value
      console.log(this.newUser)
    })

  }
  recuperaDati(){
    this.sub = this.postSrv.get().subscribe((ris) => {
      console.log(ris);
      this.users = ris;
    })
  }

  crea() {
    this.sub = this.postSrv.post(this.newUser).subscribe((ris: Post) => {
        console.log(ris);
        this.users?.push(ris);
    });
this.newUser = {title: '', body: ''};

this.recuperaDati();


  }


}
