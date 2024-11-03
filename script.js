$(document).ready(function() {
    $('#datetimepicker').datetimepicker({
      format: 'DD MMMM YYYY - HH:mm',
      showTodayButton: true,
      icons: {
        today: 'fas fa-calendar-check',
        time: 'fas fa-clock',
        date: 'fas fa-calendar',
        up: 'fas fa-arrow-up',
        down: 'fas fa-arrow-down',
        previous: 'fas fa-chevron-left',
        next: 'fas fa-chevron-right',   
      }
    });
  
    // Adjust the size of the datetimepicker popup
    $('#datetimepicker').on('show', function() {
      setTimeout(function() {
        $('.bootstrap-datetimepicker-widget.dropdown-menu').css({
          width: '600px',
          height: '400px' // Adjust the height as needed
        });
      }, 100);
    });
    $('#datetimepicker').datetimepicker({
        // ... other options
        viewDate: moment().add(1, 'year') // View a year in the future
    });
    // Close button functionality
    $('#closeBtn').on('click', function() {
      $('#datetimepicker').data("DateTimePicker").hide();
    });
  });
  