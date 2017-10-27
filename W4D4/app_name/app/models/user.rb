class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  validates :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: {message: "Password can't be blank"}
  validates :password, length: {minimum: 6, allow_nil: true}
  before_validation :ensure_session_token

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    #find username by username
    #load up password_digest
    #password_digest =  hash without salt
    return user if user && BCrypt::Password.new(user.password_digest).is_password?(password)
    nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token!
      #assigns new session_token
      self.session_token = User.generate_session_token
      self.save!

      #returns that
      self.session_token
  end

  def ensure_session_token
    if self.session_token.nil?
      self.session_token = User.generate_session_token
    end

  end

  def password=(password)
    #sets password to instance variables so that validation can occur
    #password isn't saved to db

    @password = password
    self.password_digest = BCrypt::Password.create(password)



  end






end




# Validate the presence of username and session_token
# Validate the presence of password_digest and set the error message to Password can't be blank
# Validate the length of password, and set allow_nil to true
# Make sure that ensure_session_token gets called before_validation
