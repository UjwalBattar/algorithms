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

# 1.2 Check Permutation: Given two strings, write a method to decide
# if one is a permutation of the other.

def check_permutation(str1, str2)
  return false if str1.length != str2.length
  return true if str1 == str2
  strHash = Hash.new(0)
  i = 0

  while i < str1.length
    strHash[str1[i]] += 1
    strHash[str2[i]] += 1
    i += 1
  end

  strHash.values.all? {|el| (el % 2) == 0}
end
