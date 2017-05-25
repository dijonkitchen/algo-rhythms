require_relative '../sorts/insertion_sort'

RSpec.describe 'Insertion Sort' do
  it 'Sorts arrays' do
    array = [1, 234, 12, 34, 1234, 1, 234, 34]
    expect(insertion_sort(array)).to eq(array.sort)
  end
end
