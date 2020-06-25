---
title: 'PreSchool'
permalink: /Gallery/华语论坛-b/PreSchool/
breadcrumb: '华语论坛'
collection_name: Gallery
third_nav_title: '华语论坛'
---
## Pre School

<html>
<head>
<style>
.atab-content {
  overflow: hidden;
  display: none;
}
.atab input:checked ~ .tab-content {
  display: block;
}
.atab input {
  display: none;
}
.atab label {
  display: block;
  background: #2d5faf;
  color: #fff;
  font-weight: bold;
  padding: 10px;
  cursor: pointer;
}
.atab label::after {
  content: "\25b6";
  position: absolute;
  right: 10px;
  top: 10px;
  display: block;
  transition: all 0.4s;
}
.atab input[type=checkbox]:checked + label::after,
.atab input[type=radio]:checked + label::after {
  transform: rotate(90deg);
}
/* [THE CONTENTS] */

</style>
</head>
<body>
  
<div class="atab">
      <input id="tab-1" type="checkbox" name="tab">
      <label for="tab-1">Tab 1</label>
      <div class="tab-content">
        <p>
         this is tab a.
        </p>
      </div>
</div>

<div class="atab">
      <input id="tab-2" type="checkbox" name="tab">
      <label for="tab-2">Tab 2</label>
      <div class="tab-content">
        <p>
         this is tab b.
        </p>
      </div>
</div>
  
</body>
