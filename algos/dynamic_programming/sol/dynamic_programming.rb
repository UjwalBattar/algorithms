
class DynamicProgramming

  def initialize
    @blair_cache = {1 => 1, 2 => 2}
    @frog_cache = {1 => [[1]], 2 => [[2],[1,1]], 3 => [[1,2],[2,1],[1,1,1],[3]]}
    @super_cache = {0 => [[]], 1 => [[1]]}
  end

  def blair_nums(n)
    return @blair_cache[n] if @blair_cache[n]
    result = blair_nums(n-1) + blair_nums(n-2) + (2 * (n - 1) - 1)
    @blair_cache[n] = result
    result
  end

  def frog_hops_bottom_up(n)
    cache = frog_cache_builder(n)
    return cache[n]
  end

  def frog_cache_builder(n)
    cache = {1 => [[1]], 2 => [[2],[1,1]], 3 => [[1,2],[2,1],[1,1,1],[3]]}
    return cache if cache[n]
    (4..n).each do |i|
      cache[i] = []
      (1...i).each do |j|
        cache[j].each do |x|
          (1..3).each do |z|
            cache[i].concat([x + [z]]) if [x + [z]][0].reduce(:+) == i
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
    (1..3).each do |i|
      result.concat(frog_hops_top_down_helper(n - i).map {|j| j + [i]})
    end
    @frog_cache[n] = result
    result
  end

  def super_frog_hops(num_stairs, max_stairs)
    cache = super_frog_hops_helper(num_stairs, max_stairs)
    cache[num_stairs]
  end

  def super_frog_hops_helper(n, k)
    return @super_cache if n < 2
    (2..n).each do |i|
      @super_cache[i] = []
      (1..k).each do |j|
        @super_cache[i] += @super_cache[i - j].map { |z| z + [j] } if i >= j
      end
    end
    @super_cache
  end


  def knapsack(weights, values, capacity)
    
  end

  def knapsack_table(weights, values, capacity)

  end

  def maze_solver(maze, start_pos, end_pos)
  end
end
