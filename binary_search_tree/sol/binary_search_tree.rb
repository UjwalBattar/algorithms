# There are many ways to implement these methods, feel free to add arguments
# to methods as you see fit, or to create helper methods.
require 'bst_node'

class BinarySearchTree
  def initialize
    @root = nil
  end

  def root
    @root
  end

  def insert(value)
    if @root.nil?
      @root = BSTNode.new(value)
    else
      insert_helper(value, @root)
    end
  end

  def find(value, tree_node = @root)
    return tree_node if tree_node.nil?
    if tree_node.value == value
      return tree_node
    else
      if value > tree_node.value
        find(value, tree_node.right)
      else
        find(value, tree_node.left)
      end
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
    if tree_node.nil?
      return -1;
    else
      left_depth = depth(tree_node.left)
      right_depth = depth(tree_node.right)

      if left_depth > right_depth
        return left_depth + 1
      else
        return right_depth + 1
      end
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
     if tree_node.left
       in_order_traversal(tree_node.left, arr)
     end

     arr.push(tree_node.value)

     if tree_node.right
       in_order_traversal(tree_node.right, arr)
     end

     arr
   end


  private


  def insert_helper(value, current_root)
    if value > current_root.value
      if current_root.right.nil?
        current_root.right = BSTNode.new(value)
        current_root.right.parent = current_root
      else
        insert_helper(value, current_root.right)
      end
    elsif value < current_root.value
      if current_root.left.nil?
        current_root.left = BSTNode.new(value)
        current_root.left.parent = current_root
      else
        insert_helper(value, current_root.left)
      end
    end
  end

  def delete_from_tree(tree_node, value)
    if value == tree_node.value
      tree_node = remove(tree_node)
    elsif value <= tree_node.value
      tree_node.left = delete_from_tree(tree_node.left, value)
    elsif value > tree_node.value
      tree_node.right = delete_from_tree(tree_node.right, value)
    end

    tree_node
  end

  def remove(node)
    if node.left.nil? && node.right.nil?
      node = nil
    elsif node.left && node.right.nil?
      node = node.left
    elsif node.left.nil? && node.right
      node = node.right
    else
      node = replace_parent(node)
    end

    node
  end

  def replace_parent(node)
    replacement_node = maximum(node.left)

    if replacement_node.left
      promote_child(node.left)
    end

    replacement_node.left = node.left
    replacement_node.right = node.right

    replacement_node
  end

  def promote_child(tree_node)
    if tree_node.right
      maximum_node = maximum(tree_node.right)
    else
      return tree_node
    end

    tree_node.right = maximum_node.left
  end
end
