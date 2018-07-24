require_relative "heap"

class Array
  def heap_sort!
    heaped_idx = 1
    prc = Proc.new {|x,y| x <=> y}

    # Makes array into a heap with root at idx 0
    while heaped_idx < self.length
      i = 0
      while i < heaped_idx
        BinaryMinHeap.heapify_up(self, heaped_idx, heaped_idx+1, &prc)
        i += 1
      end
      heaped_idx += 1
    end

    i = 1
    while i < self.length
      self[self.length-i], self[0] = self[0], self[self.length-i]
      BinaryMinHeap.heapify_down(self, 0, self.length-i, &prc)
      i += 1
    end

    self.reverse!
  end
end

# 
# require_relative "heap"
#
# class Array
#   def heap_sort!
#    1.upto(length - 1) do |idx|
#      BinaryMinHeap.heapify_up(self, idx) { |el, el1| el <=> el1 }
#    end
#
#    (length - 1).downto(0) do |idx|
#      self[0], self[idx] = self[idx], self[0]
#      BinaryMinHeap.heapify_down(self, 0, idx) { |el, el2| el <=> el2 }
#    end
#  reverse!
#  end
# end
