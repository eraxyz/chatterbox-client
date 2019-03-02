var FriendsView = {

  initialize: function(){
    $('#friendDrop').on('change',function(){
      let friend = $('#friendDrop option:selected').val('asdf');
      $('#rooms select option:selected').text(friend);
      
    });
    
    FriendsView.addFriend();
  },
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
    $('.names').on('click',function(e){
      e.preventDefault(); 
      let name = $(this).html();
      console.log(name)
      if(window.confirm('Add friend ' + name + '?')){
        if(Friends.list[name] === undefined){
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

  },

}