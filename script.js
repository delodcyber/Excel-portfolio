// PROJECT DATA
const projects=[
{
    title:"Project 1",
    problem:"Evaluate call center performance and identify opportunities to improve customer service",
    image:"images/project1.jpg",
    page:"projects/project1.html",
},
{
    title:"Project 2",
    problem:"Analyze customer booking data to support management reporting and decision-making",
    image:"images/project2.jpg",
    page:"projects/project2.html",
},
{
    title:"Project 3",
    problem:"Evaluate dealership sales performance across salespeople, stores, and inventory",
    image:"images/project3.jpg",
    page:"projects/project3.html",
},
{
    title:"Project 4",
    problem:"Monitor student academic performance through an interactive performance dashboard",
    image:"images/project4-dash.jpg",
    page:"projects/project4.html",
},
{
    title:"Project 5",
    problem:"Analyze customer survey data to improve restaurant sales and customer satisfaction",
    image:"images/project5.jpg",
    page:"projects/project5.html",
}];
// RENDER PROJECT CARDS
const c = document.getElementById('projects');
projects.forEach(p => {
  const card = document.createElement('a');
  card.className = 'card card-link';
  card.href = p.page;
  card.innerHTML = `
    <img src="${p.image}" alt="${p.title} screenshot" style="width:100%"; height="160px" />
    <h3>${p.title}</h3>
    <p>${p.problem}</p>
  `;

  c.append(card);
});
