class User < ApplicationRecord
  acts_as_token_authenticatable

  validates :username, uniqueness: true, presence: true 
  validates_uniqueness_of :username, case_sensitive: false

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  after_initialize :init
  # before_create :set_role, :if => lambda { |user| user.user_role.nil? }

  # after_create :notify
  # def notify
  #   # send notification from controller not model, for example: test or console 
  #   UserMailer.send_new_user_message(self).deliver
  # end

  def init
    # set defaults with ||= except boolean
    self.user_role = true if self.user_role.nil?
    self.admin_role = false if self.admin_role.nil?
    self.supervisor_role = false if self.supervisor_role.nil?
  end

  def generate_new_authentication_token
    token = User.generate_unique_secure_token
    update_attributes authentication_token: token
  end


end
