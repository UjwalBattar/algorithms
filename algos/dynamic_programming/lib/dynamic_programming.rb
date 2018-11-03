class DynamicProgramming

  def initialize
    @blair_cache = {1 => 1, 2 => 2}
    @frog_cache = {1 => [[1]], 2 => [[1, 1], [2]], 3 => [[1, 1, 1], [1, 2], [2, 1], [3]]}
    @super_cache = {0 => [[]], 1 => [[1]]}
  end

  def blair_nums(n)
    # recursive
    # return 1 if n == 1
    # return 2 if n == 2
    # return blair_nums(n - 1) + blair_nums(n - 2) + (2 * (n - 1) - 1)

    # dynamic programming: top down
    return @blair_cache[n] if @blair_cache[n]
    res = blair_nums(n - 1) + blair_nums(n - 2) + (2 * (n - 1) - 1)
    @blair_cache[n] = res
    res

    # dynamic programming: bottom up
    # cache = blair_cache_builder(n)
    # cache[n]
  end

  # bottom up blair helper
  # def blair_cache_builder(n)
  #   cache = {1 => 1, 2 => 2}
  #   return cache if n < 3
  #   (3..n).each do |i|
  #     cache[i] = cache[i - 1] + cache[i - 2] + (2 * (i - 1) - 1)
  #   end
  #   cache
  # end

  def frog_hops_bottom_up(n)
    cache = frog_cache_builder(n)
    cache[n]
  end

  def frog_cache_builder(n)
    cache = {1 => [[1]], 2 => [[1, 1], [2]], 3 => [[1, 1, 1], [1, 2], [2, 1], [3]]}
    return cache if cache[n]
    4.upto(n) do |i|
      cache[i] = []
      1.upto(i - 1) do |j|
        cache[j].each do |x|
          1.upto(3) do |y|
            cache[i].concat([x + [y]]) if [x + [y]][0].reduce(:+) == i
          end
        end
      end
    end
    cache
  end

  def frog_hops_top_down(n)
    frog_hops_top_down_helper(n)
  end

  def frog_hops_top_down_helper(n)
    return @frog_cache[n] if @frog_cache[n]
    result = []
    1.upto(3) do |i|
      result.concat(frog_hops_top_down_helper(n - i).map {|j| j + [i]})
    end
    @frog_cache[n] = result
    result
  end

  def super_frog_hops(n, k)
    cache = super_frog_hops_helper(n, k)
    cache[n]
  end

  def super_frog_hops_helper(n, k)
    return @super_cache if n < 2
    2.upto(n) do |i|
      @super_cache[i] = []
      1.upto(k) do |j|
        @super_cache[i].concat(@super_cache[i - j].map { |x| x + [j]}) if i >= j
      end
    end
    @super_cache
  end

  def knapsack(weights, values, capacity)
    @knapsack = { 0 => Array.new(weights.length, 0) }
    knapsack_table(weights, values, capacity)
    # p @knapsack.sort_by {|k,v| k} #checks cache
    @knapsack[capacity].last
  end

  # Helper method for bottom-up implementation
  # you must select the optimum from between these two paradigms: 
    # use either the previous item solution at this capacity, 
    # or the previous item solution from a smaller bag plus this 
    # item's value.
  def knapsack_table(weights, values, capacity)
    return 0 if capacity <= 0 || weights.length == 0

    i = weights.length -   1

    @knapsack[capacity] = [] if @knapsack[capacity].nil?

    return @knapsack[capacity][i] if @knapsack[capacity][i]

    prev = knapsack_table(weights[0...i], values[0...i], capacity)
    other = knapsack_table(weights[0...i], values[0...i], capacity - weights[i]) + values[i]
    return prev if weights[i] > capacity
    choices = [prev, other]
    max = choices.max
    @knapsack[capacity][i] = max
    max
  end

  def maze_solver(maze, start_pos, end_pos)
  end
end

# knapsack([23, 31, 29, 44, 53, 38, 63, 85, 89, 82 ], [ 92, 57, 49, 68, 60, 43, 67, 84, 87, 72 ], 23)


# def test(n)
#   a = Time.now
#   res = blair_nums(n)
#   b = Time.now
#   c = b - a
#   print "TIME ~~ #{c}"
#   return res
# end