#O(N)
def find_longest_fish
  fish_arr = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

  fish_arr.sort_by {|fish| fish.length}.last



end

#O(NLogN)
def find_longest_fish
  fish_arr = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

  #run quicksort on this, choose last element



end

#O(N)
def find_longest_fish
  fish_arr = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

  max = 0
  fish_arr.each do |fish|
    if fish.length > max
      max = fish.length
    end

  end
  max

end


def slow_dance(direction, tile_arr)
  #go through the array one el at a time

end

def constant_dance(direction,tile_arr)
  #use a hash map here
  
end
