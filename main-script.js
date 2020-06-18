// Форма поиска
$('.c-select').click(function () {
  $(this).toggleClass('c-select_active')
})

$('.c-select__item').click(function () {
  const selectValue = $(this).closest('.c-select').find('.value')
  const placeholder = $(this).closest('.c-select').find('.placeholder')
  const input = $(this).closest('.c-select').find('input')

  placeholder.css('display', 'none')
  selectValue.text($(this).text())
  input.val($.trim($(this).text()))
})

$('.c-select__item_reset').click(function () {
  const selectValue = $(this).closest('.c-select').find('.value')
  const placeholder = $(this).closest('.c-select').find('.placeholder')
  const input = $(this).closest('.c-select').find('input')

  placeholder.css('display', 'block')
  selectValue.text('')
  input.val(0)
})

// клик вне элемента для Формы поиска
document.addEventListener('click', function (e) {
  if (
    !$('.c-select').is(e.target) &&
    !$('.c-select__list').is(e.target) &&
    $('.c-select').has(e.target).length === 0
  ) {
    $('.c-select').removeClass('c-select_active')
  }
})

// Карточки с авто в Новые поступления
const photoPreview = $('.car-card__preview')
const photoMark = photoPreview.find('i')
const carPics = photoPreview.find('.car-card__pics')

photoMark
  .mouseover(function () {
    $(this).closest('.car-card__preview').find('i.active').removeClass('active')
    $(this).toggleClass('active')

    let id = $(this).data('id')
    $(this).closest('.car-card__preview').find('img.active').removeClass('active').addClass('hide')
    $(this)
      .closest('.car-card__preview')
      .find(`img[data-id="${id}"]`)
      .removeClass('hide')
      .addClass('active')
  })
  .mouseout(function () {
    $(this).toggleClass('active')
  })

photoPreview.mouseleave(function () {
  $(this).find('i').first().addClass('active')
  $(this).closest('.car-card__preview').find('img.active').removeClass('active').addClass('hide')
  $(this).closest('.car-card__preview').find('img').first().removeClass('hide').addClass('active')
})

// Модалка - Обратный звонок
const callbackForm = $('#callback-form')
const callbackClose = callbackForm.find('.request-form__close')

$('#callback').click(function () {
  callbackForm.toggle()
})

callbackClose.click(function () {
  callbackForm.toggle()
})

// карта Яндекс
function _initMap(elementId, lat, lng, zoom, ctl) {
  var element = document.getElementById(elementId)
  if (element === null) {
    return
  }

  var map
  ymaps.ready(function () {
    map = new ymaps.Map(elementId, {
      center: [lat, lng],
      zoom: zoom == undefined || zoom == 0 ? 15 : zoom,
      controls: ['zoomControl']
    })
    var myPlacemark = new ymaps.Placemark(map.getCenter(), { balloonPane: 'outerBalloon' })
    map.geoObjects.add(myPlacemark)
  })
}

// Гамбургер меню
$('#hamb').click(function () {
  $('.m-menu').toggle('slow')
  $('body').toggleClass('body--scroll')
})

// клик вне элемента для гамбургера
document.addEventListener('click', function (e) {
  if (
    !$('.m-menu__wrapper').is(e.target) &&
    !$('.m-header__menu').is(e.target) &&
    !$('#hamb').is(e.target) &&
    !$('#hamb span').is(e.target) &&
    $('.m-menu__wrapper').has(e.target).length === 0
  ) {
    $('.m-menu').css('display', 'none')
    $('body').removeClass('body--scroll')
  }
})
