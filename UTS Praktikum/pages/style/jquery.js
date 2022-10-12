$(document).ready(function(){
    $(".menu").click(function(){
        let id = $(this).prop('id');
        let split = id.split('_');
        let id_menu = split[1];

        $(".menu").removeClass('aktif');
        $("#menu_"+id_menu).addClass('aktif');

        $("#isi_1").slideDown();
        $("#isi_2").slideDown();
        $("#isi_3").slideDown();
        $("#isi_4").slideDown();
        $("#isi_5").slideDown();
        $("#isi_"+id_menu).slideToggle("slow");
    });
});