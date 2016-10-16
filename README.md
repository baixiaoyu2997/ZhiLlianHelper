#智联职位助手
##如果你想在智联招聘职位搜索中去除大量的培训、不在本市、已经投过简历的公司。不想使用智联自带的只能排除5家公司的功能，那么你可以使用本脚本。
>该脚本可用于Tampermonkey、GreaseMonkey，可在[智联职位助手](https://greasyfork.org/zh-CN/scripts/24025-%E6%99%BA%E8%81%94%E8%81%8C%E4%BD%8D%E5%8A%A9%E6%89%8B)下载安装此脚本  

###0.7beta更新:脚本管理,请看使用帮助第4条

###使用帮助：
1. 该脚本在职位搜索页`（http://sou.zhaopin.com/）`可以选择删除无用的职位或者删除该公司所有的职位，删除按钮在发布日期下,分别为X（删除该职位）、ALL（删除该公司的所有职位），被删除的公司及职位会被记录在localStorage.list中,可以通过浏览器F12，在console中输入localStorage.list查看。         
![image](https://raw.githubusercontent.com/baixiaoyu2997/ZhiLlianHelper/master/img/2.png)    

2. 该脚本删除了智联首页无用的垃圾广告。  
![image](https://raw.githubusercontent.com/baixiaoyu2997/ZhiLlianHelper/master/img/1.png)
3. 如果想清除所有的记录，可以F12—console—`localStorage.clear()`
4. 如果想恢复某公司或者某职位，可以在脚本管理中进行恢复.
![image](https://raw.githubusercontent.com/baixiaoyu2997/ZhiLlianHelper/master/img/3.png)
