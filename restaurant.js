/* global $ */
$(document).ready(function () {
  var total;
  function order () {
    // Asking functions begin
    var tableFor = parseInt(prompt('Table for?'));
    var cost = 0;
    var appertizer;
    function starters () {
      if (tableFor === 1) {
        if (prompt('Would you like some starters?').toLowerCase() === 'yes') {
          $('#container').append('<div id="share"></div>');
          appertizer = prompt('What starters would you like? Nachos, calamari or bruschetta?');
          $('#share').text('Starters: ' + appertizer);
        }
      } else {
        if (prompt('Would you like starters to share?').toLowerCase() === 'yes') {
          $('#container').append('<div id="share"></div>');
          appertizer = prompt('What starters would you like? Nachos, calamari or bruschetta?');
          $('#share').text('Starters to share: ' + appertizer);
        }
      }
    }
    starters();
    for (var i = 0; i < tableFor; i++) {
      var main = prompt('What would you like for your main? Pizza, pasta or bean burrito?');
      var drink = prompt('What would you like to drink? Orange juice, coke or smootie?');
      var dessert =  prompt('What would you like for dessert? Tiramisu, cheesecake or ice cream?');
      $('#container').append('<div class="person"><h1> Person: ' + (i + 1) + '</h1>' + '<br>' + 'Main: ' + main + '<br>' + 'Beverage: ' + drink + '<br>' + 'Dessert: ' + dessert + '</div>');
      // $('#container').append('<div class="person"><h1> Person: ' + (i + 1) + '</h1>' + '<br>' + 'Main: ' + prompt('What would you like for your main?') + '<br>' + 'Beverage: ' + prompt('What would you like to drink?') + '<br>' + 'Dessert: ' + prompt('What would you like for dessert?') + '</div>');
      // Cost of each item
      function bill (cost) {
        switch (cost) {
          case 'nachos':
            return 10;
            break;
          case 'calamari':
            return 18;
            break;
          case 'bruschetta':
            return 10;
            break;
          case 'pizza':
            return 10;
            break;
          case 'pasta':
            return 8;
            break;
          case 'bean burrito':
            return 7;
            break;
          case 'orange juice':
            return 3.50;
            break;
          case 'coke':
            return 2.50;
            break;
          case 'smoothie':
            return 4.50;
            break;
          case 'tiramisu':
            return 7.50;
            break;
          case 'ice cream':
            return 4.50;
            break;
          case 'cheesecake':
            return 7.50;
            break;
          default:
            return 0;
        }
      }
      // $('#bill').append(appertizer + ': ' + bill(appertizer) + '<br>' + main + ': ' + bill(main) + '<br>' + drink + ': ' + bill(drink) + '<br>' + dessert + ': ' + bill(dessert) + '<br>');
      // console.log(cost += bill(appertizer) + bill(main) + bill(drink) + bill(dessert));
      $('#bill').append(main + ': ' + bill(main) + '<br>' + drink + ': ' + bill(drink) + '<br>' + dessert + ': ' + bill(dessert) + '<br>');
      console.log(cost += bill(main) + bill(drink) + bill(dessert));
    }
    $('#bill').prepend(appertizer + ': ' + bill(appertizer) + '<br>');
    console.log(cost += bill(appertizer));
    $('#total').text('Total: $' + cost);
    total = cost;
  }
  function tip () {
    if (prompt('Do you want to leave a tip?') === 'yes'.toLowerCase()) {
      if (prompt('How much tip? 8% or 10%?') === '8%') {
        console.log(0.08*total);
        $('p').text('Tip: $' + 0.08*total);
        $('h2').text('Grand Total: $' + (0.08*total + total));
      } else {
        $('p').text('Tip: $' + 0.1*total);
        $('h2').text('Grand Total: $' + (0.1*total + total));
      }
    } else {
      $('h2').text('Grand Total: $' + total);
    }
  }
  order();
  tip();
});
