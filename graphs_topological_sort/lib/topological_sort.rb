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

def topological_sort(vertices)

end
