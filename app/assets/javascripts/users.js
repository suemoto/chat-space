// $(function() {
//   function addUser(user) {
//     let add_html = `
//       <div class="chat-group-user clearfix">
//         <p class="chat-group-user__name">${user.name}</p>
//         <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
//       </div>
//     `;
//     $("#user-search-result").append(add_html);
//   }

//   function addNoUser() {
//     let html = `
//       <div class="chat-group-user clearfix">
//         <p class="chat-group-user__name">ユーザーが見つかりません</p>
//       </div>
//     `;
//     $("#user-search-result").append(html);
//   }
//   function addDeleteUser(name, id) {
//     let html = `
//     <div class="ChatMember clearfix" id="${id}">
//       <p class="ChatMember__name">${name}</p>
//       <div class="ChatMember__remove ChatMember__button" data-user-id="${id}" data-user-name="${name}">削除</div>
//     </div>`;
//     $(".ChatMembers").append(html);
//   }
  
//   function  (引数１(userのname), 引数２(userのid)){
//     var html = `
//             <div class='chat-group-user'>
//               <input name='group[user_ids][]' type='hidden' value='ユーザーのid'>  //この記述によりuserがDBに保存される
//               <p class='chat-group-user__name'>ユーザー名</p>
//               <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
//             </div>
//             `
//     $(".chat-group-user").append(html)
//   }

//   $("#user-search-field").on("keyup", function() {
//     console.log("ooo")
//     let input = $("#user-search-field").val();
//     $.ajax({
//       type: "GET",
//       url: "/users",
//       data: { keyword: input },
//       dataType: "json"
//     })
//       .done(function(users) {
//         $("#user-search-result").empty();

//         if (users.length !== 0) {
//           users.forEach(function(user) {
//             addUser(user);
//           });
//         } else if (input.length == 0) {
//           return false;
//         } else {
//           addNoUser();
//         }
//       })
//       .fail(function() {
//         alert("通信エラーです。ユーザーが表示できません。");
//       });
//   });
//   $("#user-search-result").on("click",".chat-group-user", function(){
//     console.log("イベント")
//     e.preventDefault();
    
  //   var formData = new FormData(this);
  //   var url = $(this).attr('action')
  //   $.ajax({
  //     url: url,
  //     type: "POST",
  //     data: "url",
  //     dataType: 'json',
  //     processData: false,
  //     contentType: false
  //   })
  //   .done(function(data){
  //     addDeleteUser(dat)
  // })
// });

// $(function(){
//   function appendUser(user) {
//     let match_html =`
//                       <div class="chat-group-user clearfix">
//                         <p class="chat-group-user__name">${user.name}</p>
//                         <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
//                       </div>
//                       `;  
//     $("#user_search_result").append(match_html);    
//   }

//   function addNoUser(){
//     let error_html =`
//                       <div class="chat-group-user clearfix">
//                       <p class="chat-group-user__name">ユーザーが見つかりません</p>
//                     </div>
//                     `;
//     $("#user_search_result").append(error_html);
//   }

//   function addDeleteUser(name, id) {
//     let delete_html = `
//     <div class="ChatMember clearfix" id="${id}">
//       <p class="ChatMember__name">${name}</p>
//       <div class="ChatMember__remove ChatMember__button" data-user-id="${id}" data-user-name="${name}">削除</div>
//     </div>`;
//     $(".ChatMembers").append(delete_html);
//   }

//   $("#user-search-field").on("keyup", function(){
//     let input = $("#user-search-field").val();
//     $.ajax({
//       type: "GET",
//       url: "/users",
//       data: {keyword: input},
//       dataType: "json"
//     })   
//       .done(function(users){  
//         $("#user_search_result").empty();

//         if (users.length !== 0) {
//           users.forEach(function(user){
//             appendUser(user);
//           });
//         }else if (input.length == 0) {
//           return false; 
//         }else {
//           addNoUser();
//         }   
//       })
//       .fail(function(){
//         alert("error");
//       });
//   });
  
// });



$(function() {
  function addUser(user) {
    let html = `
      <div class="chat-group-user clearfix">
        <p class="chat-group-user__name">${user.name}</p>
        <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
      </div>
    `;
    $("#user-search-result").append(html);
  }

  function addNoUser() {
    let html = `
      <div class="chat-group-user clearfix">
        <p class="chat-group-user__name">ユーザーが見つかりません</p>
      </div>
    `;
    $("#user-search-result").append(html);
  }
  function addDeleteUser(name, id) {
    let html = `
    <div class="chat-group-user clearfix" id="${id}">
      <p class="chat-group-user__name">${name}</p>
      <div class="user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn" data-user-id="${id}" data-user-name="${name}">削除</div>
    </div>`;
    $(".js-add-user").append(html);
  }
  function addMember(userId) {
    let html = `<input value="${userId}" name="group[user_ids][]" type="hidden" id="group_user_ids_${userId}" />`;
    $(`#${userId}`).append(html);
  }
  $("#user-search-field").on("keyup", function() {
    let input = $("#user-search-field").val();
    $.ajax({
      type: "GET",
      url: "/users",
      data: { keyword: input },
      dataType: "json"
    })
      .done(function(users) {
        $("#user-search-result").empty();

        if (users.length !== 0) {
          users.forEach(function(user) {
            addUser(user);
          });
        } else if (input.length == 0) {
          return false;
        } else {
          addNoUser();
        }
      })
      .fail(function() {
        alert("通信エラーです。ユーザーが表示できません。");
      });
  });
  $(document).on("click", ".chat-group-user__btn--add", function() {

    const userName = $(this).attr("data-user-name");
    const userId = $(this).attr("data-user-id");
    $(this)
      .parent()
      .remove();
    addDeleteUser(userName, userId);
    addMember(userId);
  });
  $(document).on("click", ".chat-group-user__btn--remove", function() {
    $(this)
      .parent()
      .remove();
  });
});