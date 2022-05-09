class Robot < ApplicationRecord
  include PgSearch

  pg_search_scope :search_by_term, against: [:name, :title, :email, :city, :address],
    using: {
      tsearch: {
        any_word: true,
        prefix: true
      }
    }
end
