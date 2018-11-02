class Array

  def self.partition(array, start, length, &prc)
    prc ||= Proc.new { |el1, el2| el1 <=> el2 }

    pivot_idx = start
    pivot = array[start]

    ((start + 1)...(start + length)).each do |idx|
      if prc.call(pivot, array[idx]) == 1
        array[idx], array[pivot_idx + 1] = array[pivot_idx + 1], array[idx]
        pivot_idx += 1
      end
    end
    array[start], array[pivot_idx] = array[pivot_idx], array[start]
    pivot_idx
  end

  def select_kth_smallest(k)
    left = 0
    right = self.length - 1

    loop do
      return self[left] if left == right
      pivot_idx = Array.partition(self, left, right - left + 1)

      if k - 1 == pivot_idx
        return self[k - 1]
      elsif k - 1 < pivot_idx
        right = pivot_idx - 1
      else
        left = pivot_idx + 1
      end
    end
  end

end
