def maxLenSubString(sentence)
  longest =  0
  char_hash = {}
  strt_idx = 0

  i = 0

  while i < sentence.length
    if char_hash[sentence[i]]
      if char_hash[sentence[i]] >= strt_idx
        strt_idx = char_hash[sentence[i]] + 1
      end
    end

    char_hash[sentence[i]] = i
    length = i - strt_idx + 1
    longest = length if length > longest

    i += 1
  end

  longest
end

def test()
  puts maxLenSubString("abcd") # 4
  puts maxLenSubString("abcda") # 4
  puts maxLenSubString("aaaa") # 1
  puts maxLenSubString("abcfajga") # 6
  puts maxLenSubString("daad") # 2

end

test()
