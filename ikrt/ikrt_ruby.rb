# missing words 
# s = string
# t = subsequence string
# find words from s missing in t in order they appear

def missingWords(s, t)
    # Write your code here
    res = []
    s_words = s.split(" ")
    t_words = t.split(" ")
    i = 0
    j = 0
    while i < s_words.length
        if s_words[i] != t_words[j]
            res.push(s_words[i])
        else 
            j += 1
        end
        i += 1
    end
    res
end