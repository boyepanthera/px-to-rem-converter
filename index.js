var remField = document.getElementById('rem-field')
var pxField = document.getElementById('px-field')
var rootField = document.getElementById('root-element')

var handleOnPxChange = function (event) {
  var remValue
  var pxValue = event.target.value
  if (Number(rootField.value) !== 16) {
    remValue = Number(pxValue) / rootField.value
  } else {
    remValue = Number(pxValue) / 16
  }
  remField.value = remValue
  return
}

var handleOnRemChange = function (event) {
  var remValue = event.target.value
  var pxValue
  if (Number(rootField.value) !== 16) {
    pxValue = Number(remValue) * rootField.value
  } else {
    pxValue = Number(remValue) * 16
  }
  pxField.value = pxValue
  return
}

remField.oninput = handleOnRemChange
pxField.oninput = handleOnPxChange
