var MessageView = {

  render: _.template(`
      <div class="<%-roomname%>">
        <div class="username <%-username%>"><%-username%></div>
        <div class="<%-username%>"><%-message%></div>
        
      </div>
    `)

};