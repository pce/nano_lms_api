# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(user)

    user ||= User.new # guest user (not logged in)
    if user.admin_role?
      can :manage, :all
    else
      can :read, :all
    end
    if user.supervisor_role?
      can :manage, [User, Course, Event]
    end

  end
end
