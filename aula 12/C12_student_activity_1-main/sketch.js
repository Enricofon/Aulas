var nums = [1,2,3,4,5];



  


function setup() {
  createCanvas(400, 400);
  for(var i = 0;i < nums.length;i++){
    if(nums[i]>4){
      console.log(nums[i]);
    }
   
  }
}

function draw() {
  background(220);
}