$(document).ready(function() {
  // Alternar o menu ao clicar no botão hamburguer
  $(".menu-toggle").click(function() {
      $("nav ul").toggle(300); 
  });

  // Lidar com hover e clique nos submenus
  $(".rank, .admin").on({
      mouseenter: function() {
          $(this).find("> ul").show(300); // Mostrar submenu direto
          $(this).attr('aria-expanded', 'true'); // Atualizar o atributo aria-expanded
      },
      mouseleave: function() {
          $(this).find("> ul").hide(300); // Ocultar submenu direto
          $(this).attr('aria-expanded', 'false'); // Atualizar o atributo aria-expanded
      },
      click: function(e) {
          e.stopPropagation(); // Evitar que o clique se propague
          $(this).find("> ul").toggle(300); // Alternar submenu ao clicar
          // Alternar o valor de aria-expanded
          var isExpanded = $(this).attr('aria-expanded') === 'true';
          $(this).attr('aria-expanded', !isExpanded);
      }
  });

  // Fechar submenus ao clicar fora deles
  $(document).click(function(e) {
      if (!$(e.target).closest('.rank, .admin').length) {
          $(".ranking, .adm").hide(300);
          $(".rank, .admin").attr('aria-expanded', 'false'); // Fechar todos os submenus e atualizar aria-expanded
      }
  });
});