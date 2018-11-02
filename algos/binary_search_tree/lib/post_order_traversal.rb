def post_order_traversal(tree_node = @root, arr = [])
  if tree_node.left
    in_order_traversal(tree_node.left, arr)
  end

  if tree_node.right
    in_order_traversal(tree_node.right, arr)
  end

  arr.push(tree_node.value)

  arr
end
