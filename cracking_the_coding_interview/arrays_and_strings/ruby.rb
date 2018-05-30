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

# 1.3 URLify: Write a method to replace all spaces in a string with
# '%20' You may assume that the string has sufficient space at the end
# to hold the additional characters, and that you are given the "true"
# length of the string.
# (Note: If implementing in Java, please use a character array so that
#  you can perform this operation in place.)

def URLify(string, len)
  string.strip!.gsub!(/\s\s+/, "%20")
end

def isPalindromePermutation(string)
  char_set = {}
  count = 0
  i = 0
  while i < string.length
    if char_set[string[i]]
      char_set[string[i]] -= 1
    elsif string[i] != " "
      char_set[string[i]] = 1
    end
    i += 1
  end
  char_set.values.each do |el|
    count += 1 if el >= 1
  end
  count <= 1
end
