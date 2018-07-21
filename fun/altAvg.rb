# Write a function called altAvg which accepts a list of floats as an
# argument and returns the average value of the numbers in the list.
# However each float must be rounded to the nearest multiple of four
# before computing the average. For example, the computed average
# rounded to the nearest digit of the numbers 2.6, 8.2, 14.2 would be
# 9 because 2.6 is rounded to 4, 8.2 is rounded to 8, 14.2 is rounded
# to 16. Do not use the round or math.ceil functions. Write a program
# which prompts the user to enter a comma-separated list of numbers
# and uses your altAvg function to compute the average and prints
# it out.
#
# Example Interaction
# Enter a sequence of numbers: 2.6,8.2,14.2
# Average is 9
#

def altAvg(arr)
  res = []

  arr.each do |n|
    count = 0
    while n > 4
      n -= 4
      count += 1
    end

    if n > 2
      count += 1
    end

    res.push(count * 4)
  end

  res.reduce(:+) / res.length
end
