$(document).ready(function () {
    $(".DATA").click(function () {
      let isi = $(this).text();
      let tid = $(this).prop("id");
      let rid = tid.split("__");
      let id_row = rid[1];
      let Nama_Mhs = $("#Nama_Mhs__" + id_row).text();
  
      if (isi == "Delete") {
        let konfirmasi = confirm("Are you sure want to delete it?");
        if (!konfirmasi) return;
  
        $("#row__" + id_row).fadeOut();

      } else {
        alert("You click the column that contains : " + $(this).html() + "!");
      }
    });
  });