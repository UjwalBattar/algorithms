require_relative 'p02_hashing'

class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    resize! if @count == num_buckets
    self[key].push(key)
    @count += 1
  end

  def include?(key)
    self[key].include?(key)
  end

  def remove(key)
    self[key].delete(key)
    @count -= 1
  end

  private

  def [](num)
     # optional but useful; return the bucket corresponding to `num`
     # p "called"
    @store[num.hash % num_buckets]

  end

  def num_buckets
    @store.length
  end

  def resize!
    new_store = Array.new(num_buckets * 2) { Array.new }
    @store.each_with_index do |el, idx|
      new_store[idx] = el
    end
    @store = new_store
  end

  # def dup_for_resize(arr
  #   dup_arr = []
  #   @store.each_value do |value|
  #     if value.instance_of?(Array)
  #
  # end
end
