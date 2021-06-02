---
search: false
---

# Ruby on Rails

:::warning Section under development The next section is under development and has not yet been revised. :::

The goal of this guide is to present a set of best practices and style prescriptions for Ruby on Rails 4 development. It's a complementary guide to the already existing community-driven [Ruby coding style guide](https://github.com/rubocop-hq/ruby-style-guide).

This Rails style guide recommends best practices so that real-world Rails programmers can write code that can be maintained by other real-world Rails programmers. A style guide that reflections real-world usage gets used, and a style guide that holds to an ideal that has been rejected by the people it is supposed to help risks not getting used at all - no matter how good it is.

The guide is separated into several sections of related rules. I've tried to add the rationale behind the rules (if it's omitted I've assumed it's pretty obvious).

I didn't come up with all the rules out of nowhere - they are mostly based on my extensive career as a professional software engineer, feedback and suggestions from members of the Rails community and various highly regarded Rails programming resources.


Configuration
=============

Config Initializers —
-------------------

Put custom initialization code in `config/initializers`. The code in initializers executes on application startup.

Gem Initializers —
----------------

Keep initialization code for each gem in a separate file with the same name as the gem, for example `carrierwave.rb`, `active_admin.rb`, etc.

Dev/Test/Prod Configs —
---------------------

Adjust accordingly the settings for development, test and production environment (in the corresponding files under `config/environments/`)

Mark additional assets for precompilation (if any):

``` ruby
# config/environments/production.rb
# Precompile additional assets (application.js, application.css,
#and all non-JS/CSS are already added)
config.assets.precompile += %w( rails_admin/rails_admin.css rails_admin/rails_admin.js )
```

App Config —
----------

Keep configuration that’s applicable to all environments in the `config/application.rb` file.

Load Rails Config Defaults —
--------------------------

When upgrading to a newer Rails version, your application’s configuration setting will remain on the previous version. To take advantage of the latest recommended Rails practices, the `config.load_defaults` setting should match your Rails version.

``` ruby
# good
config.load_defaults 6.1
```

Staging Like Prod —
-----------------

Avoid creating additional environment configurations than the defaults of `development`, `test` and `production`. If you need a production-like environment such as staging, use environment variables for configuration options.

YAML Config —
-----------

Keep any additional configuration in YAML files under the `config/` directory.

Since Rails 4.2 YAML configuration files can be easily loaded with the new `config_for` method:

``` ruby
Rails::Application.config_for(:yaml_file)
```

Routing
=======

Many Member Collection Routes —
------------------------

When you need to add more actions to a RESTful resource (do you really need them at all?) use `member` and `collection` routes.

``` ruby
# bad
get 'subscriptions/:id/unsubscribe'
resources :subscriptions

# good
resources :subscriptions do
  get 'unsubscribe', on: :member
end

# bad
get 'photos/search'
resources :photos

# good
resources :photos do
  get 'search', on: :collection
end
```

Many Member Collection Routes
-----------------------------

If you need to define multiple `member/collection` routes use the alternative block syntax.

``` ruby
resources :subscriptions do
  member do
    get 'unsubscribe'
    # more routes
  end
end

resources :photos do
  collection do
    get 'search'
    # more routes
  end
end
```

Nested Routes —
-------------

Use nested routes to express better the relationship between Active Record models.

``` ruby
class Post < ActiveRecord::Base
  has_many :comments
end

class Comment < ActiveRecord::class Post < ActiveRecord::Base
  has_many :comments
end

class Comment < ActiveRecord::Base
  belongs_to :post
end

# routes.rb
resources :posts do
  resources :comments
end
```

Shallow Routes —
--------------

If you need to nest routes more than 1 level deep then use the `shallow: true` option. This will save user from long URLs `posts/1/comments/5/versions/7/edit` and you from long URL helpers `edit_post_comment_version`.

``` ruby
resources :posts, shallow: true do
  resources :comments do
    resources :versions
  end
end
```

Namespaced Routes —
-----------------

Use namespaced routes to group related actions.

``` ruby
namespace :admin do
  # Directs /admin/products/* to Admin::namespace :admin do
  # Directs /admin/products/* to Admin::ProductsController
  # (app/controllers/admin/products_controller.rb)
  resources :products
end
```

No Wild Routes
--------------

Never use the legacy wild controller route. This route will make all actions in every controller accessible via GET Requests.

``` ruby
# very bad
match ':controller(/:action(/:id(.:format)))'
```

No Match Routes
---------------

Don’t use `match` to define any routes unless there is need to map multiple request types among `[:get, :post, :patch, :put, :delete]` to a single action using `:via` option.

Controllers
===========

Skinny Controllers —
------------------

Member Collection Routes —

One Method
----------

Each controller action should (ideally) invoke only one method other than an initial find or new.

Shared Instance Variables —
-------------------------

Minimize the number of instance variables passed between a controller and a view.

Lexically Scoped Action Filter
------------------------------

Controller actions specified in the option of Action Filter should be in lexical scope. The ActionFilter specified for an inherited action makes it difficult to understand the scope of its impact on that action.

