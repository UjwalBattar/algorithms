# Some user interactions, such as resizing and scrolling, can
# create a huge number of browser events in a short period of time.
# If listeners attached to these events take a long time to execute,
# the user's browser can start to slow down significantly.
# To mitigate this issue, we want to implement a throttle function
# that will detect clusters of events and reduce the number of times
# we call an expensive function.
#
# Your function will accept an array representing a stream of event
# timestamps and return an array representing the times that a
# callback should have been called. If an event happens within wait
# time of the previous event, it is part of the same cluster. Your
# function should satisfy the following use cases:
#
# 1) Firing once on the first event in a cluster, e.g. as soon as
#   the window starts resizing.
# 2) Firing once after the last event in a cluster, e.g. after the
#   user window stops resizing.
# 3) Firing every interval milliseconds during a cluster, e.g. every
#   100ms while the window is resizing.

def throttle(wait, onLast, onFirst, interval, timestamps)
  
end
