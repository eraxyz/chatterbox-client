var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    let message = {};
    message['roomname'] = $('#rooms select option:selected').val();
    message['text'] = $('#message').val();
    message['username'] = App.username;
    Parse.create(message, function(){
      MessagesView.updateResults();
    })
    $('#message').val('');
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};