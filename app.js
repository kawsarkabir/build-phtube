// category data load
const handleCategories = async()=>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const categories =data.data;
    displayCategories(categories)
}
// display category 
const displayCategories = (categories)=>{
    const categoriesContainer = document.getElementById('categories-container');
    categories.forEach(singleCategories=>{
        const div = document.createElement('div');
        div.innerHTML = ` 
        <button onclick="singleCategoryLoad('${singleCategories.category_id}')" class="py-2 px-6 bg-gray-100 rounded-lg">${singleCategories.category}</button>
        `
        categoriesContainer.appendChild(div);
    })
}
// single category data load
const singleCategoryLoad= async(categoryId)=>{
    console.log(categoryId);
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await res.json();
    const categoryItem = data.data;
    displaySingleCategory(categoryItem);
}
// display single category 
const displaySingleCategory = (categoryItem) =>{
    const singleCategoryContainer = document.getElementById('single-category-container');
    singleCategoryContainer.textContent = ''
    categoryItem.forEach(singleCategory=>{
        console.log(singleCategory);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card w-96">
  <figure><img src="${singleCategory.thumbnail}" alt="Shoes" class="rounded-xl" /></figure>
  <div class="card-body">
    <h2 class="card-title">${singleCategory.title}</h2>
  </div>
</div>
        `
        singleCategoryContainer.appendChild(div)
    })
}
handleCategories();