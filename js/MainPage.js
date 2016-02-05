/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function(){
    var newPart = $('#newPart');
    newPart.hide();
    $("#addPart").on('click',function(){
        newPart.show();
        $("#addPart").add(newPart);
        console.log("button clicked");
    });
});