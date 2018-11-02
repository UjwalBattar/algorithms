def iter_in_order_traversal(tree_node)
  stack = []
  current = tree_node
  until current.nil? && stack.empty?
    if current
      stack << current
      current = current.left
    else
      top_node = stack.pop
      p top_node
      current top_node.right
    end
  end
end
