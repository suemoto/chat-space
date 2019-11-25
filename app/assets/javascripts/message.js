
$(function(){
  // let last_message_id = $('.contents:last').data('message-id')
  // console.log(last_message_id);
  function buildHTML(message){
    img = (message.image)? `<img class="lower-message__image" src=${message.image} >`: "";
    // let content = message.content? `<p class="contents__message__content">${message.content}</p>`: "";
    let html = `
                <div class="contents" data-message-id= ${message.id}>
                  <div class="contents__block">
                    <div class="contents__block__user">
                      ${message.user_name}
                    </div>
                    <div class="contents__block__date">
                      ${message.created_at}
                    </div>
                    </div>
                    <div class="contents__message">
                    <p class="contents__message__content">
                    ${message.content}
                    </p>
                     
                    </div>
                      ${img}

                  </div>
                </div>`           
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault()

    let formdata = new FormData(this);
    let url = $(this).attr('action')

    $.ajax({
      url: url,
      type: 'POST',
      data: formdata,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){

      let html = buildHTML(data);
      $('.chat').append(html);
      $('.new_message')[0].reset();
      $('.form__submit').prop('disabled', false);
      $('.chat').animate({scrollTop:$('.chat')[0].scrollHeight});
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
  });
  })
  var reloadMessages = function(message) {
    if (window.location.href.match(/\/groups\/\d+\/messages/)){
    //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
    
      last_message_id = $('.contents:last').data('message-id')
      console.log(last_message_id)
      group_id = $('.group-member__group').data('group-id')
      $.ajax({
        url: "api/messages",
        type: 'get',
        dataType: 'json',
        data: {id: last_message_id}
        // processData: false,
        // contentType: false
      })
      .done(function(messages) {

        console.log('success');
        var insertHTML = '';
        messages.forEach(function(message){
          insertHTML = buildHTML(message); 
          $('.chat').append(insertHTML)
          $('.chat').animate({scrollTop: $('.chat')[0].scrollHeight}, 'fast');
        })
        
        

      })
      
      .fail(function() {         
      });
    }
  };
  setInterval(reloadMessages, 7000);
});
