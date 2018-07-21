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

flt = input('Enter a sequence of numbers: ')
avg = flt.split(',')
lst = []

def altAvg(lst):
    for i in avg:
        if (i%4) > 2:
            return ((int(i)/4)+1)*4
        else:
            return int(i)*4

        lst.append(str(i))
        return (sum(lst) / len(lst))

print('Average is ', altAvg(lst))
