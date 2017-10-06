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
