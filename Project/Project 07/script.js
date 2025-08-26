// Sample data for government departments
const departments = [
  { name: "Education Department", status: "Public" },
  { name: "Health & Welfare", status: "Partial" },
  { name: "Transportation", status: "Hidden" },
  { name: "Public Works", status: "Public" },
  { name: "Environmental Agency", status: "Partial" },
  { name: "Housing & Urban Development", status: "Public" },
  { name: "Parks & Recreation", status: "Public" },
  { name: "Finance Department", status: "Public" },
  { name: "Emergency Services", status: "Partial" },
  { name: "Cultural Affairs", status: "Hidden" }
];

// Function to create department cards
function createDepartmentCard(dept) {
  const card = document.createElement('div');
  card.className = 'department-card';

  const name = document.createElement('div');
  name.className = 'department-name';
  name.textContent = dept.name;

  const status = document.createElement('div');
  status.className = 'transparency-status';

  // Assign class based on status for color
  if (dept.status === "Public") {
    status.classList.add('status-public');
    status.textContent = 'Publicly Transparent';