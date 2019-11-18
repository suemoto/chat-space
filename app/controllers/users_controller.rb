class UsersController < ApplicationController
  def index
    
  end
  def new
  end

  def create
  end    


  def edit
    
  end

  def update
    if current_user.update(user_params)
      redirect_to root_path
    else 
      render :edit
    end    
  end

  def user_params
    params.requier(:user).permit(:name, :email)
  end  
end
