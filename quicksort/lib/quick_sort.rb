class QuickSort
  # Quick sort has average case time complexity O(nlogn), but worst
  # case O(n**2).

  # Not in-place. Uses O(n) memory.
  def self.sort1(array)
    return array if array.length <= 1

    pivot = array[0]

    left = QuickSort.sort1(array[1..-1].select { |el| el <= pivot })
    right = QuickSort.sort1(array[1..-1].select { |el| el > pivot })

    left + pivot + right
  end

  # In-place.
  def self.sort2!(array, start = 0, length = array.length, &prc)
    prc ||= Proc.new { |el1, el2| el1 <=> el2 }

    return array if length < 2

    pivot_idx = partition(array, start, length, &prc)

    left_length = pivot_idx - start
    right_length = length - (pivot_idx + 1)

    QuickSort.sort2!(array, start, left_length, &prc)
    QuickSort.sort2!(array, pivot_idx + 1, right_length, &prc)
  end

  def self.partition(array, start, length, &prc)
    prc ||= Proc.new { |el1, el2| el1 <=> el2 }

    pivot_idx = start
    pivot = array[start]

    ((start + 1)...length + start).each do |i|
      if prc.call(pivot, array[i]) == 1
        array[i], array[pivot_idx + 1] = array[pivot_idx + 1], array[i]
        pivot_idx += 1
      end
    end
    array[start], array[pivot_idx] = array[pivot_idx], array[start]
    pivot_idx
  end
end
