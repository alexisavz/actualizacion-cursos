$('input[name="pregunta_1"][type="button"]').on('click', function(event){
    let respuesta = $('input[name="respuesta"][type="radio"]:checked').val();
    if (respuesta == "correct1") {
        alert('¡Muy bien!');
    } else {
      alert('Respuesta incorrecta, intenta nuevamente.')
    }
    event.preventDefault();
});

$('input[name="pregunta_2"][type="button"]').on('click', function(event){
  let respuesta = $('input[name="respuesta"][type="radio"]:checked').val();
  if (respuesta == "correct1") {
      alert('¡Muy bien!');
  } else {
    alert('Respuesta incorrecta, intenta nuevamente.')
  }
  event.preventDefault();
});

$('input[name="pregunta_3"][type="button"]').on('click', function(event){
  let respuesta = $('input[name="respuesta"][type="radio"]:checked').val();
  if (respuesta == "correct1") {
      alert('¡Muy bien!');
  } else {
    alert('Respuesta incorrecta, intenta nuevamente.')
  }
  event.preventDefault();
});

$('input[name="pregunta_4"][type="button"]').on('click', function(event){
  let respuesta = $('input[name="respuesta"][type="radio"]:checked').val();
  if (respuesta == "correct1") {
      alert('¡Muy bien!');
  } else {
    alert('Respuesta incorrecta, intenta nuevamente.')
  }
  event.preventDefault();
});

$('input[name="pregunta_5"][type="button"]').on('click', function(event){
  let respuesta = $('input[name="respuesta"][type="radio"]:checked').val();
  if (respuesta == "correct1") {
      alert('¡Muy bien!');
  } else {
    alert('Respuesta incorrecta, intenta nuevamente.')
  }
  event.preventDefault();
});
