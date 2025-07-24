// Lấy ID dự án từ URL
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('id');

// Hiển thị dự án tương ứng
function loadProject() {
    const project = projects[projectId];
    
    if (!project) {
        document.body.innerHTML = `<h1>Project not found</h1>`;
        return;
    }

    // Render HTML động
    document.title = `${project.title} | Portfolio`;
    document.querySelector('.project-title').textContent = project.title;
    document.querySelector('.project-year').textContent = project.year;
    document.querySelector('.project-description').textContent = project.description;
    
    // Render gallery
    const gallery = document.querySelector('.gallery-thumbs');
    project.images.forEach(img => {
        gallery.innerHTML += `
            <img src="${img}" class="thumb" 
                 onclick="changeMainImage('${img}')">
        `;
    });
    
    // Render next project link
    const nextProject = projects[project.nextProject];
    document.querySelector('.next-btn').href = `project.html?id=${nextProject.id}`;
}

// Đổi ảnh chính khi click thumbnail
function changeMainImage(src) {
    document.getElementById('main-image').src = src;
}

// Khởi chạy khi trang load
window.onload = loadProject;