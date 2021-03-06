require_relative 'p02_hashing'

class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    resize! if @count == num_buckets
    unless include?(key)
      self[key].push(key)
      @count += 1
    end
    key
  end

  def include?(key)
    self[key].include?(key)
  end

  def remove(key)
    if include?(key)
      self[key].delete(key)
      @count -= 1
    end
    key
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num.hash % num_buckets]
  end

  def num_buckets
    @store.length
  end

  def resize!
    new_length = num_buckets * 2
    new_store = Array.new(new_length) { Array.new }
    @store.each do |arr|
      arr.each do |el|
        new_store[el.hash % new_length].push(el)
      end
    end
    @store = new_store
  end
end
