const dataTablesConfig = function () {
  return {
    language: {
      info: "_START_ to _END_ of _TOTAL_",
      infoFiltered: "",
      paginate: {
        previous: '&lt;',
        next: '&gt;'
      }
    },
    preDrawCallback: function (settings) {
      var api = new $.fn.dataTable.Api(settings);
      var pagination = $(this)
        .closest('.dataTables_wrapper')
        .find('.dataTables_paginate');
      pagination.toggle(api.page.info().pages > 1);
    }
  }
}
