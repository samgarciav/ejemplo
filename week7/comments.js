export default class Comment {
  constructor() {
    this.parentComments = document.getElementById("comments");
  }

  renderAddComments() {
    this.parentComments.innerHTML = "";
    const div = document.createElement("div");
    div.innerHTML = `<div class="addComments">
    <h2>Add a comment</h2>
    <input type="text" id="commentEntry" />
    <button id="commentSubmit">Comment</button>
    </div>`;
    this.parentComments.appendChild(div);
  }

  showComments(hike) {
    hike == null ? this.parentComments.innerHTML = "" : null;
    const div = document.createElement("div");
    div.setAttribute("id", "justComments");
    div.innerHTML = `<h2>Comments</h2>`;
    const ul = document.createElement("ul");

    const comments = JSON.parse(localStorage.getItem("commentsList"));
    if (comments != null) {
      this.getComments(hike).forEach((comment) => {
        ul.appendChild(renderComments(comment));
      });
    }

    div.appendChild(ul);
    this.parentComments.appendChild(div);
  }

  getComments(hike) {
    const comments = JSON.parse(localStorage.getItem("commentsList"));
    if (hike == null) {
       return comments;
       
    } else {
      return comments.filter(c => c.name == hike);
    }
  }

  makeButtonWork(hike) {
    const button = document.getElementById("commentSubmit");
    button.onclick = () => {
      const commentEntry = document.getElementById("commentEntry").value;
      const comment = new Commentaries(hike, commentEntry);
      saveComment(comment);
      document.getElementById("commentEntry").value = "";
      document.getElementById("justComments").remove();
      this.showComments(hike);
    };
  }
}

class Commentaries {
  constructor(hike, commentContent) {
    this.name = hike;
    this.content = commentContent;
    this.date = new Date();
  }
}

// Rendering the Comments section
function renderComments(comment) {
  const li = document.createElement("li");
  li.innerHTML = `${comment.name}: ${comment.content}`;
  return li;
}

function saveComment(comment) {
  if (localStorage.getItem("commentsList") == null) {
    const comments = [];
    comments.push(comment);
    localStorage.setItem("commentsList", JSON.stringify(comments))
  } else {
    const comments = JSON.parse(localStorage.getItem("commentsList"))
    comments.push(comment);
    localStorage.setItem("commentsList", JSON.stringify(comments))
  }
}