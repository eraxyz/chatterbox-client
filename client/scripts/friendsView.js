var FriendsView = {

  initialize: function(){
    $('#friendDrop').on('change',function(){
      let friend = $('#friendDrop option:selected').html();
      $('#rooms select option:selected').text(friend);
      FriendsView.updateFriendsMessages();
    });
    
    FriendsView.addFriend();
  },
  option: _.template('<option value ="<%-friend%>"><%-friend%></option>'),
  render: function(){
    let currentRoom = $('#rooms select option:selected').val()
    MessagesView.$chats.text('');
    if(MessagesView.dataArray[currentRoom] !== undefined){
      MessagesView.dataArray[currentRoom].forEach(function(message) {
        MessagesView.$chats.append(message);
      })
    }
  },
  addFriend: function(){
    // $('.names').on('hover',()=>{})
    $('.username').on('click',function(e){
      e.preventDefault(); 
      Friends.toggleStatus();
      let name = $(this).html();
      console.log(name)
      if(window.confirm('Add friend ' + name + '?')){
        if(Friends.list[name] === undefined){ 
          $('#friendDrop').append(FriendsView.option({friend: name}));
          Friends.list[name] = [];
          for(let message of Messages.list.results){
            if(message['username'] === name){
              Friends.list[name].push(message);
            }
          }
        } else{
          window.alert('Friend is already added');
        }
      }
    })
  },
  updateFriendsMessages: function(){
    let friendName = $('#friendDrop option:selected').val()
    MessagesView.$chats.text('');
    if(Friends.list[friendName] !== undefined){
      Friends.list[friendName].forEach(function(message) {
        let messageDiv = FriendView.render({chatroom: message.roomname, username: message.username, message: message.text})
        MessagesView.$chats.append(messageDiv);
      })
    }
  },

}