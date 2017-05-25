# Intuition:
# Divide and conquer a list continually into halves
# until they're only one element
# Merge these new lists by comparing their elements in order
# Create a new slightly larger list that's sort
# Continue recursively until the full list is done

def merge_sort(array)
  return array if array.length <= 1

  midpoint = array.length / 2
  left = merge_sort(array[0...midpoint])
  right = merge_sort(array[midpoint..-1])

  merge(left, right)
end

def merge(sorted_array1, sorted_array2)
  new_array = []

  while !sorted_array1.empty? && !sorted_array2.empty?
    new_array << if sorted_array1.first < sorted_array2.first
                      sorted_array1.shift
                    else
                      sorted_array2.shift
                    end
  end

  new_array + sorted_array1 + sorted_array2
end
