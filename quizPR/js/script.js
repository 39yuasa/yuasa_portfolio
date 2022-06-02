function chbx(obj) {
  const that = obj;
  if (document.getElementById(that.id).checked == true) {
    document.getElementById("id1").checked = false;
    document.getElementById("id2").checked = false;
    document.getElementById("id3").checked = false;
    document.getElementById(that.id).checked = true;
  }
}
