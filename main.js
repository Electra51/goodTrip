import './style.css'
import {
  Tab,
  initTE,
} from "tw-elements";

initTE({ Tab });


// const wrapper = document.querySelector(".wrapper"),
//   selectBtn = wrapper.querySelector(".select-btn");
// const options = wrapper.querySelector(".options");
// let countryInfo = [
//   {
//     title: "Hyderabad, India",
//     para: "Rajiv Gandhi International Airport",
//     short: "HYD",
//     icon: "uil uil-plane-departure"
//   },
//   {
//     title: "Hylok India",
//     para: "Rajiv Gandhi International Airport",
//     short: "HYD",
//     icon: "uil uil-plane-departure"
//   },
//   {
//     title: "lk, India",
//     para: "Rajiv Gandhi International Airport",
//     short: "HYD",
//     icon: "uil uil-plane-departure"
//   }, {
//     title: "Hyderabadlo",
//     para: "Rajiv Gandhi International Airport",
//     short: "HYD",
//     icon: "uil uil-plane-departure"
//   }, {
//     title: "India",
//     para: "Rajiv Gandhi International Airport",
//     short: "HYD",
//     icon: "uil uil-plane-departure"
//   }
// ]
// // window.updateName = updateName
// function updateName(selectedLi) {
//   console.log(selectedLi)
//   // selectBtn.firstElementChild.innerHTML = selectedLi.innerHTML
// }
// // updateName()
// function addCountry() {
//   console.log(countryInfo)
//   countryInfo.forEach(country => {
//     console.log(country.icon)
//     let li = ` <li onclick="updateName(this)">
//           <div class="flex"> <i class="uil uil-plane-departure"></i> <div><p>${country.title}</p>
//             <p>${country.para}</p></div>
//             <p>${country.short}</p>
//           </div></li>`
//     options.insertAdjacentHTML("beforeend", li)
//   })

// }


// addCountry();






// selectBtn.addEventListener("click", () => {
//   wrapper.classList.toggle("active")
// })


const selectBox = document.querySelector('.select-box');
const selectOption = document.querySelector('.select-option');
const soValue = document.querySelector('#soValue');
const optionSearch = document.querySelector('#optionSearch');
const options = document.querySelector('.options');
const optionsList = document.querySelectorAll('.options li');
selectOption.addEventListener('click', function () {
  selectBox.classList.toggle('active');
});

optionsList.forEach(function (optionsListSingle) {
  optionsListSingle.addEventListener('click', function () {
    let text = this.textContent;
    console.log(text);
    soValue.value = text;
    selectBox.classList.remove("active");
  })
})



optionSearch.addEventListener('keyup', function () {
  var filter, li, i, textValue;
  filter = optionSearch.value.toUpperCase(); li = options.getElementsByTagName('li'); for (i = 0; i < li.length; i++) {
    let liCount = li[i];

    textValue = liCount.textContent || liCount.innerText; if (textValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
})