class Stack
      def initialize
        @stack = Array.new
        # create ivar to store stack here!
      end

      def add(el)
        @stack.push(el)
        # adds an element to the stack
      end

      def remove
        @stack.pop
        # removes one element from the stack
      end

      def show
        stack_copy = @stack.dup
        stack_copy
        # return a copy of the stack
      end
    end

class Queue
  def initialize
    @queue = Array.new
  end

  def enqueue(el)
    @queue.unshift

  end

  def dequeue
    @queue.shift

  end

end

class Map
  def initialize
    @map = Array.new
  end

  def assign(key,value)
    @map.each do |pairs|
      return false if pairs[0] == key
    end
    @map << [key,value]
  end


  def lookup(key)
    @map.each do |pairs|
      return pairs[1] if pairs[0] == key
    end
  end

  def remove(key)
    @map.each do |pairs|
      @map.delete(pairs) if pairs[0] == key
    end
  end

  def show
    p @map
  end

end






end
