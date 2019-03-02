var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  option: _.template(`<option value="<%-room%>"><%-room%></option>`),
  
  initialize: function() {
    // console.log(Messages.list);
    RoomsView.addRoom();
    
  },
  addRoom: function() {
    $('#rooms button').click(function() {
      Rooms.add();
      let newRoomName = prompt('Enter Room Name', 'Room Name');
      RoomsView.$select.append(RoomsView.option({room: newRoomName}));
      Rooms.roomList.push(newRoomName);
      RoomsView.render();
    });

  },
  
  render: function() {
    RoomsView.$select.on('change', ()=> {
      MessagesView.render();
      FriendsView.initialize();
      
    });
    RoomsView.$select.text('');
    for (let room of Rooms.roomList) {
      RoomsView.$select.append(RoomsView.option({room: room}));
    }
 
  },

  getRooms: function(list) {
    for (let message of list.results) {
      if (message.roomname !== undefined && !Rooms.roomList.includes(message.roomname)){
        Rooms.roomList.push(message.roomname);
      }
    }
  },
  renderRoom: function(name) {
    $('#rooms select').append(RoomsView.option({room: name}));
  }

};
