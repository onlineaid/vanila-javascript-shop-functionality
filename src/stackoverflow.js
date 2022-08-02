let selectedCategory=null;
let selectedColor=null;

let categoryItems=document.getElementByClassName('category'); 
//assuming categories items has a class category

for(let categoryItem of categoryItems){
   //foreach category found
   categoryItem.addEventListener('click', function(event){
       selectedCatory=this.innerHTML; //get the clicked category
       showFilteredItems();
   });
}

let colorsItems=document.getElementByClassName('color'); 
//assuming colors items has a class color

for(let colorItem of colorsItems){
   //foreach color found
   colorItem.addEventListener('click', function(event){
       selectedColor=this.innerHTML; //get the clicked color
       showFilteredItems();
   });
}

//this function is your old method
function showFilteredItems(){
  ....
  fetch(...)
  ....

  //by default all results
  let filteredPosts=info;

  //category filter
  if(selectedCategory){
    filteredPosts=filteredPosts.filter((post)=>post.category === selectedCategory);
  }
  //color filter
  if(selectedColor){
    filteredPosts=filteredPosts.filter((post)=>post.color=== selectedColor);
  }

  //show the items
  if(filteredPosts.length<=0){
     html='Product not found'
  }else{
    filteredPosts.splice(4); //only 4 posts
    for(let post of filteredPosts){
      html+=....
    }
  }
}

