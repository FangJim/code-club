# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
    hash={}
    nums.each_with_index do |number,i|
        key = target-number
        if hash[key]
            return [hash[key],i]
        else
            hash[number] = i
        end
    end
end

puts two_sum([2,7,11,15],9)
#nums = [2,7,11,15], target = 9