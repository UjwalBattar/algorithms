# 2.1 Remove Dups:
# Write code to remove duplicates from an unsorted linked list.
# FOLLOW UP
# How would you solve this problem if a temporary buffer is not allowed?

def remove_dups(head)
  value_hash = Hash.new

  prev = head
  current_node = prev.next
  until current == nil
    if value_hash[current.value]
      

end
