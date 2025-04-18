fetch("posts.json")
  .then(response => response.json())
  .then(posts => {
    const container = document.getElementById("posts-container");
    container.innerHTML = "";
    posts.forEach(post => {
      const article = document.createElement("article");
      const linkCompartilhar = "https://wa.me/?text=" + encodeURIComponent("Leia no Blog do Lorim: https://fortaleza1918.github.io/blog-lorim-do-laion-/" + post.link);
      article.innerHTML = `
        <h2><a href="${post.link}">${post.title}</a></h2>
        <p class="data">Publicado em ${post.date}</p>
        <p>${post.summary}</p>
        <p><a href="${linkCompartilhar}" target="_blank">📤 Compartilhar no WhatsApp</a></p>
      `;
      container.appendChild(article);
    });
  });