def num_of_paths_to_dest(size)
  memo = Array.new(size, [])
  num_of_paths_to_sq(size - 1, size - 1, memo)
end

def num_of_paths_to_sq(x, y, memo)
  if x < 0 || y < 0
    return 0
  elsif x < y
    memo[x, y] = 0
  elsif x == 0 && y == 0
    memo[x, y] = 1
  elsif memo[x, y].nil?
    memo[x, y] = num_of_paths_to_sq(x - 1, y, memo) + num_of_paths_to_sq(x, y - 1, memo)
  end

  memo[x, y]
end

puts num_of_paths_to_dest(4)
