def find_largest_smaller_key(root_node, number)
  key = nil

  until root_node.nil?
    if root_node.key < number
      key = root_node.key
      root_node = root_node.right
    else
      root_node = rootNode.left
    end
  end

  key
end

# Time complexity: O(log(n)) if a balanced binary search tree, O(n) otherwise.
# Space complexity: O(1)
