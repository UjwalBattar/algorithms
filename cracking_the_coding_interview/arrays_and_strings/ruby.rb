# 1.1
# Implement an algorithm to determine if a string has
# all unique characters
# What if you can not use additional data structures?

# 'hello' => false
# '' => true
# 'Yatch' => true
def unique_char_string(string)
  char_hash = Hash.new

  string.each_char do |c|
    if char_hash[c.ord]
      return false
    else
      char_hash[c.ord] = true
    end
  end
  true
end

# 1.2 Write code to reverse a C-Style String
# (C-String means that “abcd” is represented as five characters,
# including the null character )
