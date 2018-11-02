def install_order2(arr)
  max = 0
  vartices = {}
  arr.each do |tuple|
    dependent = tuple[0]
    dependency = tuple[1]

    vertices[dependent] = Vertex.new(dependent) unless vertices[dependent]
    vertices[dependent] = Vertex.new(dependency) if dependency && !vertices[dependency]
    Edge.new(vertices[dependency], vertices[dependent]) if dependency
  end

  topological_sort(vertices.values).map {|v| v.value }
end
