class BinaryMinHeap
  attr_reader :store, :prc

  def initialize(&prc)
    @store = Array.new
    @prc = prc
  end

  def count
    @store.length
  end

  def extract

  end

  def peek
  end

  def push(val)
  end

  public
  def self.child_indices(len, parent_index)
    child_indices = Array.new

    first_child_idx = (2 * parent_index + 1)
    second_child_idx = (2 * parent_index + 2)

    child_indices << first_child_idx if first_child_idx < len
    child_indices << second_child_idx if second_child_idx < len

    child_indices
  end

  def self.parent_index(child_index)
    raise "root has no parent" if child_index == 0
    (child_index - 1) / 2
  end

  def self.heapify_down(array, parent_idx, len = array.length, &prc)
    prc ||= Proc.new { |x, y| x <=> y }

    children_idx_arr = BinaryMinHeap.child_indices(len, parent_idx)
    left_child_idx = children_idx_arr[0]
    right_child_idx = children_idx_arr[1]

    children = []
    children << array[left_child_idx] if left_child_idx
    children << array[right_child_idx] if right_child_idx

    if children.all? { |child| prc.call(child, array[parent_idx]) >= 0 }
      return array
    end

    min_child_idx = nil

    if children_idx_arr != []
      if children_idx_arr.length == 1
        min_child_idx = children_idx_arr[0]
      elsif prc.call(children[0], children[1]) == 1
        min_child_idx = children_idx_arr[1]
      else
        min_child_idx = children_idx_arr[0]
      end
    end

    if prc.call(array[min_child_idx], array[parent_idx]) == -1
      array[parent_idx], array[min_child_idx] = array[min_child_idx], array[parent_idx]
      BinaryMinHeap.heapify_down(array, min_child_idx, len, &prc)
    end
  end

  def self.heapify_up(array, child_idx, len = array.length, &prc)
  end
end
