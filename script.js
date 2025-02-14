const cardContainer = document.querySelector(".pointer");
const ProjectCardContainer = document.querySelector(".project-pointer");
const PurchaseCardContainer = document.querySelector(".purchash-pointer");
const HouseSubscriptionHunt = document.querySelector(".houseSubscriptionPointer");
const HouseScheduledPointer = document.querySelector(".houseScheduledPointer");
const HouseReportPointer = document.querySelector(".houseScheduledReport");
// search id
const HousePurchaseSearch = document.querySelector("#HousePurchaseSearch");
HousePurchaseSearch.addEventListener("input", displayPurchaseSearch);

const Broker_Investable = [
  {
    date: "12/05/2023",
    img: "./asset/hugeicons_menu.png",
    startDate: "12/01/2024",
    endDate: "12/01/2024",
    ExpiringIn: "06",
    DetailsPending: "05",
    Amount: "499",
    Method: "UPID",
  },
  {
    date: "12/05/2023",
    img: "./asset/hugeicons_menu.png",
    startDate: "12/01/2024",
    endDate: "12/01/2024",
    ExpiringIn: "06",
    DetailsPending: "05",
    Amount: "499",
    Method: "UPID",
  },
  {
    date: "12/05/2023",
    img: "./asset/hugeicons_menu.png",
    startDate: "12/01/2024",
    endDate: "12/01/2024",
    ExpiringIn: "06",
    DetailsPending: "05",
    Amount: "499",
    Method: "UPID",
  },
  {
    date: "12/05/2023",
    img: "./asset/hugeicons_menu.png",
    startDate: "12/01/2024",
    endDate: "12/01/2024",
    ExpiringIn: "06",
    DetailsPending: "05",
    Amount: "499",
    Method: "UPID",
  },
  {
    date: "12/05/2023",
    img: "./asset/hugeicons_menu.png",
    startDate: "12/01/2024",
    endDate: "12/01/2024",
    ExpiringIn: "06",
    DetailsPending: "05",
    Amount: "499",
    Method: "UPID",
  },
];

const Broker_short_Projects = [
  {
    img: "./asset/reports.png",
    date: "12/05/2023",
    Name: "Shripal Shanti",
    place: "Virar",
  },
  {
    img: "./asset/reports2.png",
    date: "12/05/2023",
    Name: "Shripal Shanti",
    place: "Virar",
  },
  {
    img: "./asset/reports3.png",
    date: "12/05/2023",
    Name: "Shripal Shanti",
    place: "Virar",
  },
  {
    img: "./asset/reports4.png",
    date: "12/05/2023",
    Name: "Shripal Shanti",
    place: "Virar",
  },
];
const Broker_purchase_Projects = [
  {
    img: "./asset/reports.png",
    date: "12/05/2023",
    Name: "Shripal Shanti",
    place: "Virar",
  },
  {
    img: "./asset/reports2.png",
    date: "12/05/2023",
    Name: "viral Shanti",
    place: "myshor",
  },
  {
    img: "./asset/reports3.png",
    date: "12/05/2023",
    Name: "chippan Shanti",
    place: "Kolkata",
  },
  {
    img: "./asset/reports4.png",
    date: "12/05/2023",
    Name: "Gopal Shanti",
    place: "Chennai",
  },
];

