import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  blogForm = this.fb.group({
    blog: [null],
  });
  blog=null;
  constructor(private fb: FormBuilder,) { }

  ngOnInit(): void {
  }
  blogDone(){
    this.blog = this.blogForm.controls['blog'].value
  }
  editBlog(){
    this.blog = null
  }
}
