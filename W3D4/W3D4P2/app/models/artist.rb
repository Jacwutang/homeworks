class Artist < ApplicationRecord
  has_many :albums,
    class_name: 'Album',
    foreign_key: :artist_id,
    primary_key: :id

  def n_plus_one_tracks

    albums = self.albums
    tracks_count = {}
    albums.each do |album|
      #albums queries for track each iteration
      tracks_count[album.title] = album.tracks.length
    end

    tracks_count
  end

  def better_tracks_query
    # TODO: your code here
    # albums = self.albums.select('albums, Count(*) as track_count').
    # .joins(:tracks).group('albums.id')
    #
    # album_counts = {}
    #
    # albums.each do |album|
    #   album_counts[album.title] += 1
    # end
    #
    # album_counts
    albums = self.albums.includes(:tracks)
    tracks_count = {}
    albums.each do |album|
      #albums queries for track each iteration
      tracks_count[album.title] = album.tracks.length
    end

    tracks_count
  end
end
