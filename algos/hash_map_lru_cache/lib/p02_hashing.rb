class Fixnum
  # Fixnum#hash already implemented for you
end

class Array
  def hash
    hashed = 0
    self.each_with_index do |el, idx|
      hashed ^= el.to_s.ord.hash * (idx + 1)
    end
    hashed
  end
end

class String
  def hash
    self.chars.map(&:ord).hash
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    hashed = 0
    self.to_a.each do |arr|
      hashed += arr.hash
    end
    hashed
  end
end
