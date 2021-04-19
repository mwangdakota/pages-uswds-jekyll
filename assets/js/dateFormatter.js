if (window.dateFormatter) {
  console.error('window.dateFormatter has been redefined', Date.now());
} else {
  window.dateFormatter = {

    today: (new Date()).setHours(0,0,0,0),

    mmddyyyy: function(str) {
      // Convert YYYY-MM-DD into MM/DD/YYYY
      let parts = str.split('-');
      return parts[1] + '/' + parts[2] + '/' + parts[0];
    },

    mdyyyy: function(str) {
      // Convert YYYY-MM-DD into M/D/YYYY (month or day may be single digit)
      let parts = str.split('-');
      return parseInt(parts[1], 10) + '/' + parseInt(parts[2], 10) + '/' + parts[0];
    },

    isEstimatedDate: function(date) {
      return Number(new Date(date + ' 00:00:00')) > this.today;
    },

    formatEndDate: function(isEstimatedDate, date, formatter) {
      return formatter(date) + (isEstimatedDate ? ' (Estimated)' : '');
    }

  }
}
