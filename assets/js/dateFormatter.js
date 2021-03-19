if (window.dateFormatter) {
  console.error('window.dateFormatter has been redefined', Date.now());
} else {
  window.dateFormatter = {

    mmddyyyy: function(str) {
      // Convert YYYY-MM-DD into MM/DD/YYYY
      let parts = str.split('-');
      return parts[1] + '/' + parts[2] + '/' + parts[0];
    },

    mdyyyy: function(str) {
      // Convert YYYY-MM-DD into M/D/YYYY (month or day may be single digit)
      let parts = str.split('-');
      return parseInt(parts[1], 10) + '/' + parseInt(parts[2], 10) + '/' + parts[0];
    }

  }
}
