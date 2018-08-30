# This is a demo task.
#
# Write a function:
#
# def solution(A);
#
# that, given an array A of N integers, returns the smallest positive
# integer (greater than 0) that does not occur in A.
#
# For example, given A = [1, 3, 6, 4, 1, 2], the function should
# return 5.
#
# Given A = [1, 2, 3], the function should return 4.
#
# Given A = [−1, −3], the function should return 1.
#
# Write an efficient algorithm for the following assumptions:
#
# N is an integer within the range [1..100,000];
# each element of array A is an integer within the range
# [−1,000,000..1,000,000].

def missing_integer(a)
  arr = a.sort
  return 1 if arr.empty? || arr[arr.length - 1] <= 0
  counter = 0

  arr.length.times do |i|
    if arr[i] > -1
      return counter + 1 if arr[i] - counter > 1
      counter = arr[i]
    end
  end
  arr[arr.length - 1] + 1
end

missing_integer([1, 3, 6, 4, 1, 2])
