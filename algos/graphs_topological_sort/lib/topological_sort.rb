# require_relative 'graph'
#
# # Implementing topological sort using both Khan's and Tarian's algorithms
#
# # Khan's unweighted topological sort
#
# def topological_sort(vertices)
#   order = []
#   queue = []
#   len = vertices.length
#
#   vertices.each do |vertex|
#     if vertex.in_edges.empty?
#       queue.push(vertex)
#     end
#   end
#
#   until queue.empty?
#     current = queue.shift
#     order << current
#     current.out_edges.dup.each do |edge|
#       destination = edge.to_vertex
#       edge.destroy!
#       if destination.in_edges.empty?
#         queue.push(destination)
#       end
#     end
#     vertices.delete(current)
#   end
#
#   len == order.length ? order : []
# end
#
# Khan's weighted topological sort

# def topological_sort(vertices)
#   order = []
#   queue = []
#   in_edges = {}
#
#   vertices.each do |vertex|
#     in_edge_cost = vertex.in_edges.reduce(0) { |sum, edge| sum += edge.cost }
#     in_edges[vertex] = in_edge_cost
#     queue.push(vertex) if in_edge_cost == 0
#   end
#
#   until queue.empty?
#     current = queue.shift
#
#     current.out_edges.each do |edge|
#       to_vertex = edge.to_vertex
#       in_edges[to_vertex] -= edge.cost
#       queue << to_vertex if in_edges[to_vertex] == 0
#     end
#
#     order << current
#   end
#
#   vertices.length == order.length ? order : []
# end

# Tarjan's algorigthm without cycle catching
require_relative 'graph'
require 'set'

# def topological_sort(vertices)
#   order = []
#   explored = Set.new
#
#   vertices.each do |vertex|
#     order += dfs!(order, explored, vertex) unless explored.include?(vertex)
#   end
#   order
# end
#
# def dfs!(order, explored, vertex)
#   explored.add(vertex)
#
#   vertex.out_edges.each do |edge|
#     to_vertex = edge.to_vertex
#     dfs!(order, explored, to_vertex) unless explored.include?(to_vertex)
#   end
#   order.unshift(vertex)
# end

#  Tarjan's algorithm with cycle catching

def topological_sort(vertices)
  order = []
  explored = Set.new
  cycle = false
  temp = Set.new

  vertices.each do |vertex|
    cycle = dfs!(order, explored, vertex, cycle, temp) unless explored.include?(vertex)
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
  false
end
