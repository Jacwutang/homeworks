class UserMailer < ApplicationMailer
  default from: 'from@examples.com'


  def welcome_email(user)
      @user = user

      mail(to: user.email, subject: 'Welcome')

  end

end
