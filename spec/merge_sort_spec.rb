require_relative '../merge_sort'

RSpec.describe 'Merge Sort' do
  it 'Sorts arrays' do
    array = [1, 234, 12, 34, 1234, 1, 234, 34]
    expect(merge_sort(array)).to eq(array.sort)
  end
end
