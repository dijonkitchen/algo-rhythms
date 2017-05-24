def mergesort(array)
  return array if array.length <= 1

  midpoint = array.length / 2
  left = mergesort(array[0...midpoint])
  right = mergesort(array[midpoint..-1])

  merge(left, right)
end

def merge(sorted_array_1, sorted_array_2)
  new_array = []

  while !sorted_array_1.empty? && !sorted_array_2.empty?
    new_array << if sorted_array_1.first < sorted_array_2.first
                      sorted_array_1.shift
                    else
                      sorted_array_2.shift
                    end
  end

  new_array + sorted_array_1 + sorted_array_2
end
