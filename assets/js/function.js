$(function () {
    $('#WAButton').floatingWhatsApp({
        phone: '573167790462', //WhatsApp Business phone number
        headerTitle: 'Trabajos&Talleres!', //Popup Title
        popupMessage: 'Hola, gracias por comunicarte con Trabajos&Talleres, ¿cómo te puedo ayudar?', //Popup Message
        showPopup: true, 
        showOnIE: false,//Enables popup display
        buttonImage: '<img src="assets/img/favicon.png"/>', //Button Image', //Button Image
        headerColor: '#444444',
//Custom header color
      backgroundColor: 'white', //Custom background button color
        position: "left" //Position: left | right

    });
});


// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
.add({
targets: '.ml11 .line',
scaleY: [0,1],
opacity: [0.5,1],
easing: "easeOutExpo",
duration: 700
})
.add({
targets: '.ml11 .line',
translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
easing: "easeOutExpo",
duration: 700,
delay: 100
}).add({
targets: '.ml11 .letter',
opacity: [0,1],
easing: "easeOutExpo",
duration: 600,
offset: '-=775',
delay: (el, i) => 34 * (i+1)
}).add({
targets: '.ml11',
opacity: 0,
duration: 1000,
easing: "easeOutExpo",
delay: 1000
});