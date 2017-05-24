def insertionSort(arr)
  arr.each_with_index do |num, index|
    prev_index = index - 1
    while prev_index >= 0 && arr[prev_index] > num do
      arr[prev_index + 1] = arr[prev_index]
      prev_index -= 1
    end
    arr[prev_index + 1] = num
  end
  arr
end

p insertionSort([4,23,42,3,4,12,4,12,34])