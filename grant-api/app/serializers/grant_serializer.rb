class GrantSerializer < ActiveModel::Serializer
  attributes :id, :grant_name, :grant_description, :foundation, :category
end
