function fetchUser() {
  // showSpinner();
  fetch("https://randomuser.me/api/")
    .then((Response) => Response.json())
    .then((data) => {
      //  hideSpinner();
      displayUser(data.results[0]);
    });
}
function displayUser(user) {
  const userInfo = document.querySelector("#user");
  if (user.gender === "male") {
    document.body.style.backgroundColor = "#3DB6B1";
  } else {
    document.body.style.backgroundColor = "#1581BF";
  }
  const heading = document.querySelector("h1");
  heading.textContent = `${user.name.first} ${user.name.last}`;
  // heading.style.color = 'red';
  heading.style.fontWeight = "bold";
  heading.style.fontSize = "40px";
  heading.style.position = "fixed";
  heading.style.left = "50%";
  heading.style.transform = "translateX(-50%)";
  heading.style.bottom = "20px";
  heading.style.margin = "0";
  document.body.appendChild(heading);

  if (user.gender === "male") {
    heading.style.color = "#F1F3E0";
  } else {
    heading.style.color = "#C1E59F";
  }

  console.log(user);
  userInfo.innerHTML = ` 
    <div class="flex justify-between">
          <div class="flex">
            <img
              class="w-48 h-48 rounded-full mr-8"
              src="${user.picture.large}"
            />
            <div class="space-y-3">
              <p class="text-xl">
                <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
              </p>
               <p class="text-xl">
                <span class="font-bold">Gender: </span>${user.gender}
              </p>
              <p class="text-xl">
                <span class="font-bold">Email: </span> ${user.email}
              </p>
              <p class="text-xl">
                <span class="font-bold">Phone: </span>${user.phone}
              </p>
              <p class="text-xl">
                <span class="font-bold">Location: </span> ${user.location.city}
              </p>
              <p class="text-xl">
                <span class="font-bold">Country: </span>${user.location.country}
              </p>
              <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
            </div>
          </div>
        </div>
      </div>
    `;
}
function showSpinner() {
  document.getElementById("spinner").style.display = "none";
}

document.body.style.transition = "background-color 0.9s ease";
document.querySelector("#generate").addEventListener("click", fetchUser);
fetchUser();