const House_Hunt_Subscription = [
  {
    date: "12/05/2023",
    img: "./asset/hugeicons_menu.png",
    startDate: "12/01/2024",
    endDate: "12/01/2024",
    ExpiringIn: "06",
    DetailsPending: "05",
    Amount: "499",
    Method: "UPID",
  },
  {
    date: "12/05/2023",
    img: "./asset/hugeicons_menu.png",
    startDate: "12/01/2024",
    endDate: "12/01/2024",
    ExpiringIn: "06",
    DetailsPending: "05",
    Amount: "499",
    Method: "UPID",
  },
  {
    date: "12/05/2023",
    img: "./asset/hugeicons_menu.png",
    startDate: "12/01/2024",
    endDate: "12/01/2024",
    ExpiringIn: "06",
    DetailsPending: "05",
    Amount: "499",
    Method: "UPID",
  },
  {
    date: "12/05/2023",
    img: "./asset/hugeicons_menu.png",
    startDate: "12/01/2024",
    endDate: "12/01/2024",
    ExpiringIn: "06",
    DetailsPending: "05",
    Amount: "499",
    Method: "UPID",
  },
  {
    date: "12/05/2023",
    img: "./asset/hugeicons_menu.png",
    startDate: "12/01/2024",
    endDate: "12/01/2024",
    ExpiringIn: "06",
    DetailsPending: "05",
    Amount: "499",
    Method: "UPID",
  },
];
const House_Hunt_Scheduled = [
  {
    date: "12/05/2023",
    img: "./asset/hugeicons_menu.png",
    startDate: "12/01/2024",
    endDate: "12/01/2024",
    ExpiringIn: "06",
    DetailsPending: "05",
    Amount: "499",
    Method: "UPID",
  },
  {
    date: "12/05/2023",
    img: "./asset/hugeicons_menu.png",
    startDate: "12/01/2024",
    endDate: "12/01/2024",
    ExpiringIn: "06",
    DetailsPending: "05",
    Amount: "499",
    Method: "UPID",
  },
  {
    date: "12/05/2023",
    img: "./asset/hugeicons_menu.png",
    startDate: "12/01/2024",
    endDate: "12/01/2024",
    ExpiringIn: "06",
    DetailsPending: "05",
    Amount: "499",
    Method: "UPID",
  },
  {
    date: "12/05/2023",
    img: "./asset/hugeicons_menu.png",
    startDate: "12/01/2024",
    endDate: "12/01/2024",
    ExpiringIn: "06",
    DetailsPending: "05",
    Amount: "499",
    Method: "UPID",
  },
  {
    date: "12/05/2023",
    img: "./asset/hugeicons_menu.png",
    startDate: "12/01/2024",
    endDate: "12/01/2024",
    ExpiringIn: "06",
    DetailsPending: "05",
    Amount: "499",
    Method: "UPID",
  },
];

const House_Hunt_Reports =[
    {
        img: "./asset/reports.png",
        date: "12/05/2023",
        Name: "Shripal Shanti",
        place: "Virar",
      },
      {
        img: "./asset/reports2.png",
        date: "12/05/2023",
        Name: "Shripal Shanti",
        place: "Virar",
      },
      {
        img: "./asset/reports3.png",
        date: "12/05/2023",
        Name: "Shripal Shanti",
        place: "Virar",
      },
      {
        img: "./asset/reports4.png",
        date: "12/05/2023",
        Name: "Shripal Shanti",
        place: "Virar",
      },
]


  

if (HouseScheduledPointer) {
  House_Hunt_Scheduled.forEach((ele) => {
    HouseScheduledPointer.innerHTML += `
        <div class="card">
            <div class="card-body">
                <div class="card-body-header">
                    <div class="card-body-header-div1">
                        <h5 class="card-title">Archived</h5>
                        <p class="text-muted">${ele.date}</p>
                    </div>
                    <div class="card-body-header-div1" onclick="toggleMenu(this)">
                        <img src="${ele.img}" alt="Menu">
                    </div>
                    <div class="card-body-header-sidediv">
                        <div class="menu-item">View Recording</div>
                        <div class="menu-item">Feedback</div>
                        <hr>
                        <div class="menu-item">Book an Appointment</div>
                        <div class="menu-item">Download PDF</div>
                    </div>
                </div>
                <hr>
                <div class="card-body-div">
                    <div class="card-body-div2">
                        <strong>Start Date:</strong>
                        <strong>End Date:</strong>
                        <strong>Expiring in:</strong>
                        <strong>Details Pending:</strong>
                        <strong>Amount:</strong>
                        <strong>Method:</strong>
                    </div>
                    <div class="card-body-div1">
                        <p>${ele.startDate}</p>
                        <p>${ele.endDate}</p>
                        <p>${ele.ExpiringIn} days</p>
                        <p>${ele.DetailsPending} Reports</p>
                        <p>${ele.Amount}</p>
                        <p>${ele.Method}</p>
                    </div>
                </div>
            </div>
        </div>`;
  });
}

