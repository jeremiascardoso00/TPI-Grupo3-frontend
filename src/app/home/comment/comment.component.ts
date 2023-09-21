import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {


  //todo model de comments 
  public comments:Array<any> = [
    {
      authorName: "Lautaro",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      authorName: "Gonzalo",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }, 
    {
      authorName: "Jeremias",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    }
  ]

  public loggedUser
  public bearer
  
  public newComment: string= ""

  constructor(   
      public commentService: CommentService,
    ) {
    this.loggedUser = JSON.parse(localStorage.getItem("loggedUser")  || '{}')
    this.bearer = localStorage.getItem("bearer")  || '{}'
    this.getAll()
  }

  getAll() {
    this.commentService.getAll().
      subscribe((data: any) => {
        this.comments = data
      }
    );
  }

  onSaveComment() {

    if (this.newComment == ""){
      return;
    }
    this.commentService.createOne({comment: this.newComment}).
      subscribe((data: any) => {
        debugger
        if (this.bearer === null){
          this.comments.unshift(
            {
              authorName: "anónimo",
              content: this.newComment
            }
          ) 
        } else {
          this.comments.unshift(
            {
              authorName: this.loggedUser.name,
              content: this.newComment
            }
          )
        }
        this.newComment = "";
      }
    );    
    
  }

}
