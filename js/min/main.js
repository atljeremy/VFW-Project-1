/*
Deliverable 3
Author: Jeremy Fox
Created For: VFW Online
Simple HTML5 / Javascript Mobile Web Form
*//*
Variables
*/((function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w=this;this.dataViewState=!1;this.hasDataBeenDisplayed=!1;this.invalidateData=!1;this.keyToEdit=0;p=function(a){return w.dataViewState=a};k=function(){return w.dataViewState};n=function(a){return w.hasDataBeenDisplayed=a};h=function(){return w.hasDataBeenDisplayed};o=function(a){return w.invalidateData=a};j=function(){return w.invalidateData};d=function(){return $("#items").empty()};this.getKeyToEdit=function(){return w.keyToEdit};this.setKeyToEdit=function(a){return w.keyToEdit=a};this.storeData=function(){var a,b,c,d,e;e=new Date;w.getKeyToEdit()===0||w.getKeyToEdit()===""?b=e.getTime():b=w.getKeyToEdit();d=t();if(!_.isEmpty(d)){c=d.join("\n");return alert(c)}a={};a.name=["Name:",$("#name").val()];a.payto=["Pay To:",$("#payTo").val()];a.amount=["Amount:",$("#payAmount").val()];a.account=["From Account:",$("#payFrom").val()];a.payon=["Pay On:",$("#payOn").val()];a.notes=["Notes:",$("#notes").val()];a.remember=["Remember This Payment:",i()];try{localStorage.setItem(b,JSON.stringify(a));o(!0);alert("Bill Added!");w.setKeyToEdit(0);$("legend").html("<h2>Create a New Bill</h2>");w.displayData()}catch(f){return alert(f)}};g=function(){var a;if(_.size(localStorage)>0){a=document.createElement("ul");$("#items").append(a);_.each(_.keys(localStorage),function(b){var d,f,g,h,i,j,k,l,m,n;l=document.createElement("li");a.appendChild(l);n=localStorage.getItem(b);h=JSON.parse(n);m=document.createElement("ul");m.setAttribute("class","bill");k=document.createElement("img");k.setAttribute("src","i/pencil.png");k.setAttribute("class","icons");k.setAttribute("id","edit-"+b);j=document.createElement("img");j.setAttribute("src","i/x.png");j.setAttribute("class","icons");j.setAttribute("id","delete-"+b);i=document.createElement("img");d=/((Checking)|(Savings)|(Credit\sCard))+/g;f=h.account[1];g=f.match(d);switch(g){case"Checking":i.setAttribute("src","i/checking.png")(alert("Checking"));break;case"Savings":i.setAttribute("src","i/savings.png")(alert("Savings"));break;case"Credit Card":i.setAttribute("src","i/creditcard.png")(alert("Credit Card"))}i.setAttribute("class","icons");i.setAttribute("id","account-"+b);m.appendChild(k);m.appendChild(j);m.appendChild(i);l.appendChild(m);$("#edit-"+b).click("click",function(a){return e(b)});$("#delete-"+b).click("click",function(a){return c(b)});_.each(h,function(a){var b,c;c=document.createElement("li");m.appendChild(c);b=document.createElement("span");n=document.createElement("span");b.setAttribute("class","billField");n.setAttribute("class","billValue");c.appendChild(b);c.appendChild(n);b.innerHTML=a[0]+" ";n.innerHTML=a[1];return!0});return!0});return!0}};e=function(a){var b,c,d,e,f,g,h;e=localStorage.getItem(a);b=JSON.parse(e);w.setKeyToEdit(a);$("legend").html('<h2>Your Editing a Bill - <a href="additem.html" data-ajax="false" >Cancel</a></h2>');w.displayData();document.getElementById("name").value=b.name[1];document.getElementById("payTo").value=b.payto[1];document.getElementById("payAmount").value=b.amount[1];document.getElementById("payFrom").value=b.account[1];document.getElementById("payOn").value=b.payon[1];document.getElementById("notes").value=b.notes[1];d=document.forms[0].remember;h=[];for(f=0,g=d.length;f<g;f++){c=d[f];if(c.value==="Yes"&&b.remember[1]==="Yes"){c.setAttribute("checked","checked");document.getElementById("labelNo").setAttribute("class","ui-btn ui-corner-right ui-controlgroup-last ui-radio-off ui-btn-up-c");h.push(document.getElementById("labelYes").setAttribute("class","ui-btn ui-corner-left ui-btn-up-c ui-radio-on ui-btn-active"))}else if(c.value==="No"&&b.remember[1]==="No"){c.setAttribute("checked","checked");document.getElementById("labelYes").setAttribute("class","ui-btn ui-radio-off ui-corner-left ui-btn-up-c");h.push(document.getElementById("labelNo").setAttribute("class","ui-btn ui-corner-right ui-controlgroup-last ui-radio-on ui-btn-active ui-btn-up-c"))}else h.push(void 0)}return h};c=function(a){var b;b=confirm("Are you sure you want to delete this bill?");if(b){localStorage.removeItem(a);alert("Bill deleted!");return window.location.reload()}return alert("Bill was not deleted")};this.addAccount=function(a){};this.clearStorage=function(){localStorage.clear();return alert("All Data Has Been Deleted.")};$("#billForm").live("submit",function(a){var b;q(a);b=$(this).serialize();$.ajax({type:"POST",url:"additem.html",data:b,success:function(){return storeData()}});return!1});a=function(a){return a<10?"0"+a:""+a};i=function(){var a,b,c,d,e;b=document.forms[0].remember;for(d=0,e=b.length;d<e;d++){a=b[d];if(a.checked){c="";c=a.value;return c}}};t=function(){var a;a=[];($("#name").val()===null||$("#name").val()==="")&&a.push("Please Enter Your Name.");($("#payTo").val()===null||$("#payTo").val()==="")&&a.push("Please Enter Who You Would Like To Pay.");($("#payAmount").val()===null||$("#payAmount").val()===0)&&a.push("Please Enter The Amount To Pay.");($("#payFrom").val()===null||$("#payFrom").val()===""||$("#payFrom").val()==="-- Choose Account --")&&a.push("Please Enter The Account To Pay From.");($("#payOn").val()===null||$("#payOn").val()==="")&&a.push("Please Enter The Date You Would Like To Make This Payment.");s($("#payOn").val())&&a.push("Please Enter A Valid Date.");return a};s=function(b){var c,d,e,f,g,h,i,j;g=!1;c=/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;h=b.match(c);h.length<=0&&(g=!0);d=new Date;i="";i=d.getMonth()+1;f="";f=d.getDate();j="";j=d.getFullYear();e=_.toArray(b.split("-"));if(e[0]<j){g=!0;console.log("Entered Year ="+e[0]+". Current Year ="+j)}if(e[1]<a(i)){g=!0;console.log("Entered Month ="+e[1]+". Current Month ="+a(i))}if(e[2]<a(f)&&e[1]===a(i)){g=!0;console.log("Entered Day ="+e[2]+". Current Day ="+a(f))}return g!==null||g!==""&&_.isBoolean(g)?g:alert("ERROR: Please Try Again.")};q=function(a){a.preventDefault();a.stopPropagation();if($.browser.msie){a.originalEvent.keyCode=0;a.originalEvent.cancelBubble=!0;return a.originalEvent.returnValue=!1}};v=function(){$("#items").css("display","inline-block")};m=function(){$("#items").css("display","none")};u=function(){$("#billForm").css("display","inline")};l=function(){$("#billForm").css("display","none")};this.displayData=function(){if(localStorage.length>0)if(k()){p(!1);m();u();$("#displayData").text("Display Data")}else{p(!0);l();v();if(h()===!1||j()){d();g();n(!0);o(!1)}$("#displayData").text("Display Form")}else alert("Nothing To Display. Please Add A New Bill And Try Again.")};r=function(){return $(document).unbind("click")};$(document).bind("mobileinit",function(){$.mobile.accounts=f;$.mobile.date=b});f=function(){var a,b,c,d,e,f,g;b=["-- Choose Account --","Bank of America - Checking","Bank of America - Savings","Bank of America - Credit Card"];c=document.getElementById("selectAccounts");e=document.createElement("select");e.setAttribute("id","payFrom");for(f=0,g=b.length;f<g;f++){a=b[f];d=document.createElement("option");d.setAttribute("value",a);d.innerHTML=a;e.appendChild(d)}c.appendChild(e)};b=function(){var b,c,d,e,f;b=new Date;d=b.getMonth()+1;c=b.getDate();f=b.getFullYear();e=f+"-"+a(d)+"-"+a(c);return document.getElementById("payOn").value=e}})).call(this);