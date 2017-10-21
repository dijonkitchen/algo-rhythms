require_relative '../problems/nth_root'

RSpec.describe 'nth root' do
  it 'takes nth root of a number' do
    number = 7
    n = 3
    expect((nth_root(number, n)**n - number).abs <= 0.001).to eq(true)
  end

  it 'takes nth root of a number' do
    number = 4
    n = 2
    expect((nth_root(number, n)**n - number).abs <= 0.001).to eq(true)
  end
end
