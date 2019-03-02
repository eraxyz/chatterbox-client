var FriendView = {
  render: _.template(`
      <div class="<%-chatroom%>">
        <div class="names <%-chatroom%>"><%-chatroom%></div>
        <div class="<%-username%>"><%-message%></div>
        
      </div>
    `)
};