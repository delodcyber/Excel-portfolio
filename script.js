// PROJECT DATA
const projects=[
{title:"Project 1",problem:"Problem statement placeholder",image:"assets/project1.jpg",page:"projects/project1.html",excel:"#"},
{title:"Project 2",problem:"Problem statement placeholder",image:"assets/project2.jpg",page:"projects/project2.html",excel:"#"},
{title:"Project 3",problem:"Problem statement placeholder",image:"assets/project3.jpg",page:"projects/project3.html",excel:"#"},
{title:"Project 4",problem:"Problem statement placeholder",image:"assets/project4.jpg",page:"projects/project4.html",excel:"#"},
{title:"Project 5",problem:"Problem statement placeholder",image:"assets/project5.jpg",page:"projects/project5.html",excel:"#"}];
// RENDER PROJECT CARDS
const c=document.getElementById('projects');
projects.forEach(p=>{c.innerHTML+=`<div class="card"><img src="${p.image}" alt="" style="width:100%"><h3>${p.title}</h3><p>${p.problem}</p><a href="${p.page}">Case Study</a> | <a href="${p.excel}">Live Dashboard</a></div>`});
