document.addEventListener("DOMContentLoaded", (e) => {
  alert(`The content of the DOM is loaded`);
  let rootUl = document.querySelector("ul");
  quotes.forEach((element, i) => {
    if (i < 3) {
      let li = document.createElement("li");
      let p = document.createElement("p");
      p.innerText = element.quoteText;
      let cite = document.createElement("cite");
      cite.innerText = `- ${element.quoteAuthor}`;
      li.append(p, cite);
      rootUl.append(li);
    } else {
      window.addEventListener("scroll", () => {
        let scrollable =
          document.documentElement.scrollHeight - window.innerHeight;
        let scroll = window.scrollY;
        if (scrollable === scroll) {
          quotes.forEach((element, i) => {
            if (i > 3) {
              let li = document.createElement("li");
              let p = document.createElement("p");
              p.innerText = element.quoteText;
              let cite = document.createElement("cite");
              cite.innerText = `- ${element.quoteAuthor}`;
              li.append(p, cite);
              rootUl.append(li);
            }
          });
        }
      });
    }
  });
});
