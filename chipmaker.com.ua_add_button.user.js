// ==UserScript==
// @name         chipmaker.com.ua_add_new_button
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://chipmaker.com.ua/index.php?/classifieds/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

// Сообщить будущим поколениям что иы были здесьони ...
    console.log(1);

// найти кнопку поиск-2
    var get_search_2 = $(".ipsPageHeader.ipsClearfix.ipsSpacer_bottom div a").eq(7);

// добавить после нее новую кнопку-ссылку на новый
    $(get_search_2).parent().parent().append(
    "<div style=\"overflow:hidden;height:50px;float:right;margin:5px;width:120px;\">"+
    "<a class=\"ipsButton ipsButton_medium ipsButton_success btn btn-success"+
    " ipsButton_fullWidth\" href=\"/index.php?/classifieds/submit/&_new=1\">НОВЫЙ ТОВАР</a>"+
    "</div>");


//скрыть стандартную кнопку добавить товар
    $(".ipsPageHeader.ipsClearfix.ipsSpacer_bottom .ipsToolList_primaryAction").hide();
})();