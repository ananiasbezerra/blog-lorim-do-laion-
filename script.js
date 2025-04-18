fetch("posts.json")
  .then(response => response.json())
  .then(posts => {
    const container = document.getElementById("posts-container");
    container.innerHTML = "";
    posts.forEach(post => {
      const article = document.createElement("article");
      article.innerHTML = `
        <h2><a href="${post.link}">${post.title}</a></h2>
        <p class="data">Publicado em ${post.date}</p>
        <p>${post.summary}</p>
      `;
      container.appendChild(article);
    });
  });