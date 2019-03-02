var MessagesView = {

  $chats: $('#chats'),
  dataArray: {},

  initialize: function() {
    MessagesView.getMessages();
  },
  getMessages: function(){
    Parse.readAll((data)=> {
    Messages.list = data;
    RoomsView.getRooms(Messages.list);
    MessagesView.createMessage(Messages.list.results);
    RoomsView.render();
    MessagesView.render();
    FriendsView.initialize();
    })
  },
  updateLoop: function(){
    Parse.readAll((data)=> {
      Messages.list = data;
      MessagesView.createMessage(Messages.list.results);
      MessagesView.render();
      FriendsView.initialize();
    });
    setTimeout(MessagesView.updateLoop,1000)
  },
  updateResults: function(){
    Parse.readAll((data)=> {
      Messages.list = data;
      MessagesView.createMessage(Messages.list.results);
      MessagesView.render();
      FriendsView.initialize();
    });
  },
  render: function() {
    let currentRoom = $('#rooms select option:selected').val()
    MessagesView.$chats.text('');
    if(MessagesView.dataArray[currentRoom] !== undefined){
      MessagesView.dataArray[currentRoom].forEach(function(message) {
        MessagesView.$chats.append(message);
      })
    }
  },
  createMessage: function(list) {
    for (let room of Rooms.roomList) {
      MessagesView.dataArray[room] = [];
    }
    for (let message of list) {
      if (message.username !== undefined && message.roomname !== undefined && message.text !== undefined) {
        let obj = {chatroom: message.roomname, username: message.username, message: message.text};
        MessagesView.dataArray[message.roomname].push(MessageView.render(obj));
      }
    }
  },
  displayFriends: function() {

  }

};