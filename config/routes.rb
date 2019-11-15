Rails.application.routes.draw do
  devise_for :users
  root to: "messages#index"
  resourses :users, only:[edit, update] do
  end  
end
