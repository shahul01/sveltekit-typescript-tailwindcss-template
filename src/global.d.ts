/// <reference types="@sveltejs/kit" />

interface IModelBlog {
  id: string;
  title: string;
  body: string;
  author: string;
  date: Date;
}
