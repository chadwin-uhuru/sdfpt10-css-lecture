// 1. querySelector - Select the first <h1> and change its text and color
document.querySelector("h1").textContent = "Updated: Welcome to HTML!";
document.querySelector("h1").style.color = "blue";

// 2. querySelectorAll - Select all <li> and give the text color red
document.querySelectorAll("li").forEach(item => {
    item.style.color = "red";
});

// 3. getElementsByTagName - Select all <th> elements and increase their font size
Array.from(document.getElementsByTagName("th")).forEach(th => {
    th.style.fontSize = "24px";  // Increased font size
});

// 4. getElementsByClassName - Select the element with the class "image-container" and change background color
Array.from(document.getElementsByClassName("image-container")).forEach(container => {
    container.style.backgroundColor = "lightblue";  // New background color
});

// 5. getElementById - Select the "course-outcomes" and change the background color
document.getElementById("course-outcomes").style.backgroundColor = "yellow";
