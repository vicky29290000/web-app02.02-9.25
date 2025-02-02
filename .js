document.addEventListener("DOMContentLoaded", () => {
  // Navigation
  const navLinks = document.querySelectorAll("nav a")
  const contentSections = document.querySelectorAll(".content")

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const targetId = link.getAttribute("href").substring(1)

      navLinks.forEach((l) => l.classList.remove("active"))
      link.classList.add("active")

      contentSections.forEach((section) => {
        section.classList.remove("active")
        if (section.id === targetId) {
          section.classList.add("active")
        }
      })
    })
  })

  // Budget Chart
  const ctx = document.getElementById("budget-chart").getContext("2d")
  // Import Chart.js library.  This needs to be added to your HTML file as a script tag.  Example: <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Spent", "Remaining"],
      datasets: [
        {
          data: [300000, 700000],
          backgroundColor: ["#e74c3c", "#2ecc71"],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Budget Overview",
      },
    },
  })

  // Simulated login (replace with actual authentication)
  const users = [
    { username: "user1", password: "pass1", name: "John Doe", photo: "/placeholder.svg?height=40&width=40" },
    { username: "user2", password: "pass2", name: "Jane Smith", photo: "/placeholder.svg?height=40&width=40" },
  ]

  const loginForm = document.createElement("form")
  loginForm.innerHTML = `
        <input type="text" id="username" placeholder="Username" required>
        <input type="password" id="password" placeholder="Password" required>
        <button type="submit">Login</button>
    `

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    const user = users.find((u) => u.username === username && u.password === password)

    if (user) {
      document.getElementById("user-photo").src = user.photo
      document.getElementById("user-name").textContent = user.name
      document.getElementById("app").style.display = "flex"
      loginForm.style.display = "none"
    } else {
      alert("Invalid username or password")
    }
  })

  // Display login form
  document.body.insertBefore(loginForm, document.getElementById("app"))
  document.getElementById("app").style.display = "none"
})

