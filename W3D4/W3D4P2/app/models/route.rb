class Route < ApplicationRecord
  has_many :buses,
    class_name: 'Bus',
    foreign_key: :route_id,
    primary_key: :id

  def n_plus_one_drivers
    buses = self.buses

    all_drivers = {}
    buses.each do |bus|
      drivers = []
      bus.drivers.each do |driver|
        drivers << driver.name
      end
      all_drivers[bus.id] = drivers
    end

    all_drivers
  end

  def better_drivers_query
    # TODO: your code here
    #Create a hash with bus id's as keys and an array of bus drivers as the corresponding value.
    buses =  self.buses.includes(:drivers)

    bus_hash = {}

    buses.each do |bus|
      drivers_arr = []
      bus.drivers.each do |driver|
        drivers_arr << driver
      end
      bus_hash[bus.id] = drivers_arr
    end
    bus_hash
  end

end
