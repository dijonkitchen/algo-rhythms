# Calculate nth root (within givin tolerance) without standard library
# for embedded system with little space

# Root must be between 0 and number
# Binary search of possibilites from 0 to number

# Set left and right boundaries
# While left is less than right
#   Check if midpoint ^ n is within tolerance of number
#     If value is too big
#       Set right to midpoint
#     Else
#       Set left to midpoint
#     Update midpoint to new average of left and right
# Return midpoint

def nth_root(number, n, tolerance = 0.001)
  low = 0
  high = number
  loop do
    midpoint = (low + high) / 2.0
    error = midpoint**n - number
    return midpoint if error.abs < tolerance
    if error > 0
      high = midpoint
    else
      low = midpoint
    end
  end
end

# Time complexity: O(log(n))
# Space complexity: O(1)
