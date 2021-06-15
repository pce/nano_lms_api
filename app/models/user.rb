class User < ApplicationRecord
  acts_as_token_authenticatable

  validates :username, uniqueness: true, presence: true 
  validates_uniqueness_of :username, case_sensitive: false

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  def generate_new_authentication_token
    token = User.generate_unique_secure_token
    update_attributes authentication_token: token
  end

end
