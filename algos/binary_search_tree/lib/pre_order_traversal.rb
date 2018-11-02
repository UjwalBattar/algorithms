def pre_order_traversal(tree_node = @root, arr = [])
  arr.push(tree_node.value)

  if tree_node.left
    in_order_traversal(tree_node.left, arr)
  end

  if tree_node.right
    in_order_traversal(tree_node.right, arr)
  end

  arr
end
