
$(function(){
  last_message_id = $('.contents__message__content').last(1);
  console.log(last_message_id);
  function buildHTML(message){
    let img = message.image? `<img class="lower-message__image" src="${message.image}" alt= "test image">`: "";
    let content = message.content? `<p class="contents__message__content">${message.content}</p>`: "";
    let html = `<div class="contents">
                  <div class="contents__block">
                    <div class="contents__block__user">
                      ${message.user}
                    </div>
                    <div class="contents__block__date">
                      ${message.created_at}
                    </div>
                    </div>
                    <div class="contents__message">
                      ${content}
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
});
