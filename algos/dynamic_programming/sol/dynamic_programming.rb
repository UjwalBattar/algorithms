
class DynamicProgramming

  def initialize
    @blair_cache = {1 => 1, 2 => 2}
    @frog_cache = {1 => [[1]], 2 => [[2],[1,1]], 3 => [[1,2],[2,1],[1,1,1],[3]]}
    @super_cache = {0 => [[]], 1 => [[1]]}
    @maze_cache = {}
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
    @knapsack = { 0 => Array.new(weights.length, 0) }
    knapsack_table(weights, values, capacity)
    # p @knapsack.sort_by {|k,v| k} #checks cache
    @knapsack[capacity].last
  end

  # Helper method for bottom-up implementation
  # you must select the optimum from between these two paradigms: use either the previous item solution at this capacity, or the previous item solution from a smaller bag plus this item's value.
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
    build_cache(start_pos)
    solve_maze(maze, start_pos, end_pos)
    find_path(end_pos)
  end

  private

  def solve_maze(maze, start_pos, end_pos)
    return true if start_pos == end_pos

    get_moves(maze, start_pos).each do |next_pos|
      unless @maze_cache.keys.include?(next_pos)
        @maze_cache[next_pos] = start_pos
        solve_maze(maze, next_pos, end_pos)
      end
    end
  end

  def build_cache(start_pos)
    @maze_cache[start_pos] = nil
  end

  def find_path(end_pos)
    path = []
    current = end_pos

    until current.nil?
      path.unshift(current)
      current = @maze_cache[current]
    end

    path
  end

  def get_moves(maze, from_pos)
    directions = [[0, 1], [1, 0], [-1, 0], [0, -1]]
    x, y = from_pos
    result = []

    directions.each do |dx, dy|
      next_pos = [x + dx, y + dy]
      result << next_pos if is_valid_pos?(maze, next_pos)
    end

    result
  end

  def is_valid_pos?(maze, pos)
    x, y = pos
    x >= 0 && y >= 0 && x < maze.length && y < maze.first.length && maze[x][y] != "X"
  end

end
