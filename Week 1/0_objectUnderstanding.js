//내가 헷갈리는 것들
var obj1 = {
  a: 1,
  b: 2
};
//console.log(obj1['a'], obj1.a);//1 1
//console.log(obj1['b'], obj1.b);//2 2

for (var key in obj1){
  console.log(key, obj1[key]);// ('a' 1) ('b' 2)
  //console.log(obj1.key);
  //'.' 뒤에는 다 글자로 인식, obj1에 key라는 property가 있니? 라는 질문임
}
