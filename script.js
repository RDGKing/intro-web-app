$(document).ready(function() {
    updateColor();
  
    $('#redInput, #greenInput, #blueInput').on('input', function() {
      updateColor();
    });
  
    $('#colorPicker').on('input', function() {
      var color = $(this).val();
      updateRGBFromColorPicker(color);
    });
  
    $('#redRange, #greenRange, #blueRange').on('input', function() {
      updateTextInput(this);
      updateColor();
    });
  
  });
  
  function updateColor() {
    var red = $('#redInput').val();
    var green = $('#greenInput').val();
    var blue = $('#blueInput').val();
  
    // Convertimos los valores a números enteros
    red = parseInt(red);
    green = parseInt(green);
    blue = parseInt(blue);
  
    // Aseguramos que los valores estén dentro del rango 0-255
    red = Math.min(255, Math.max(0, red));
    green = Math.min(255, Math.max(0, green));
    blue = Math.min(255, Math.max(0, blue));
  
    $('#redInput').val(red);
    $('#greenInput').val(green);
    $('#blueInput').val(blue);
  
    $('#redRange').val(red);
    $('#greenRange').val(green);
    $('#blueRange').val(blue);
    
    var hex = rgbToHex(red, green, blue);
  
    $('#colorBox').css('background-color', 'rgb(' + red + ',' + green + ',' + blue + ')');
    $('#hexValue').text('Código hexadecimal: ' + hex);
  }
  
  function updateTextInput(input) {
    var value = $(input).val();
    $(input).next().val(value);
  }
  
  function updateRangeInput(input) {
    var value = $(input).val();
    $(input).prev().val(value);
  }
  
  function updateRGBFromColorPicker(color) {
    var rgb = hexToRgb(color);
    $('#redInput').val(rgb.r);
    $('#greenInput').val(rgb.g);
    $('#blueInput').val(rgb.b);
    updateColor();
  }
  
  function rgbToHex(r, g, b) {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
  }
  
  function hexToRgb(hex) {
    var bigint = parseInt(hex.substring(1), 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;
    return {r: r, g: g, b: b};
  }
  