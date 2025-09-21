import * as dataType from './dataType'

export const articles:dataType.article[] = [
  {id:'1', img:'/img/articles_1.jpg', name:'文章1', products:['1','2','3']},
  {id:'2', img:'/img/articles_2.jpg', name:'文章2', products:['1','2','4']},
  {id:'3', img:'/img/articles_3.jpg', name:'文章3', products:['1','3','4']},
  {id:'4', img:'/img/articles_4.jpg', name:'文章4', products:['1','2','5']},
  {id:'5', img:'/img/articles_5.jpg', name:'文章5', products:['1','5','6']},
  {id:'6', img:'/img/articles_6.jpg', name:'文章6', products:['4','5','6']},
];

export const products:dataType.product[] = [
  {id:'1', img:'/img/product_1.jpg', content:'product description\nproduct description\nproduct description',},
  {id:'2', img:'/img/product_2.jpg', content:'content2 content content content\ncontent content',},
  {id:'3', img:'/img/product_3.jpg', content:'content3 33333 content content\ncontent',},
  {id:'4', img:'/img/product_4.jpg', content:'content4 content content content\ncontent content',},
  {id:'5', img:'/img/product_5.jpg', content:'content5 con5tent content content\ncontent',},
  {id:'6', img:'/img/product_6.jpg', content:'content6 666ntent content content\ncontent content',},
];