if (HouseSubscriptionHunt) {
  House_Hunt_Subscription.forEach((ele) => {
    HouseSubscriptionHunt.innerHTML += `
        <div class="card">
            <div class="card-body">
                <div class="card-body-header">
                    <div class="card-body-header-div1">
                        <h5 class="card-title">Archived</h5>
                        <p class="text-muted">${ele.date}</p>
                    </div>
                    <div class="card-body-header-div1" onclick="toggleMenu(this)">
                        <img src="${ele.img}" alt="Menu">
                    </div>
                    <div class="card-body-header-sidediv">
                        <div class="menu-item">View Recording</div>
                        <div class="menu-item">Feedback</div>
                        <hr>
                        <div class="menu-item">Book an Appointment</div>
                        <div class="menu-item">Download PDF</div>
                    </div>
                </div>
                <hr>
                <div class="card-body-div">
                    <div class="card-body-div2">
                        <strong>Start Date:</strong>
                        <strong>End Date:</strong>
                        <strong>Expiring in:</strong>
                        <strong>Details Pending:</strong>
                        <strong>Amount:</strong>
                        <strong>Method:</strong>
                    </div>
                    <div class="card-body-div1">
                        <p>${ele.startDate}</p>
                        <p>${ele.endDate}</p>
                        <p>${ele.ExpiringIn} days</p>
                        <p>${ele.DetailsPending} Reports</p>
                        <p>${ele.Amount}</p>
                        <p>${ele.Method}</p>
                    </div>
                </div>
            </div>
        </div>`;
  });
} else {
  console.error("No element found with class 'pointer'.");
}
if (cardContainer) {
  Broker_Investable.forEach((ele) => {
    cardContainer.innerHTML += `
        <div class="card">
            <div class="card-body">
                <div class="card-body-header">
                    <div class="card-body-header-div1">
                        <h5 class="card-title">Archived</h5>
                        <p class="text-muted">${ele.date}</p>
                    </div>
                    <div class="card-body-header-div1" onclick="toggleMenu(this)">
                        <img src="${ele.img}" alt="Menu">
                    </div>
                    <div class="card-body-header-sidediv">
                        <div class="menu-item">View Recording</div>
                        <div class="menu-item">Feedback</div>
                        <hr>
                        <div class="menu-item">Book an Appointment</div>
                        <div class="menu-item">Download PDF</div>
                    </div>
                </div>
                <hr>
                <div class="card-body-div">
                    <div class="card-body-div2">
                        <strong>Start Date:</strong>
                        <strong>End Date:</strong>
                        <strong>Expiring in:</strong>
                        <strong>Details Pending:</strong>
                        <strong>Amount:</strong>
                        <strong>Method:</strong>
                    </div>
                    <div class="card-body-div1">
                        <p>${ele.startDate}</p>
                        <p>${ele.endDate}</p>
                        <p>${ele.ExpiringIn} days</p>
                        <p>${ele.DetailsPending} Reports</p>
                        <p>${ele.Amount}</p>
                        <p>${ele.Method}</p>
                    </div>
                </div>
            </div>
        </div>`;
  });
} else {
  console.error("No element found with class 'pointer'.");
}

