---
title: 'Exhibitor B'
permalink: /Exhibition/School-Cluster-b/ExhibitorB/
breadcrumb: 'School Cluster'
collection_name: Exhibition
third_nav_title: 'School Cluster'
---

<script>
function showChinese() {
  document.getElementById("trChinese").style.display = "block";
  document.getElementById("trMalay").style.display = "none";
  document.getElementById("trTamil").style.display = "none";
}
function showMalay() {
  document.getElementById("trChinese").style.display = "none";
  document.getElementById("trMalay").style.display = "block";
  document.getElementById("trTamil").style.display = "none";
}
function showTamil() {
  document.getElementById("trChinese").style.display = "none";
  document.getElementById("trMalay").style.display = "none";
  document.getElementById("trTamil").style.display = "block";
}
</script>
<div>
  <table>
    <tr>
      <td>
        <input class="btnChinese" type="button" value="Chinese" onclick="showChinese()">
      </td>
      <td>
        <input class="btnMalay" type="submit" value="Malay" onclick="showMalay()">
      </td>
      <td>
        <input class="btnTamil" type="submit" value="Tamil" onclick="showTamil()">
      </td>
    </tr>
    <tr id="trChinese">
      <td colspan="3">
        This is Chinese content.
      </td>
    </tr>
    <tr id="trMalay" style="display:none;">
      <td colspan="3">
        This is Malay content.
      </td>
    </tr>
    <tr id="trTamil" style="display:none;">
      <td colspan="3">
        This is Tamil content.
      </td>
    </tr>
</div>
