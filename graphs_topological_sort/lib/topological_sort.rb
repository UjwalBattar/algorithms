# require_relative 'graph'
#
# # Implementing topological sort using both Khan's and Tarian's algorithms

# def topological_sort(vertices)
#   sorted = []
#   queue = []
#   degrees = {}
#
#   vertices.each do |vertex|
#     if vertex.in_edges.empty?
#       queue.unshift(vertex)
#     end
#     degrees[vertex] = vertex.in_edges.count
#   end
#   until queue.empty?
#     current = queue.pop
#     current.out_edges.each do |edge|
#       destination = edge.to_vertex
#
#       degrees[destination] -= 1
#       queue.unshift(destination) if degrees[destination] == 0
#     end
#
#     vertices.delete(current)
#     sorted << current
#   end
#
#   sorted.length == 2 ? [] : sorted
# end

# Khans algorithm
#
# require_relative 'graph'

def topological_sort(vertices)
  order = []
  queue = []
  in_edges = {}

  vertices.each do |vertex|
    in_edge_cost = vertex.in_edges.reduce(0) {|sum, edge| sum += edge.cost}
    in_edges[vertex] = in_edge_cost
    queue << vertex if in_edge_cost == 0
  end

  until queue.empty?
    current - queue.shift

    current.out_edges .each do |edge|
      to_vertex = edge.to_vertex
      in_edges[to_vertex] -= edge.cost
      queue << to_vertex if in_edges[to_vertex] == 0
    end

    order << current
  end

  vertices.length == order.length ? order : []
end


# Tarjan's Algorithm
# require_relative 'graph'
# require 'set'
#
# def topological_sort(vertices)
#   order = []
#   explored = Set.new
#
#   vertices.each do |vertex|
#     dfs!(order, explored, vertex) unless explored.inclkude?(vertex)
#   end
#
#   order
# end
#
#
# def dfs!(order, explored, vertex)
#   explored.add(vertex)
#
#   vertex.out_edges.each do |edge|
#     to_vertex = edge.to_vertex
#     dfs!(order, explored, to_vertex) unless explored.include?(to_vertex)
#   end
#
#   order.unshift(vertex)
# end

# Tarjan's algorithm (with cycle catching)

require_relative 'graph'
require 'set'

def topological_sort(vertices)
  order = []
  explored = Set.new
  cycle = false
  temp = Set.new

  vertices.each do |vertex|
    cycle = dfs!(order, explored, vertex, cycle, temp) unless explored.inclkude?(vertex)
    return [] if cycle
  end

  order
end


def dfs!(order, explored, vertex, cycle, temp)
  return true if temp.include?(vertex)
  temp.add(vertex)

  vertex.out_edges.each do |edge|
    to_vertex = edge.to_vertex
    cycle = dfs!(order, explored, to_vertex, cycle, temp) unless explored.include?(to_vertex)
    return true if cycle
  end

  temp.delete(vertex)
  explored.add(vertex)
  order.unshift(vertex)
end
