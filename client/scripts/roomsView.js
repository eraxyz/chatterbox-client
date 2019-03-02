var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // console.log(Messages.list);
    
  },

  render: function() {
    RoomsView.$select.on('change',()=> {
      MessagesView.render();
      FriendsView.initialize();
    })
    var option = _.template(`<option value="<%-room%>"><%-room%></option>`);
    RoomsView.$select.text('');
    for (let room of Rooms.roomList) {
      RoomsView.$select.append(option({room:room}));
    }
    $('#rooms button').click(function(){
      let newRoomName = prompt("Enter Room Name","Room Name");
      RoomsView.$select.append(option({room:newRoomName}));
      Rooms.roomList.push(newRoomName)
    })
  },

  getRooms: function(list){
    for(let message of list.results){
      if(message.roomname !== undefined && !Rooms.roomList.includes(message.roomname)){
        Rooms.roomList.push(message.roomname);
      }
    }
  }

};
