# Find pair with given sum in the array

# Input: 
#     arr = [8, 7, 2, 5, 3, 1];
#     sum = 10;

# Output:
#     pair found at index 0 and 2 (8 + 2)
#     or
#     pair found at index 0 and 2 (7 + 3)

def first_pair_with_equal_sum(arr, sum) 
    complements = {}

    arr.each_with_index do |el, idx|
        return "#{el} equals #{sum}" if el == sum
        if complements[el]
            puts "#{arr[complements[el]]} and #{el} equal #{sum}."
            return "#{arr[complements[el]]} and #{el} equal #{sum}."
        end
        complements[sum - el] = idx
    end
    return " Pair equaling #{sum} not found"
end

first_pair_with_equal_sum([8, 7, 2, 5, 3, 1], 10)