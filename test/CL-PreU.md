---
title: 'CL-PreU'
permalink: /test/CL-PreU/
breadcrumb: 'CL PreU'
---
<html>
<html>
<body>
<style>
  table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td{
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  width:60%;
}
  .tab img{
   width: 80%;
 }
  
  * {
  box-sizing: border-box;
}

 .tab table {
   display: none;
}
.tab table:target {
  display: block;
}
  .column {
  float: left;
  width: 80%;
  padding: 5px;
}
.atab label {
    position: relative;
    display: block;
    background: #d14165;
    color: #fff;
    font-weight: 700;
    padding: 10px;
    cursor: pointer;
 }
 .row {
    display: flex;
    height: 8%;
}
 .atab label::after {
  content: "+";
  font-size: 22px;
  position: absolute;
  right: 10px;
  top: 7px;
  transition: all 0.4s;
}
 iframe{
border : 0;
width:100%;
}
 .atab input[type=checkbox]:checked + label::after,
.atab input[type=radio]:checked + label::after {
    content: 'x';
    right: 14px;
    top: 7px;
  //transform:rotate(-225deg);
   /* transform: rotate(90deg); */
}
.tab-content {
  overflow: hidden;
  display: none;
  width:100%; 
}
.atab{
  margin-bottom: 5px;
  width:100%;  
}
 
</style>
