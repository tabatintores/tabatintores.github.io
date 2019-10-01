$(document).ready(function(){
  $('#service-form select[multiple]').change(function(){
    var str = "";
    var arr = [];
    var strArr = [];
    $( '#service-form select[multiple] option:selected' ).each(function() {
      strArr.push($(this).text());
      var elem = $(this).text();
      elem = elem.match(/[0-9]{3,7} р\./);
      arr.push(+elem[0].replace(/\D+/g,""));
    });
    var arrSum = arr.reduce(add,0);
    var filteredArr = strArr.map(function(name) {
      return name.replace(/ - [0-9]{3,7} р\./, '');
    });
    $('#service-form input[type="submit"]').attr('value', 'Заказать - '+arrSum+" р.");
    $('#service-form input[name="Сумма"]').val(arrSum+" р.");
    $('#service-form input[name="Услуги"]').val(filteredArr.join(', '));
  })


  $("#car-model").on('input', function(){
    $('#car-hidden').val($("#car-brand").val() + " " + $('#car-model').val())
  })
  $("#service-time").on('input',function(){
    $('#service-hidden').val($('#service-date').val() + " в " + $('#service-time').val())
  })

  $('.preloader').delay(1000).fadeOut('slow');

  $(".call-button").click(function(){
    $("#modalCall").modal();
  });

  $(".service-button").click(function(){
    $("#modalService").modal();
  });

  $(".mail-button").click(function(){
    $("#modalMail").modal();
  });

  $("#btnRate").click(function(){
    $("#modalRate").modal();
  });

  $(".modal-number").mask("+7(999)999-99-99");

  $(".ratings-carousel").owlCarousel({
    loop: false,
    nav: true,
    smartSpeed: 700,
    items: 1,
    dots: true
  });


  var isRateSelected = false;

  $('.rate-radio label:not(.label-title)').on('mouseenter', function(){
    if(!isRateSelected){
      $('.rate-radio label:not(.label-title)').removeClass('icon-bold')
      var rateId = +$(this).attr('id').replace('rate-', '')
      for(var i = 0; i <= rateId; i++) {
        $('#rate-'+i).addClass('icon-bold')
      }
      $('#selectedRate').text(caseRate(rateId));
    }
  })

  $('.rate-radio label:not(.label-title)').on('mouseleave', function(){
    if(!isRateSelected) {
      for(var i = 0; i <= 5; i++) {
        $('#rate-'+i).removeClass('icon-bold')
      }
      $('#selectedRate').text('');
    } 
  })

  $('.rate-radio label:not(.label-title)').on('click',function(){
    var rateId = +$(this).attr('id').replace('rate-', '')
    for(var i = 0; i <= rateId; i++) {
      $('#rate-'+i).addClass('icon-bold')
    }
    for(var j = rateId+1; j<=5; j++){
      $('#rate-'+j).removeClass('icon-bold')
    }
    $('.rate-radio').find('input[name="rate"]').val(rateId)
    isRateSelected = true;
    $('#selectedRate').text(caseRate(rateId));
  })

  function caseRate(id) {
    var rateOutput = "";
    switch (id) {
      case 1:
      rateOutput = 'Очень плохо'
      break;
      case 2:
      rateOutput = 'Плохо'
      break;
      case 3:
      rateOutput = 'Средне'
      break;
      case 4:
      rateOutput = 'Хорошо'
      break;
      case 5:
      rateOutput = 'Очень хорошо'
      break;
    }
    return rateOutput
  }

  function add(acc, a) {
    return acc + a;
  }
});
