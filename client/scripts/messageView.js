var MessageView = {

  render: _.template(`
      <div class="<%-chatroom%>">
        <div class="names <%-username%>"><%-username%></div>
        <div class="<%-username%>"><%-message%></div>
        
      </div>
    `)

};