function displayPurchaseSearch() {
  if (PurchaseCardContainer) {
    const searchTerm = HousePurchaseSearch.value.trim().toLowerCase();
    console.log("searchterm:", searchTerm);

    // Filtering logic
    const filteredProducts = Broker_purchase_Projects.filter(
      (ele) =>
        ele.Name.toLowerCase().includes(searchTerm) ||
        ele.date.includes(searchTerm) ||
        ele.place.toLowerCase().includes(searchTerm)
    );

    console.log("filteredProduct:", filteredProducts);

    // If no match, display all products
    const finalProducts =
      filteredProducts.length > 0 ? filteredProducts : Broker_purchase_Projects;
    console.log("finalProducts:", finalProducts);

    // Clear existing content before adding new filtered results
    PurchaseCardContainer.innerHTML = "";

    finalProducts.forEach((ele) => {
      PurchaseCardContainer.innerHTML += `
                <div class="card-width">
                    <div class="card-width-body">
                        <img src="${ele.img}" class="card-width-body-img">
                        <div class="card-body1">
                            <p class="card-width-body-p">${ele.date}</p>
                            <h3>${ele.Name}</h3>
                            <p>${ele.place}</p>
                            <hr>
                            <div class="card-width-body-high">
                                <div class="card-width-body-high-div1">
                                    <h4>528</h4>
                                    <p>Investable Score</p>
                                    <h5>High</h5>
                                </div>
                                <div class="card-width-body-high-div1">
                                    <h4>1.8X</h4>
                                    <p>Price Projection</p>
                                    <h5>High</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
    });
  } else {
    console.error("No element found with class 'pointer'.");
  }
}
if (ProjectCardContainer) {
  Broker_short_Projects.forEach((ele) => {
    ProjectCardContainer.innerHTML += `
         <div class="card-width">
                                        <div class="card-width-body">
                                            <img src=${ele.img} class="card-width-body-img">
                                            <div class="card-body1">
                                                <p class="card-width-body-p">${ele.date}</p>
                                                <h3>${ele.Name}</h3>
                                                <p>${ele.place}</p>
                                                <hr>
                                                <div class="card-width-body-high">
                                                    <div class="card-width-body-high-div1">
                                                        <h4>528</h4>
                                                        <p>Investable Score</p>
                                                        <h5>High</h5>
                                                    </div>
                                                    <div class="card-width-body-high-div1">
                                                        <h4>1.8X</h4>
                                                        <p>Price Projection</p>
                                                        <h5>High</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
        `;
  });
} else {
  console.error("No element found with class 'Project-pointer'.");
}
if (HouseReportPointer) {
    House_Hunt_Reports.forEach((ele) => {
        HouseReportPointer.innerHTML += `
           <div class="card-width">
                                          <div class="card-width-body">
                                              <img src=${ele.img} class="card-width-body-img">
                                              <div class="card-body1">
                                                  <p class="card-width-body-p">${ele.date}</p>
                                                  <h3>${ele.Name}</h3>
                                                  <p>${ele.place}</p>
                                                  <hr>
                                                  <div class="card-width-body-high">
                                                      <div class="card-width-body-high-div1">
                                                          <h4>528</h4>
                                                          <p>Investable Score</p>
                                                          <h5>High</h5>
                                                      </div>
                                                      <div class="card-width-body-high-div1">
                                                          <h4>1.8X</h4>
                                                          <p>Price Projection</p>
                                                          <h5>High</h5>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
  
                                      </div>
          `;
    });
  } else {
    console.error("No element found with class 'Project-pointer'.");
  }

displayPurchaseSearch();

const scrollbarThumb = document.querySelector(".scrollbar-thumb");
const content = document.querySelector(".content");
const scrollbarSections = document.querySelectorAll(".scrollbar-sections div");

// Calculate scrollbar thumb height based on content height
const contentHeight = content.scrollHeight;
const containerHeight = window.innerHeight; // Page height
const scrollbarHeight = containerHeight / 2; // Half the page height
const thumbHeight = (scrollbarHeight / contentHeight) * scrollbarHeight;
scrollbarThumb.style.height = `${thumbHeight}px`;

// Update scrollbar thumb position on content scroll
content.addEventListener("scroll", () => {
  const scrollPercentage =
    content.scrollTop / (content.scrollHeight - containerHeight);
  const thumbPosition = scrollPercentage * (scrollbarHeight - thumbHeight);
  scrollbarThumb.style.top = `${thumbPosition}px`;
});

// Drag scrollbar thumb to scroll content
scrollbarThumb.addEventListener("mousedown", (e) => {
  e.preventDefault();
  const startY = e.clientY;
  const startTop = parseFloat(scrollbarThumb.style.top) || 0;

  const onMouseMove = (e) => {
    const deltaY = e.clientY - startY;
    let newTop = startTop + deltaY;

    // Constrain thumb within scrollbar
    newTop = Math.max(0, Math.min(newTop, scrollbarHeight - thumbHeight));

    scrollbarThumb.style.top = `${newTop}px`;

    // Calculate corresponding scroll position for content
    const scrollPercentage = newTop / (scrollbarHeight - thumbHeight);
    content.scrollTop =
      scrollPercentage * (content.scrollHeight - containerHeight);
  };

  const onMouseUp = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  };

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
});

// Scroll to section when clicking on section names
scrollbarSections.forEach((section, index) => {
  section.addEventListener("click", () => {
    const targetSection = document.querySelector(`#section${index + 1}`);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.querySelectorAll(".sidebar-item").forEach((item, index) => {
  item.addEventListener("mouseenter", () => {
    const section = document.querySelectorAll(".section")[index];
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.getElementById("navbarToggler");
  const collapse = document.getElementById("navbarSupportedContent");

  toggler.addEventListener("click", function () {
    // Toggle the 'show' class on the collapsible content
    collapse.classList.toggle("show");
  });
});
// toggle functionality of card menu
function toggleMenu(icon) {
  const dropdownMenu = icon.nextElementSibling;
  dropdownMenu.classList.toggle("show");
  document.addEventListener("click", function closeMenu(event) {
    if (!icon.contains(event.target)) {
      dropdownMenu.classList.remove("show");
      document.removeEventListener("click", closeMenu);
    }
  });
}
