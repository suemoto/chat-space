json.content @message.content
json.group_id @message.group_id
json.user_id @message.user_id
json.created_at @message.created_at.strftime("%Y/%m/%d %H:%M")
json.updated_at @message.updated_at
json.image @message.image.url
json.user @message.user.name
json.id @message.id

