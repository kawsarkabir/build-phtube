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
    categories.forEach(SingleCategories=>{
        const div = document.createElement('div');
        div.innerHTML = ` 
        <button class="py-2 px-6 bg-gray-100 rounded-lg">${SingleCategories.category}</button>
        `
        categoriesContainer.appendChild(div);
    })
}
handleCategories();