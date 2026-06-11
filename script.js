 
const roles = ["frontend developer", "UI designer" ];
let i = 0; 
let j = 0; 
let typing = true;

const typingElement = document.getElementById("typing");

function typeWriter() {
  if (typing) {
    if (j < roles[i].length) {
      typingElement.textContent += roles[i][j];
      j++;
      setTimeout(typeWriter, 150); 
    } else {
      typing = false;
      setTimeout(typeWriter, 1000); 
    }
  } else {
    if (j > 0) {
      typingElement.textContent = roles[i].substring(0, j-1);
      j--;
      setTimeout(typeWriter, 100); 
    } else {
      typing = true;
      i = (i + 1) % roles.length;
      setTimeout(typeWriter, 500); 
    }
  }
}

typeWriter();
