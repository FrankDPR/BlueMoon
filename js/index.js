//NAVBAR FLOAT
$(function(){
    $(document).scroll(function(){
        var $nav = $('.navbar-fixed');
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});
function openMenu(){
    document.getElementById("mySidebar").className = "inMenu sidebar";
}
function closeMenu(){
    document.getElementById("mySidebar").className = "outMenu sidebar";
}