 jQuery(document).ready(function($) {

  function addClassOnScoll(class_name, anim_name) {

      let cta_section = $(class_name);
      let offset = cta_section.offset();
      let w = $(window).height();
      let section_position = offset.top - w;
      let anim_class_name = anim_name;

      $(window).scroll(function() {

          let scroll = $(window).scrollTop();
          if (scroll >= section_position) {
              cta_section.addClass(anim_class_name);
          } else {
              cta_section.removeClass(anim_class_name);
          }
      });

  }

  /* Example - on element cta-section we add class 'section-animation' for fire up*/
  
  addClassOnScoll('.cta-section', 'section-animation');

 });