``` ruby
# bad
class UsersController < ApplicationController
  before_action :require_login, only: :export
end

# good
class UsersController < ApplicationController
  before_action :require_login, only: :export

  def export
  end
end
```

Controllers: Rendering
======================

Inline Rendering —
----------------

Prefer using a template over inline rendering.

``` ruby
# very bad
class ProductsController < ApplicationController
  def index
    render inline: "<% products.each do |p| %><p><%= p.name %></p><% end %>", type: :erb
  end
end

# good
## app/views/products/index.html.erb
<%= render partial: 'product', collection: products %>

## app/views/products/_product.html.erb
<p><%= product.name %></p>
<p><%= product.price %></p>

## app/controllers/products_controller.rb
class ProductsController < ApplicationController
  def index
    render :index
  end
end
```

Plain Text Rendering —
--------------------

Prefer `render plain:`over `render text:`.

``` ruby
# bad - sets MIME type to `text/html`
...
render text: 'Ruby!' 'Ruby!'
...

# bad - requires explicit MIME type declaration
...
render text: render text: 'Ruby!', content_type: 'text/plain'
...

# good - short and precise
...
render plain: 'Ruby!'
```

HTTP Status Code Symbols —
------------------------

Prefer [corresponding symbols](https://gist.github.com/mlanett/a31c340b132ddefa9cca) to numeric HTTP status codes. They are meaningful and do not look like "magic" numbers for less known HTTP status codes.

``` ruby
# bad
...
render status: 403
...

# good
...
render status: :forbidden
...
```

Models
======

Model Classes —
-------------

Enter Non-active Record model classes freelance.

Meaningful Model Names —
----------------------

Name the models with meaningful (but short) names without abbreviations.

Non-ActiveRecord Models —
-----------------------

If you need objects that support ActiveCord-like behavior (like validations) without the database function, use `ActiveModel:: Model`.

``` ruby
class Message
  include ActiveModel::class Message
  include ActiveModel::Model

  attr_accessor :name, :email, :content, :priority

  validates :name, presence: true
  validates :email, format: { with: /\A[-a-z0-9_+\.]+\@([-a-z0-9]+\.)+[a-z0-9]{2,4}\z/i }
  validates :content, length: { maximum: 500 }
end
```

No Wild Routes —

``` ruby
class Message
  include ActiveModel::Model
  include ActiveModel::Attributes

  attribute :name, :string
  attribute :email, :string
  attribute :content, :string
  attribute :priority, :integer

  validates :name, presence: true
  validates :email, format: { with: /\A[-a-z0-9_+\.]+\@([-a-z0-9]+\.)+[a-z0-9]{2,4}\z/i }
  validates :content, length: { maximum: 500 }
endModel
  include ActiveModel::Attributes

  attribute :name, :string
  attribute :email, :string
  attribute :content, :string
  attribute :priority, :integer

  validates :name, presence: true
  validates :email, format: { with: /\A[-a-z0-9_+\.]+\@([-a-z0-9]+\.)+[a-z0-9]{2,4}\z/i }
  validates :content, length: { maximum: 500 }
end
```

Model Business Logic —
--------------------

Unless they have some mean in the business domain, don't put methods in your model that just format your data (like code generating HTML). These methods are most likely going to be called from the view layer only, so their place is in helpers. Keep your models for business logic and data-persistence only.

Models: Active Record
=====================

Keep Active Record Defaults —
---------------------------

No Match Routes —

``` ruby
# bad - don't do this if you can modify the schema
class Transaction < ActiveRecord::Base
  self.table_name = 'order'
  ...Base
  self.table_name = 'order'
  ...
end
```

Enums —
-----

Prefer using the hash syntax for `enum`. Array makes the database values implicit & any insertion/removal/rearrangement of values in the middle will most probably lead to broken code.

``` ruby
class Transaction < ActiveRecord::class Transaction < ActiveRecord::Base
  # bad - implicit values - ordering matters
  enum type: %i[credit debit]

  # good - explicit values - ordering does not matter
  enum type: {
    credit: 0,
    debit: 1
  }
end
```

Macro Style Methods —
-------------------

Group macro-style methods (`has_many`, `validates`, etc) in the beginning of the class definition.

``` ruby
class User < ActiveRecord::class User < ActiveRecord::Base
  # keep the default scope first (if any)
  default_scope { where(active: true) }

  # constants come up next
  COLORS = %w(red green blue)

  # afterwards we put attr related macros
  attr_accessor :formatted_date_of_birth

  attr_accessible :login, :first_name, :last_name, :email, :password

  # Rails 4+ enums after attr macros
  enum role: { user: 0, moderator: 1, admin: 2 }

  # followed by association macros
  belongs_to :country

  has_many :authentications, dependent: :destroy

  # and validation macros
  validates :email, presence: true
  validates :username, presence: true
  validates :username, uniqueness: { case_sensitive: false }
  validates :username, format: { with: /\A[A-Za-z][A-Za-z0-9._-]{2,19}\z/ }
  validates :password, format: { with: /\A\S{8,128}\z/, allow_nil: true }

  # next we have callbacks
  before_save :cook
  before_save :update_username_lower

  # other macros (like devise's) should be placed after the callbacks

  ...
end
```

`has_many :through`
-------------------

Prefer `has_many :through` to `has_and_belongs_to_many`. Using `has_many :through` allows additional attributes and validations on the join model.

``` ruby
# not so good - using has_and_belongs_to_many
class User < ActiveRecord::Base
  has_and_belongs_to_many :groups
end

class Group < ActiveRecord::Base
  has_and_belongs_to_many :users
end

# preferred way - using has_many :through
class User < ActiveRecord::Base
  has_many :memberships
  has_many :groups, through: :memberships
end

class Membership < ActiveRecord::Base
  belongs_to :user
  belongs_to :group
end

class Group < ActiveRecord::Base
  has_many :memberships
  has_many :users, through: :memberships
endBase
  has_and_belongs_to_many :groups
end

class Group < ActiveRecord::Base
  has_and_belongs_to_many :users
end

# preferred way - using has_many :through
class User < ActiveRecord::Base
  has_many :memberships
  has_many :groups, through: :memberships
end

class Membership < ActiveRecord::Base
  belongs_to :user
  belongs_to :group
end

class Group < ActiveRecord::Base
  has_many :memberships
  has_many :users, through: :memberships
end
```

Read Attribute —
--------------

One Method —

``` ruby
# bad
def amount
  read_attribute(:amount) * 100
end

# good
def amount
  self[:amount] * 100
end
```

Write Attribute —
---------------

Prefer `self [:attribute]`over `read_attribute (:attribute)`.

``` ruby
# bad
def amount
  write_attribute(:amount, 100)
end

# good
def amount
  self[:amount] = 100
end
```

New-style Validations —
---------------------

Always use the ["new-style" validations](http://thelucid.com/2010/01/08/sexy-validation-in-edge-rails-rails-3/).

``` ruby
# bad
validates_presence_of :email
validates_length_of :email, maximum: 100

# good
validates :email, presence: true, length: { maximum: 100 }
```

Custom Validation Methods —
-------------------------

When naming custom validation methods, adhere to the simple rules:

-   `validate :method_name` reads like a natural statement

-   the method name explains what it checks

-   the method is recognizable as a validation method by its name, not a predicate method

``` ruby
# good
validate :expiration_date_cannot_be_in_the_past
validate :discount_cannot_be_greater_than_total_value
validate :ensure_same_topic_is_chosen

# also good - explicit prefix
validate :validate_birthday_in_past
validate :validate_sufficient_quantity
validate :must_have_owner_with_no_other_items
validate :must_have_shipping_units

# bad
validate :birthday_in_past
validate :owner_has_no_other_items
```

Single-attribute Validations —
----------------------------

Lexically Scoped Action Filter —

``` ruby
# bad
validates :email, :password, presence: true
validates :email, length: { maximum: 100 }

# good
validates :email, presence: true, length: { maximum: 100 }
validates :password, presence: true
```

Custom Validator File —
---------------------

When a custom validation is used more than once or the validation is some regular expression mapping, create a custom validator file.

``` ruby
# bad
class Person
  validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }
end

# good
class EmailValidator < ActiveModel::EachValidator
  def validate_each(record, attribute, value)
    record.errors[attribute] << (options[:message] || 'is not a valid email') unless value =~ /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
  end
end

class Person
  validates :email, email: true
endEachValidator
  def validate_each(record, attribute, value)
    record.errors[attribute] << (options[:message] || 'is not a valid email') unless value =~ /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
  end
end

class Person
  validates :email, email: true
end
```

App Validators —
--------------

Keep custom validators under `app/validators`.

Custom Validators Gem
---------------------

Consider extracting custom validators to a shared gem if you're maintaining several related apps or the validators are generic enough.

Named Scopes —
------------

Use named scopes freely.

``` ruby
class User < ActiveRecord::class User < ActiveRecord::Base
  scope :active, -> { where(active: true) }
  scope :inactive, -> { where(active: false) }

  scope :with_orders, -> { joins(:orders).select('distinct(users.id)') }
end
```

Named Scope —
-----------------

When a named scope defined with a lambda and parameters become too complicated, it is preferable to make a class method instead which serves the same purpose of the named scope and returns an `ActiveRecord:: Relation` object. Arguably you can define even simpler scopes like this.

``` ruby
class User < ActiveRecord::class User < ActiveRecord::Base
  def self.with_orders
    joins(:orders).select('distinct(users.id)')
  end
end
```

Callbacks Order —
---------------

Order callback declarations in the order in which they will be executed. For reference, see [Available Callbacks](https://guides.rubyonrails.org/active_record_callbacks.html#available-callbacks).

``` Ruby
#bad
class Person
  after_commit :after_commit_callback
  before_validation :before_validation_callback
end

#good
class Person
  before_validation :before_validation_callback
  after_commit :after_commit_callback
end
```

Beware Skip Model Validations —
-----------------------------

Beware of the behavior of the [following](https://guides.rubyonrails.org/active_record_validations.html#skipping-validations) methods. They do not run the model validations and could easily corrupt the model state.

``` ruby
# bad
Article.first.decrement!(:view_count)
DiscussionBoard.decrement_counter(:post_count, 5)
Article.first.increment!(:view_count)
DiscussionBoard.increment_counter(:post_count, 5)
person.toggle :active
product.touch
Billing.update_all("category = 'authorized', author = 'David'")
user.update_attribute(:website, 'example.com')
user.update_columns(last_request_at: Time.current)
Post.update_counters 5, comment_count: -1, action_count: 1

# good
user.update_attributes(website: 'example.com')
```

User-friendly URLs —
------------------

Use user-friendly URLs. Show some descriptive attribute of the model in the URL rather than its `id`. There is more than one way to achieve this.

### Override the `to_param` Method of the Model

This method is used by Rails for constructing a URL to the object. The default implementation returns the `id` of the record as a String. It could be overridden to include another human-readable attribute.

``` ruby
class Person
  def to_param
    "#{id} #{name}".parameterize
  end
end
```

In order to convert this to a URL-friendly value, `parameterize` should be called on the string. The `id` of the object needs to be at the beginning so that it can be found by the `find` method of Active Record.

### `friendly_id` Gem

It allows creation of human-readable URLs by using some descriptive attribute of the model instead of its `id`.

``` ruby
class Person
  extend FriendlyId
  friendly_id :name, use: :slugged
end
```

Check the [gem documentation](https://github.com/norman/friendly_id) for more information about its usage.

`find_each`
-----------

Use `find_each` to iterate over a collection of AR objects. Looping through a collection of records from the database (using the `all` method, for example) is very inefficient since it will try to instantiate all the objects at once. In that case, batch processing methods allow you to work with the records in batches, thereby greatly reducing memory consumption.

``` ruby
# bad
Person.all.each do |person|
  person.do_awesome_stuff
end

Person.where('age > 21').each do |person|
  person.party_all_night! end

# good
Person.find_each do |person|
  person.do_awesome_stuff
end

Person.where('age > 21').find_each do |person|
  person.party_all_night! end
```

`before_destroy`
----------------

Since [Rails creates callbacks for dependent associations](https://github.com/rails/rails/issues/3458), always call `before_destroy` callbacks that perform validation with `prepend: true`.

``` ruby
# bad (roles will be deleted automatically even if super_admin? is true)
has_many :roles, dependent: :destroy

before_destroy :ensure_deletable

def ensure_deletable
  raise "Cannot delete super admin." if super_admin? end

# good
has_many :roles, dependent: :destroy

before_destroy :ensure_deletable, prepend: true

def ensure_deletable
  raise "Cannot delete super admin." if super_admin? if super_admin?
end
```

`has_many`/`has_one` Dependent Option
-------------------------------------

Define the `dependent` option to the `has_many` and `has_one` associations.

``` ruby
# bad
class Post < ActiveRecord::# bad
class Post < ActiveRecord::Base
  has_many :comments
end

# good
class Post < ActiveRecord::Base
  has_many :comments, dependent: :destroy
endBase
  has_many :comments, dependent: :destroy
end
```

`save!`
-------

When persisting AR objects always use the exception raising bang! method or handle the method return value. This applies to `create`, `save`, `update`, `destroy`, `first_or_create` and `find_or_create_by`.

``` ruby
# bad
user.create(name: 'Bruce')

# bad
user.save

# good
user.create!(name: 'Bruce')
# or
bruce = user.create(name: 'Bruce')
if bruce.persisted? ...
else
  ...
end

# good
user.save! # or
if user.save
  ...
else
  ...
end
```

Models: Active Record Queries
=============================

Avoid Interpolation —
-------------------

Avoid string interpolation in queries, as it will make your code susceptible to SQL injection attacks.

``` ruby
# bad - param will be interpolated unescaped
Client.where("orders_count = #{params[:orders]}")

# good - param will be properly escaped
Client.where('orders_count = ?', params[:orders])
```

Named Placeholder —
-----------------

Consider using named placeholders instead of positional placeholders when you have more than 1 placeholder in your query.

``` ruby
# okish
Client.where(
  'created_at >= ? AND created_at <= ?',
  params[:start_date], params[:end_date]
)

# good
Client.where(
  'created_at >= :start_date AND created_at <= :end_date',
  start_date: params[:start_date], end_date: params[:end_date]
)
```

`find`
------

Favor the use of `find` over `where.take!`, `find_by!`, and `find_by_id!` when you need to retrieve a single record by primary key id and raise `ActiveRecord::RecordNotFound` when the record is not found.

``` ruby
# bad
User.where(id: id).take! # bad
User.find_by_id!(id)

# bad
User.find_by!(id: id)

# good
User.find(id)
```

`find_by`
---------

Favor the use of `find_by` over `where.take` and `find_by_attribute` when you need to retrieve a single record by one or more attributes and return `nil` when the record is not found.

``` ruby
# bad
User.where(email: email).take
User.where(first_name: 'Bruce', last_name: 'Wayne').take

# bad
User.find_by_email(email)
User.find_by_first_name_and_last_name('Bruce', 'Wayne')

# good
User.find_by(email: email)
User.find_by(first_name: 'Bruce', last_name: 'Wayne')
```

Hash conditions —
---------------

Favor passing conditions to `where` and `where.not` as a hash over using fragments of SQL.

``` ruby
# bad
User.where("name = ?", name)

# good
User.where(name: name)

# bad
User.where("id != ?", id)

# good
User.where.not(id: id)
```

Order by `id`
-------------

Don’t use the `id` column for ordering. The sequence of ids is not guaranteed to be in any particular order, despite often (incidentally) being chronological. Use a timestamp column to order chronologically. As a bonus the intent is clearer.

``` ruby
# bad
scope :chronological, -> { order(id: :asc) }

# good
scope :chronological, -> { order(created_at: :asc) }
```

`pluck`
-------

Use [pluck](https://api.rubyonrails.org/classes/ActiveRecord/Calculations.html#method-i-pluck) to select a single value from multiple records.

``` ruby
# bad
User.all.map(&:name)

# bad
User.all.map { |user| user[:name] }

# good
User.pluck(:name)
```

`pick`
------

Use [pick](https://api.rubyonrails.org/classes/ActiveRecord/Calculations.html#method-i-pick) to select a single value from a single record.

``` ruby
# bad
User.pluck(:name).first

# bad
User.first.name

# good
User.pick(:name)
```

`ids`
-----

Favor the use of `ids` over `pluck(:id)`.

``` Ruby
# bad
User.pluck(:id)

# good
User.ids
```

Squished Heredocs
-----------------

When specifying an explicit query in a method such as `find_by_sql`, use heredocs with `squish`. This allows you to legibly format the SQL with line breaks and indentations, while supporting syntax highlighting in many tools (including GitHub, Atom, and RubyMine).

``` ruby
User.find_by_sql(<<-SQL.squish)
  SELECT
    users.id, accounts.plan
  FROM
    users
  INNER JOIN
    accounts
  ON
    accounts.user_id = users.id
  # further complexities...
SQL
```

Prefer `self [:attribute] = value` over `write_attribute (:attribute, value)`.

    SELECT\ n users.id, accounts.plan\ n FROM\ n users\ n INNER JOIN\ n acounts\ n ON\ n accounts.user_id = users.id

`size` over `count` or `length`
-------------------------------

When querying Active Record collections, prefer `size` (selects between count/length behavior based on whether collection is already loaded) or `length` (always loads the whole collection and counts the array elements) over `count` (always does a database query for the count).

``` ruby
# bad
User.count

# good
User.all.size

# good - if you really need to load all users into memory
User.all.length
```

Migrations
==========

Schema Version
--------------

Keep the `schema.rb` (or `structure.sql`) under version control.

DB Schema Load —
--------------

Use `rake db:schema:load` instead of `rake db:migrate` to initialize an empty database.

Default Migration Values —
------------------------

Enforce default values in the migrations themselves instead of in the application layer.

``` ruby
# bad - application enforced default value
class Product < ActiveRecord::# bad - application enforced default value
class Product < ActiveRecord::Base
  def amount
    self[:amount] || 0
  end
end

# good - database enforced
class AddDefaultAmountToProducts < ActiveRecord::Migration
  def change
    change_column_default :products, :amount, 0
  end
endMigration
  def change
    change_column_default :products, :amount, 0
  end
end
```

While enforcing table defaults only in Rails is suggested by many Rails developers, it's an extremely brittle approach that leaves your vulnerable data to many application bugs. And you'll have to consider the fact that most non-trivial apps share a database with other applications, so imposing data integrity from the Rails app is impossible.

3-state Boolean —
---------------

With SQL databases, if a boolean column is not given a default value, it will have three possible values: `true`, `false` and `NULL`. Boolean operators \[work in unexpected ways\](<https://en.wikipedia.org/wiki/Three-valued_logic>) with `NULL`.

For example in SQL queries, `true AND NULL` is `NULL` (not false), `true AND NULL OR false` is `NULL` (not false). This can make SQL queries return unexpected results.

To avoid such situations, boolean columns should always have a default value and a `NOT NULL` constraint.

``` ruby
# bad - boolean without a default value
add_column :users, :active, :boolean

# good - boolean with a default value (`false` or `true`) and with restricted `NULL`
add_column :users, :active, :boolean, default: true, null: false
add_column :users, :admin, :boolean, default: false, null: false
```

Foreign Key Constraints —
-----------------------

Enforce foreign-key constraints. As of Rails 4.2, Active Record supports foreign key constraints natively.

Change vs Up/Down
-----------------

When writing constructive migrations (adding tables or columns), use the `change` method instead of `up` and `down` methods.

``` ruby
# the old way
class AddNameToPeople < ActiveRecord::# the old way
class AddNameToPeople < ActiveRecord::Migration
  def up
    add_column :people, :name, :string
  end

  def down
    remove_column :people, :name
  end
end

# the new preferred way
class AddNameToPeople < ActiveRecord::Migration
  def change
    add_column :people, :name, :string
  end
endMigration
  def change
    add_column :people, :name, :string
  end
end
```

Define Model Class Migrations —
-----------------------------

Custom Validators Gem —

``` ruby
# db/migrate/<migration_file_name>.rb
# frozen_string_literal: true

# bad
class ModifyDefaultStatusForProducts < ActiveRecord::Migration
  def change
    old_status = 'pending_manual_approval'
    new_status = 'pending_approval'

    reversible do |dir|
      dir.up do
        Product.where(status: old_status).update_all(status: new_status)
        change_column :products, :status, :string, default: new_status
      end

      dir.down do
        Product.where(status: new_status).update_all(status: old_status)
        change_column :products, :status, :string, default: old_status
      end
    end
  end
end

# good
# Define `table_name` in a custom named class to make sure that you run on the
# same table you had during the creation of the migration.class MigrationProduct < ActiveRecord::Base
  self.table_name = :products
end

class ModifyDefaultStatusForProducts < ActiveRecord::Migration
  def change
    old_status = 'pending_manual_approval'
    new_status = 'pending_approval'

    reversible do |dir|
      dir.up do
        MigrationProduct.where(status: old_status).update_all(status: new_status)
        change_column :products, :status, :string, default: new_status
      end

      dir.down do
        MigrationProduct.where(status: new_status).update_all(status: old_status)
        change_column :products, :status, :string, default: old_status
      end
    end
  end
end
# In future if you override the `Product` class and change the `table_name`,
# it won't break the migration or cause serious data corruption.
class MigrationProduct < ActiveRecord::Base
  self.table_name = :products
end

class ModifyDefaultStatusForProducts < ActiveRecord::Migration
  def change
    old_status = 'pending_manual_approval'
    new_status = 'pending_approval'

    reversible do |dir|
      dir.up do
        MigrationProduct.where(status: old_status).update_all(status: new_status)
        change_column :products, :status, :string, default: new_status
      end

      dir.down do
        MigrationProduct.where(status: new_status).update_all(status: old_status)
        change_column :products, :status, :string, default: old_status
      end
    end
  end
end
```

Meaningful Foreign Key Naming —
-----------------------------

Name your foreign keys explicitly instead of relying on Rails auto-generated FK names. ([https://guides.rubyonrails.org/active_record_migrations.html#foreign-keys](https://guides.rubyonrails.org/active_record_migrations.html#foreign-keys))

``` ruby
# bad
class AddFkArticlesToAuthors < ActiveRecord::# bad
class AddFkArticlesToAuthors < ActiveRecord::Migration
  def change
    add_foreign_key :articles, :authors
  end
end

# good
class AddFkArticlesToAuthors < ActiveRecord::Migration
  def change
    add_foreign_key :articles, :authors, name: :articles_author_id_fk
  end
endMigration
  def change
    add_foreign_key :articles, :authors, name: :articles_author_id_fk
  end
end
```

Reversible Migration —
--------------------

Don't use non-reversible migration commands in the `change` method. Reversible migration commands are listed below. [ActiveRecord::Migration::CommandRecorder](https://api.rubyonrails.org/classes/ActiveRecord/Migration/CommandRecorder.html)

``` ruby
# bad
class DropUsers < ActiveRecord::Migration
  def change
    drop_table :users
  end
end

# good
class DropUsers < ActiveRecord::# bad
class DropUsers < ActiveRecord::Migration
  def change
    drop_table :users
  end
end

# good
class DropUsers < ActiveRecord::Migration
  def up
    drop_table :users
  end

  def down
    create_table :users do |t|
      t.string :name
    end
  end
end

# good
# In this case, block will be used by create_table in rollback
# https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters.html#method-i-drop_table
class DropUsers < ActiveRecord::Migration
  def change
    drop_table :users do |t|
      t.string :name
    end
  end
endMigration
  def change
    drop_table :users do |t|
      t.string :name
    end
  end
end
```

Views
=====

No Direct Model View —
--------------------

Never call the model layer directly from a view.

No Complex View Formatting —
--------------------------

Avoid complex formatting in the views. A view helper is useful for simple cases, but if it's more complex then consider using a decorator or presenter.

Partials —
--------

Mitigate code duplication by using partial templates and layouts.

No Instance Variables in Partials —
---------------------------------

Avoid using instance variables in partials, pass a local variable to `render` instead. The partial may be used in a different controller or action, where the variable can have a different name or even be absent. In these cases, an undefined instance variable will not raise an exception whereas a local variable will.

``` erb
<!-- bad -->
<!-- app/views/courses/show.html.erb -->
<%= render 'course_description' %>
<!-- app/views/courses/_course_description.html.erb -->
<%= @course.description %>

<!-- good -->
<!-- app/views/courses/show.html.erb -->
<%= render 'course_description', course: @course %>
<!-- app/views/courses/_course_description.html.erb -->
<%= course.description %>
```

Internationalization
====================

Locale Texts —
------------

No strings or other locale specific settings should be used in the views, models and controllers. These texts should be moved to the locale files in the `config/locales` directory.

Translated Labels —
-----------------

When the labels of an Active Record model need to be translated, use the `activerecord` scope:

    en:
      activerecord:
        models:
          user: activerecord:
     models:
     user: Member
     attributes:
     user:
     name: 'Full name'

Then `User.Model_Name.Human` will return "Member" and `User.Human_Attribute_Name ("name")`will return "Full name". These translations of the attributes will be used as labels in the views.

Organize Locale Files —
---------------------

Separate the texts used in the views from translations of Active Record attributes. Place the locale files for the models in a folder `locales/models` and the texts used in the views in folder `locales/views`.

When organization of the locale files is done with additional directories, these directories must be described in the `application.rb` file in order to be loaded.

``` ruby
# config/application.rb
config.i18n.load_path += Dir[Rails.root.join('config', 'locales', '**', '*.{rb,yml}')]
```

Shared Location —
-------------------

Place the shared localization options, such as date or currency formats, in files under the root of the `locales` directory.

Short I18n —
----------

Use the short form of the I18n methods: `I18n.t` instead of `I18n.translate` and `I18n.l` instead of `I18n.localize`.

Lazy —
-----------

Use "lazy" lookup for the texts used in views. Let's say we have the following structure:

    users:
     show:
     title: 'User details page' 'User details page'

The value for `users.show.title` can be looked up in the template `app/views/users/show.html.haml` like this:

``` ruby
= t '.title'
```

Dot-Separated Keys —
------------------

Use the dot-separated keys in the controllers and models instead of specifying the `:scope` option. The dot-separated call is easier to read and trace the hierarchy.

``` ruby
# bad
I18n.t :record_invalid, scope: [:activerecord, :errors, :messages]

# good
I18n.t 'activerecord.errors.messages.record_invalid'
```

I18n Guides —
-----------

More detailed information about the Rails i18N can be found in the [Rails Guides](https://guides.rubyonrails.org/i18n.html)

Assets
======

Use the [asset pipeline](https://guides.rubyonrails.org/asset_pipeline.html) to leverage organization within your application.

Reserve `app/assets`
--------------------

Reserve `app/assets` for custom stylesheets, javascripts, or images.

`lib/assets`
------------

Use `lib/assets` for your own libraries that don’t really fit into the scope of the application.

`vendor/assets`
---------------

Third party code such as [jQuery](https://jquery.com/) or [bootstrap](https://twitter.github.com/bootstrap/) should be placed in `vendor/assets`.

`gem/assets`
------------

When possible, use gemified versions of assets (e.g. When possible, use gemified versions of assets (e.g. [jquery-rails](https://github.com/rails/jquery-rails), [jquery-ui-rails](https://github.com/joliss/jquery-ui-rails), [bootstrap-sass](https://github.com/thomas-mcdonald/bootstrap-sass), [zurb-foundation](https://github.com/zurb/foundation)).

Mailers
=======

Mailer —
-----------

Name the mailers `SomethingMailer`. Without the Mailer suffix it isn't immediately apparent what's a mailer and which views are related to the mailer.

HTML Plain Email —
----------------

Provide both HTML and plain-text view templates.

Enable Delivery Errors —
----------------------

Enable errors raised on failed mail delivery in your development environment. The errors are disabled by default.

``` ruby
# config/environments/development.rb

config.action_mailer.raise_delivery_errors = true
```

Local SMTP —
----------

Use local SMTP server like [Mailcatcher](https://github.com/sj26/mailcatcher) in development environment.

``` ruby
# config/environments/development.rb

config.action_mailer.smtp_settings = {
  address: 'localhost',
  port: 1025,
  # more settings
}
```

Default Hostname —
----------------

Provide default settings for the host name.

``` ruby
# config/environments/development.rb
config.action_mailer.default_url_options = { host: "#{local_ip}:3000" }

# config/environments/production.rb
config.action_mailer.default_url_options = { host: 'your_site.com' }

# in your mailer class
default_url_options[:host] = 'your_site.com'
```

Email Addresses —
---------------

Format the from and to addresses properly. Use the following format:

``` ruby
# in your mailer class
default from: 'Your Name <info@your_site.com>' 'Your Name <info@your_site.com>'
```

Delivery Method —
--------------------

Make sure that the e-mail delivery method for your test environment is set to `test`:

``` ruby
# config/environments/test.rb

config.action_mailer.delivery_method = :test
```

SMTP Delivery Method —
--------------------

The delivery method for development and production should be `smtp`:

``` ruby
# config/environments/development.rb, config/environments/production.rb

config.action_mailer.delivery_method = :smtp
```

Inline Email Styles —
-------------------

When sending html emails all styles should be inline, as some mail clients have problems with external styles. This however makes them harder to maintain and leads to code duplication. There are two similar gems that transform the styles and put them in the corresponding html tags: [premailer-rails](https://github.com/fphilipe/premailer-rails) and [roadie](https://github.com/Mange/roadie).

Background Email —
----------------

Sending emails while generating page response should be avoided. It causes delays in loading of the page and request can timeout if multiple email is sent. To overcome this emails can be sent in background process with the help of [sidekiq](https://github.com/mperham/sidekiq) gem.

Active Support Core Extensions
==============================

`try!`
------

Squished Heredocs —

``` ruby
# bad
obj.try! :fly

# good
obj&.fly
```

Active Support Aliases —
----------------------

Prefer Ruby’s Standard Library methods over `ActiveSupport` aliases.

``` ruby
# bad
'the day'.starts_with? 'th'
'the day'.ends_with? 'ay'

# good
'the day'.start_with? 'th'
'the day'.end_with? 'ay'
```

Active Support Extensions —
-------------------------

[`String #squish`](https://api.rubyonrails.org/classes/String.html#method-i-squish) remove the indentation and newline characters so that your server log shows a fluid string of SQL rather than something like this:

``` ruby
# bad
(1..50).to_a.forty_two
1.in? [1, 2]
'day'.in? 'the day'

# good
(1..50).to_a[41]
[1, 2].include? 1
'the day'.include? 'day'
```

`inquiry`
---------

Prefer Ruby's comparison operators over Active Support's `Array #inquiry`, and `String #inquiry`.

``` ruby
# bad - String#inquiry
ruby = 'two'.inquiry
ruby.two? # good
ruby = 'two'
ruby == 'two'

# bad - Array#inquiry
pets = %w(cat dog).inquiry
pets.gopher? # good
pets = %w(cat dog)
pets.include? 'cat'
```

`exclude?`
----------

Schema Version —

``` ruby
# bad
!array.include?(2)
!hash.include?(:key)
!string.include?('substring')

# good
array.exclude?(2)
hash.exclude?(:key)
string.exclude?('substring')
```

Time
====

Time Zone Config —
----------------

Configure your timezone accordingly in `application.rb`.

``` ruby
config.time_zone = 'Eastern European Time'
# optional - note it can be only :utc or :local (default is :utc)
config.active_record.default_timezone = :local
```

`Time.parse`
------------

Don’t use `Time.parse`.

``` ruby
# bad
Time.parse('2015-03-02 19:05:37') # => Will assume time string given is in the system's time zone.

# good
Time.zone.parse('2015-03-02 19:05:37') # => Mon, 02 Mar 2015 19:05:37 EET +02:00
```

`to_time`
---------

Don't use [`String #to_time`](https://api.rubyonrails.org/classes/String.html#method-i-to_time)

``` ruby
# bad - assumes time string given is in the system's time zone.
'2015-03-02 19:05:37'.to_time

# good
Time.zone.parse('2015-03-02 19:05:37') # => Mon, 02 Mar 2015 19:05:37 EET +02:00
```

`<code>Time.Now` —</code>
----------

Don’t use `Time.now`.

``` ruby
# bad
Time.now # => Returns system time and ignores your configured time zone.

# good
Time.zone.now # => Fri, 12 Mar 2014 22:04:47 EET +02:00
Time.current # Same thing but shorter.
```

Duration
========

If used without a parameter, prefer `from_now` and `ago` instead of `since`, `after`, `until` or `before`.

``` ruby
# bad - It's not clear that the qualifier refers to the current time (which is the default parameter)
5.hours.since
5.hours.after
5.hours.before
5.hours.until

# good
5.hours.from_now
5.hours.ago
```

If used with a parameter, prefer `since`, `after`, `until` or `before` instead of `from_now` and `ago`.

``` ruby
# bad - It's confusing and misleading to read
2.days.from_now(yesterday)
2.days.ago(yesterday)

# good
2.days.since(yesterday)
2.days.after(yesterday)
2.days.before(yesterday)
2.days.until(yesterday)
```

Avoid using negative numbers for the duration subject. Always prefer using a qualifier that allows using positive literal numbers.

``` ruby
# bad - It's confusing and misleading to read
-5.hours.from_now
-5.hours.ago

# good
5.hours.ago
5.hours.from_now
```

Bundler
=======

Dev/Test Gems —
-------------

Put gems used only for development or testing in the appropriate group in the Gemfile.

Only Good Gems —
--------------

Use only established gems in your projects. If you're contemplating on including some little-known gem you should do a careful review of its source code first.

OS-specific `Gemfile.lock`
--------------------------

OS-specific gems will by default result in a constantly changing `Gemfile.lock` for projects with multiple developers using different operating systems. Add all OS X specific gems to a `darwin` group in the Gemfile, and all Linux specific gems to a `linux` group:

``` ruby
# Gemfile
group :darwin do
  gem 'rb-fsevent'
  gem 'growl'
end

group :linux do
  gem 'rb-inotify'
end
```

To require the appropriate gems in the right environment, add the following to `config/application.rb`:

``` ruby
platform = RUBY_PLATFORM.match(/(linux|darwin)/)[0].to_sym
Bundler.require(platform)
```

`Gemfile.lock`
--------------

Do not remove the `Gemfile.lock` from version control. This is not some randomly generated file - it makes sure that all of your team members get the same gem versions when they do a `bundle install`.

Managing Processes
==================

Foreman's Info —
-------

Change vs Up/Down —