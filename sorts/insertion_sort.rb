# Intuition:
# You're holding a mixed hand of cards and need to order it

# Start comparing cards until you find something out of place
# Then you go back one card at a time until it's in the right spot
# Continue until the end

# Good for:
# Streaming input to an already sorted list
# Nearly sorted lists and off by a little relative to the size of the list
# Time complexity would be O(n*k),
# where k is the margin of error of an element to it's proper position

def insertion_sort(arr)
  arr.each_with_index do |num, index|
    prev_index = index - 1 # Check index -1 edge case
    while prev_index >= 0 && arr[prev_index] > num
      arr[prev_index + 1] = arr[prev_index]
      prev_index -= 1
    end
    arr[prev_index + 1] = num
  end
  arr
end
