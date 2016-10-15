// ==UserScript==
// @name         智联职位助手
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  屏蔽智联招聘列表中无用的公司与职位.可选择屏蔽该职位或者该公司.
// @author       L.Rain
// @match        http://sou.zhaopin.com/jobs/searchresult.ashx*
// @match        http://www.zhaopin.com/
// @match        http://jobs.zhaopin.com/*
// @grant        none
// ==/UserScript==

//table页添加btn
if (/sou\.zhaopin\.com/.test(location.href)) {
    //添加列表页删除按钮
    $('.newlist_list_xlbtn').map(function (x, y) {
        $(y).after("<br> <button style='margin-bottom:9px;margin-left:5px;width:15px' onclick='return false'>X<button> <button name='ALL' style='margin-bottom:9px;margin-left:5px;width:15px' onclick='return false'>ALL<button>");
    });
    var table = $('tbody tr:first-child');
    var list = localStorage.list?JSON.parse(localStorage.list):{};

    //添加btn事件委托
    table.delegate('button', 'click', function (e) {
        //屏蔽所有该公司招聘
        var gsmc = $(this).parent().siblings('.gsmc').text().trim();
        var htr = $(this).closest('tr');
        if (e.target.name == 'ALL') {
            list[gsmc] = ['ALL'];
        } else {
            var zwmc = $(this).parent().siblings('.zwmc').find('a').text().trim();
            if (list[gsmc]) {
                list[gsmc].push(zwmc);
            } else {
                list[gsmc] = [zwmc];
            }
        }
        localStorage.setItem('list', JSON.stringify(list));
        removegsmc();
    });
    removegsmc();

} else if (/jobs\.zhaopin\.com/.test(location.href)) {
    //detail页面添加btn
    //$('#applyVacButton2').after("<button class='close' style='margin: 20px 0 0 0;height:40px;width:35px'>X</button>");
    //$(document).delegate('button','click',function(){
    //   if($(this).hasClass('.close'))window.close();
    //});
} else {
    $('#globalHeader,#footer,#wrapper').remove();
}
  
function removegsmc() {
    for (var i in list) {
        table.map(function (x, y) {
            if ($(y).children('.gsmc').text() == i) {
                if (list[i][0] == ['ALL'] || list[i].includes($(y).children('.zwmc').text().trim())) {
                    $(y).hide();
                }
            }
        });
    }
}

