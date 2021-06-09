if (window.strFormatter) {
  console.error('window.strFormatter has been redefined', Date.now());
} else {
  window.strFormatter = {

    usd_pretty: function(amount) {
      return '$' + amount.replaceAll(/\s/g, '').replaceAll(/\D/g, '').replaceAll(/\B(?=(\d{3})+(?!\d))/g, ',');
    },

    phone: function(phone_number) {
      return '(' + phone_number.slice(0, 3) + ') ' + phone_number.slice(3, 6) + '-' + phone_number.slice(-4);
    }

  }
}
