namespace Code.Classes
{
    public class Algorithms
    {
        public int BinarySearch(int[] nums, int target) {
            for(int i=0; i < nums.Length; i++) {
                if(nums[i] == target) return i;
            }

            return -1;
        }
    }
}