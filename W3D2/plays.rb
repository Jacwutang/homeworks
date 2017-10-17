require 'sqlite3'
require 'singleton'

class PlayDBConnection < SQLite3::Database
  include Singleton

  def initialize
    super('plays.db')
    self.type_translation = true
    self.results_as_hash = true
  end
end

class Play
  attr_accessor :title, :year, :playwright_id

  def self.all
    data = PlayDBConnection.instance.execute("SELECT * FROM plays")
    #returns a large hash

    data.map { |datum| Play.new(datum) }
    #returns an array
  end

  def self.find_by_title(title)
    play = PlayDBConnection.instance.execute(<<- SQL, title)
    SELECT
      *
    FROM
      plays
    WHERE
      title = ?
    SQL
    #play returns a hash
    return nil unless play.length > 0

    #pass in first element
    #array
    Play.new(play.first)

  end

  def self.find_by_playwright(name)
    playwright = Playwright.find_by_name(name)
    raise "didn't find playwright" unless playwright
    plays = PlayDBConnection.instance.execute(<<- SQL, playwright.id)
    SELECT
      *
    FROM
      plays
    WHERE
      playwright_id = ?
    SQL

    plays.map {|play| Play.new(play)}



  end


  def initialize(options)
    #if no hash provided, it goes in order through the array
    @id = options['id']
    @title = options['title']
    @year = options['year']
    @playwright_id = options['playwright_id']
  end

  def create
    raise "#{self} already in database" if @id
    PlayDBConnection.instance.execute(<<-SQL, @title, @year, @playwright_id)
      INSERT INTO
        plays (title, year, playwright_id)
      VALUES
        (?, ?, ?)
    SQL
    @id = PlayDBConnection.instance.last_insert_row_id
  end

  def update
    raise "#{self} not in database" unless @id
    PlayDBConnection.instance.execute(<<-SQL, @title, @year, @playwright_id, @id)
      UPDATE
        plays
      SET
        title = ?, year = ?, playwright_id = ?
      WHERE
        id = ?
    SQL
  end
end

Class Playwright
  def self.all


  end

  def self.find_by_name(name)


  end

  def new(options)
    @id = options['id']
    @name = options['name']
  end

  def get_updates

  end

  def get_plays


  end

  def create

  end

  def update

  end
