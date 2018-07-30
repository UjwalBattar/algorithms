require 'bst_node'
# There are many ways to implement these methods, feel free to add arguments
# to methods as you see fit, or to create helper methods.

class BinarySearchTree

  attr_accessor :root

  def initialize
    @root = nil
  end

  def insert(value)
    if @root == nil
      @root = BSTNode.new(value)
    else
      insert_helper(value, @root)
    end
  end

  def find(value, tree_node = @root)
    return tree_node if tree_node.nil?

    if value == tree_node.value
      return tree_node
    elsif value <= tree_node.value
      find(value, tree_node.left)
    else
      find(value, tree_node.right)
    end

  end

  def delete(value)
    @root = delete_from_tree(@root, value)
  end

  # helper method for #delete:
  def maximum(tree_node = @root)
    if tree_node.right.nil?
      return tree_node
    else
      maximum(tree_node.right)
    end
  end

  def depth(tree_node = @root)
    return -1 if tree_node.nil?

    left_depth = depth(tree_node.left)
    right_depth = depth(tree_node.right)

    if left_depth > right_depth
      return left_depth + 1
    else
      return right_depth + 1
    end
  end

  def is_balanced?(tree_node = @root)
    return true if tree_node.nil?

    balanced = true
    left_depth = depth(tree_node.left)
    right_depth = depth(tree_node.right)
    balanced = false if (left_depth - right_depth).abs > 1

    if balanced && is_balanced?(tree_node.left) && is_balanced?(tree_node.right)
      return true
    end
    false
  end

  def in_order_traversal(tree_node = @root, arr = [])
    in_order_traversal(tree_node.left, arr) if tree_node.left

    arr.push(tree_node.value)

    in_order_traversal(tree_node.right, arr) if tree_node.right

    arr
  end


  private
  # optional helper methods go here:

  def insert_helper(value, current_root)
    if value <= current_root.value
      if current_root.left.nil?
        current_root.left = BSTNode.new(value)
      else
        insert_helper(value, current_root.left)
      end
    elsif value > current_root.value
      if current_root.right.nil?
        current_root.right = BSTNode.new(value)
      else
        insert_helper(value, current_root.right)
      end
    end
  end

  def delete_from_tree(tree_node, value)
    if value == tree_node.value
      tree_node = remove(tree_node)
    elsif value <= tree_node.value
      tree_node.left = delete_from_tree(tree_node.left, value)
    else
      tree_node.right = delete_from_tree(tree_node.right, value)
    end
    tree_node
  end

  def remove(node)
    if node.left.nil? && node.right.nil?
      node = nil
    elsif node.left && node.right.nil?
      node = node.left
    elsif node.right && node.left.nil?
      node = node.right
    else
      node = replace_parent(node)
    end
    node
  end

  def replace_parent(node)
    replacement_node = maximum(node.left)

    promote_child(node.left) if replacement_node.left

    replacement_node.left = node.left
    replacement_node.right = node.right

    replacement_node
  end

  def promote_child(tree_node)
    if tree_node.right
      max_node = maximum(tree_node.right)
    else
      return tree_node
    end

     tree_node.right = max_node.left
  end
end
