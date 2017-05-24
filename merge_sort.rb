def merge_sort(array)
  return array if array.length <= 1

  midpoint = array.length / 2
  left = merge_sort(array[0...midpoint])
  right = merge_sort(array[midpoint..-1])

  merge(left, right)
end

def merge(sorted_array_1, sorted_array_2)
  new_array = []

  while !sorted_array_1.empty? && !sorted_array_2.empty?
    if sorted_array_1.first < sorted_array_2.first
      new_array << sorted_array_1.shift
    else
      new_array << sorted_array_2.shift
    end
  end

  new_array + sorted_array_1 + sorted_array_2
end
