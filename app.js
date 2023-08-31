// category data load
const handleCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await res.json();
  const categories = data.data;
  displayCategories(categories);
};
// display category
const displayCategories = (categories) => {
  const categoriesContainer = document.getElementById("categories-container");
  categories.forEach((singleCategories) => {
    const div = document.createElement("div");
    div.innerHTML = ` 
        <button onclick="singleCategoryLoad('${singleCategories.category_id}')" class="py-2 px-6 bg-gray-100 rounded-lg">${singleCategories.category}</button>
        `;
    categoriesContainer.appendChild(div);
  });
};
// single category data load
const singleCategoryLoad = async (categoryId) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
  );
  const data = await res.json();
  const categoryItem = data.data;
  displaySingleCategory(categoryItem);
};
// display single category
const displaySingleCategory = (categoryItem) => {
  const singleCategoryContainer = document.getElementById(
    "single-category-container"
  );
  singleCategoryContainer.textContent = "";

  //   no data found
  const notDataFound = document.getElementById("no-data-found");
  if (categoryItem.length === 0) {
    notDataFound.classList.remove("hidden");
  } else {
    notDataFound.classList.add("hidden");
  }

  //   categoryItem looping
  categoryItem.forEach((singleCategory) => {
    // convert second to hours munite
    const totalSeconds = singleCategory.others.posted_date;
    const hours = Math.floor(totalSeconds / 3600); // 3600 seconds in an hour
    const remainingSeconds = totalSeconds % 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="card w-96">
        <div>
        <figure><img src="${singleCategory.thumbnail}" alt="Shoes" class="rounded-xl w-[330px] h-52" />
        </figure>
        <span class ="relative text-white bg-black px-3 py-1 left-44 bottom-8 rounded-md">${`${hours}hrs ${minutes}min ago`}</span>
        </div>
        <div class="card-body flex-row gap-x-5">
        <div>
            <img class="w-10 h-10 rounded-full" src="${singleCategory.authors[0].profile_picture}">
        </div>
        <div>
            <h3 class ="text-xl font-semibold">${singleCategory.title}</h3>
            <div class="flex items-center gap-x-2">
                 <h4 class="text-gray-500 text-base">${singleCategory.authors[0].profile_name}</h4>
                 <h4>${singleCategory.authors[0].verified? `<i class="text-blue-500 fa-solid fa-certificate"></i>`:``}</h4>
            </div>
            <h4 class ="text-gray-400">${singleCategory.others.views} views</h4>
        </div>
        </div>
        </div>
        `;
    singleCategoryContainer.appendChild(div);
  });
};
handleCategories();
singleCategoryLoad('1000');

// handleBlog btn clic then redirect another page
const handleBlog =()=>{
    location.href = "blog.html";
}