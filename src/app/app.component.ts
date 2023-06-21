import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-second';
  parentMessage: string = 'Message changed!';
  message: string = ''

  @ViewChild(PostComponent) childComp!: PostComponent;

  constructor(){
    console.log(this.childComp);
    
  }

  ngAfterViewInit(): void {
    console.log(this.childComp);
    this.message = this.childComp.childMessage;
  }
}
