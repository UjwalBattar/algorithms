class Fixnum
  # Fixnum#hash already implemented for you
end

class Array
  def hash
    hashed = 11
    self.each_with_index do |el, idx |
      hashed ^= el.hash * (idx + 1)
    end
    hashed
  end
end

class String
  def hash
    return self.ord.hash if self.length == 1
    self.split("").hash
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    hashed = 11
    self.to_a.sort.each do |el|
      hashed ^= el.hash
    end
    hashed
  end
end
