#智联职位助手
>如果你想在智联招聘职位搜索中去除大量的培训、不在本市、已经投过简历的公司。不想使用智联自带的只能排除5家公司的功能，那么你可以使用本脚本。

1. 该脚本在职位搜索页`（http://sou.zhaopin.com/）`可以选择删除无用的职位或者删除该公司所有的职位，删除按钮在发布日期下,分别为X（删除该职位）、ALL（删除该公司的所有职位），被删除的公司及职位会被记录在localStorage.list中,可以通过浏览器F12，在console中输入localStorage.list查看。
![image](https://raw.githubusercontent.com/baixiaoyu2997/ZhiLlianHelper/master/img/2.png)
2. 该脚本删除了智联首页无用的垃圾广告。
![image](https://raw.githubusercontent.com/baixiaoyu2997/ZhiLlianHelper/master/img/1.png)
3. 如果想清除所有的记录，可以F12—console—`localStorage.clear()`
4. 如果想恢复某公司，在console中先写下面代码,然后刷新页面：
```
var gsmc=JSON.parse(localStorage.getItem('list'));delete gsmc['公司名称'];localStorage.setItem('list',JSON.stringify(gsmc))
```  

  >例如：
  ```
  var gsmc=JSON.parse(localStorage.getItem('list'));
  delete gsmc['天津达内科技有限公司'];  
  localStorage.setItem('list',JSON.stringify(gsmc))`  
  ```  
  
* 如果想恢复某职位,参考第四步，只是delete要修改为：
```
delete gsmc['公司名称'][gsmc['公司名称'].indexOf('职位名称')];
```
