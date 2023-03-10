// window.onscroll = function() {myFunction()};
// let sticky = nav.offsetTop;

// function myFunction() {
//         if (window.pageYOffset >= sticky) {
//           navbar.classList.add("sticky")
//         } else {
//           navbar.classList.remove("sticky");
//         }
//       }

// let topbutton = document.querySelector("#topBtn");
// let sidenav = document.querySelector(".quick-menu");

function navDropdown(parameters) {
  dropIcon.classList.toggle("fa-times");
  let myNav = document.getElementById("navBar");
  if (myNav.className === "nav" && parameters == "dropdownAll") {
    myNav.className += " responsive";
    category.style.setProperty("background-color", "#535353", "important");
    category.style.setProperty("color", "white", "important");
    cate.style.setProperty("justify-content", "center", "important");
    cateAngle.style.setProperty("display", "flex", "important");
  } else if (myNav.className === "nav" && parameters == "browseAll") {
    myNav.className += " responsive";
    loginSignupOnSmallScreen.style.setProperty("display", "none", "important");
    tracksOnSmallScreen.style.setProperty("display", "none", "important");
    category.style.setProperty("background-color", "#535353", "important");
    category.style.setProperty("color", "white", "important");
    cate.style.setProperty("justify-content", "center", "important");
    cateAngle.style.setProperty("display", "flex", "important");
  } else {
    myNav.className = "nav";
    // dropIcon.classList.toggle("fa-border-all");
  }
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 130 ||
    document.documentElement.scrollTop > 130
  ) {
    navBar.style.top = "-40px";
  } else {
  }
}

closeThis = () => {
  shut = false;
  cate.innerText = `Categories`;
  bringItUp.style.setProperty("display", "none", "important");
  if (cate.innerText === `Categories`) {
    shut = true;
  }
  if (shut) {
  }
};

dropDropdown = (parameter) => {
  bringItUp.innerHTML = "";
  bringItUp.style.setProperty("display", "flex", "important");
  if (parameter == "computer") {
    cate.innerText = `Computers and Accessories`;
    bringItUp.innerHTML = `
    <a href="" class="d-flex justify-content-between">laptops<i class="fas fa-angle-right fs-3"></i></a>
    <a href="" class="d-flex justify-content-between">desktop and monitors<i class="fas fa-angle-right fs-3"></i></a>
    <a href="" class="d-flex justify-content-between">computing accessories<i class="fas fa-angle-right fs-3"></i></a>
    <a href="" class="d-flex justify-content-between">printers, scanner and accessories<i class="fas fa-angle-right fs-3"></i></a>
    <a href="" class="d-flex justify-content-between">wifi and network<i class="fas fa-angle-right fs-3"></i></a>
    <a href="" class="d-flex justify-content-between">pC gaming<i class="fas fa-angle-right fs-3"></i></a>
    <a href="" class="d-flex justify-content-between">software<i class="fas fa-angle-right fs-3"></i></a>
    <a href="" class="d-flex justify-content-between">projectors<i class="fas fa-angle-right fs-3"></i></a>
    <footer class="d-flex gap-3 w-100 mt-auto" style="height: 40px; margin-bottom: 100px;">
    <i class="fas fa-phone my-auto"></i>
    <div class="my-auto">Contact Us</div>
    </footer>
    `;
  } else if (parameter == "phone") {
    cate.innerText = `Phones and Tablets`;
    bringItUp.innerHTML = `
    <a href="" class="d-flex justify-content-between">mobile phones<i class="fas fa-angle-right fs-3"></i></a>
    <a href="" class="d-flex justify-content-between">mobile phones accessories<i class="fas fa-angle-right fs-3"></i></a>
    <a href="" class="d-flex justify-content-between">tablets<i class="fas fa-angle-right fs-3"></i></a>
    <a href="" class="d-flex justify-content-between">tablets and accessories<i class="fas fa-angle-right fs-3"></i></a>
    <a href="" class="d-flex justify-content-between">shop by price<i class="fas fa-angle-right fs-3"></i></a>
    <footer class="d-flex gap-3 w-100 mt-auto" style="height: 40px; margin-bottom: 100px;">
    <i class="fas fa-phone my-auto"></i>
    <div class="my-auto">Contact Us</div>
    </footer>
    `;
  } else if (parameter == "electronics") {
    cate.innerText = `Electronics`;
    bringItUp.innerHTML = `
    <a href="" class="d-flex justify-content-between">television<i class="fas fa-angle-right fs-3"></i></a>
    <a href="" class="d-flex justify-content-between">DVD players and recorders<i class="fas fa-angle-right fs-3"></i></a>
    <a href="" class="d-flex justify-content-between">cameras<i class="fas fa-angle-right fs-3"></i></a>
    <a href="" class="d-flex justify-content-between">accessories<i class="fas fa-angle-right fs-3"></i></a>
    <a href="" class="d-flex justify-content-between">home theaters and audio systems<i class="fas fa-angle-right fs-3"></i></a>
    <a href="" class="d-flex justify-content-between">gams and consoles<i class="fas fa-angle-right fs-3"></i></a>
    <a href="" class="d-flex justify-content-between">electronics bundles<i class="fas fa-angle-right fs-3"></i></a>
    <footer class="d-flex gap-3 w-100 mt-auto" style="height: 40px; margin-bottom: 100px;">
    <i class="fas fa-phone my-auto"></i>
    <div class="my-auto">Contact Us</div>
    </footer>
    `;
  }
};

// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

// const dropdowns = Array.from(
//   document.getElementsByClassName("dropdown-content")
// );
// const dropdownButtons = Array.from(document.getElementsByClassName("dropbtn"));

// let currentDropdown = 0;
// let dropdownAmount = 0;

// dropdownButtons.forEach(function (dropdownBtn, index) {
//   dropdownBtn.addEventListener("mouseover", function (e) {
//     e.stopPropagation();
//     dropdowns[index].classList.toggle("show");
//     currentDropdown = index;
//     dropdownAmount++;

//     if (dropdownAmount > 1) {
//       // closes other dropdowns if more than one is open
//       for (let i = 0; i < dropdowns.length; i++) {
//         const openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains("show") && i !== currentDropdown) {
//           openDropdown.classList.remove("show");
//         }
//       }
//       dropdownAmount = 1;
//     }
//   });
// });

// window.addEventListener("click", function (event) {
//   for (let i = 0; i < dropdowns.length; i++) {
//     const openDropdown = dropdowns[i];
//     if (openDropdown.classList.contains("show")) {
//       openDropdown.classList.remove("show");
//     }
//     dropdownAmount = 0;
//   }
// });

let allProducts = [];
if (localStorage.companyProduct) {
  allProducts = JSON.parse(localStorage.getItem("companyProduct"));
}

text = () => {
    let products = {
      topDeal: [],
      sponsorProduct: [],
      recommendedProduct: [],
      inspiredProduct: [],
      browsingProduct: [],
      laptops: [],
      smartPhone: [],
      healthBeauty: [],
      groceries: [],
      videoGames: [],
      mobileAccessories: [],
      homeFurnishings: [],
      fitnessToolsEquipment: [],
      kidsWearAccessories: [],
      topDealOnTelevision: [],
    };
    allProducts.push(products);
    localStorage.setItem("companyProduct", JSON.stringify(allProducts));
    window.location.reload()
};

check = () => {
  if (allProducts.length == "") {
  } else {
    adminSponsorPush.disabled = true
  }
}

let allCustomer = [];
if (localStorage.ourCustomerDetails) {
  allCustomer = JSON.parse(localStorage.getItem("ourCustomerDetails"));
}

openAccount = () => {
  // e.preventDefault();
  let foundInRegistry = false;
  for (let index = 0; index < allCustomer.length; index++) {
    if (
      allCustomer[index].phoneNumber == phoneNumber.value ||
      allCustomer[index].email == email.value
    ) {
      foundInRegistry = true;
    }
  }

  if (phoneNumber.value == "" && email.value == "") {
    Swal.fire({
      icon: "warning",
      title: "Try again",
      text: "Please fill out all the field!",
      footer: '<a href="">Why do I have this issue?</a>',
    });
  }
  if (foundInRegistry) {
    Swal.fire({
      icon: "error",
      title: "Details found!",
      text: `This Mobile Number or email has already been registered. \nKindly proceed to Login with your details and if you need any assistance,\nWe are always here to help you. \nContact us: adeoluamole@gmail.com Telephone: 234-7033959586`,
      footer: '<a href="">Why do I have this issue?</a>',
    });
  } else if (foundInRegistry === false && phoneNumber.value != "") {
    let customerDetails = {
      firstName: fName.value,
      lastName: lName.value,
      email: email.value,
      phoneNumber: phoneNumber.value,
      password: password.value,
      totalBalance: 0,
      totalCart: 0,
      allTotalBalance: 0,
      deliveryCharge: 200,
      myCart: [],
      myProductSelect: [],
      myAddress: [],
      myAddressChoice: [],
    };
    allCustomer.push(customerDetails);
    localStorage.setItem("ourCustomerDetails", JSON.stringify(allCustomer));
    sweet()
  }
};

sweet = () => {
  swal.fire("Good job!", "Thank you for creating an account with us at Adex International Limited. Thanks", "success"
  ).then((result) => {
    if (result.isConfirmed) {
      successModalContainer.style.setProperty("display", "none", "important");
      loginOffcanvas.classList.toggle("show")
    }
  })
}

mumu = () => {
  loginOffcanvas.classList.toggle("offcanvas");
}

openSignUpModal = () => {
  successModalContainer.style.setProperty("display", "block", "important");
}

closeMyModal = () => {
  successModalContainer.style.display = "none"
      // window.location.reload()
}

signIn = () => {
  let found = false;
  allCustomer.map((loads, index) => {
    if (
      (allCustomer[index].email == userEmail.value ||
        allCustomer[index].phoneNumber == userEmail.value) &&
      allCustomer[index].password == pass.value
    ) {
      localStorage.setItem("currentCustomerIndex", index);
      found = true;
      // return;
    }
  });
  if (found) {
    signInBtn.innerHTML = "Sign In";
    // alert(signInBtn.innerHTML)
    window.location.href = "index.html";
    // signInBtn.style.setProperty("display", "none", "important")
    // myAccountDropdown.style.setProperty("display", "block", "important")
  } else {
    sweet2();
  }
};

sweet2 = () => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Incorrect details. Try again!",
    footer: '<a href="">Why do I have this issue?</a>',
  });
};


// function readURL(input)
// {
//     img.style.display = "block";
//     if (input.files && input.files[0]) {
//         var reader = new FileReader();

//         reader.onload = function (e) {
//             img.src =  e.target.result;
//         }

//         reader.readAsDataURL(input.files[0]);
//     }
// }

// if(localStorage.getItem('img-BASE64')){
//   document.querySelector('#img').src=localStorage.getItem('img-BASE64')
// }
// function getBase64(file) {
//   return new Promise((resolve,reject)=>{
//   var reader = new FileReader();
//   reader.readAsDataURL(file);
//   reader.onload = function () {
//     resolve(reader.result)
//   };
//   reader.onerror = reject
//   })
// }
// document.querySelector('#adminDealImg').addEventListener('change', async(e)=>{
//   const data = await getBase64(e.target.files[0])
//   console.log(e)
//   localStorage.setItem('img-BASE64', data)
// })

setTodaysDeal = () => {
  for (let index = 0; index < allProducts.length; index++) {
    let topDealProduct = {
      productImg: adminDealImg.value,
      productName: adminDealName.value,
      productOldPrice: adminOldPrice.value,
      productCategory: `product`,
      productNewPrice: adminNewPrice.value,
      productBy: adminDealBy.value,
      productBrand: adminBrand.value,
      productTotalItem: adminTotalItem.value,
      productIDNumber: Math.floor(Math.random() * 1000000),
      productSavePrice: adminOldPrice.value - adminNewPrice.value,
      productOff: Math.ceil(
        ((adminOldPrice.value - adminNewPrice.value) / adminOldPrice.value) *
          100
      ),
    };
    allProducts[index].topDeal.push(topDealProduct);
    localStorage.setItem("companyProduct", JSON.stringify(allProducts));
    localStorage.setItem("currentUserIndex", index);
  }
};

setSponsored = () => {
  for (let index = 0; index < allProducts.length; index++) {
    let topDealProduct = {
      productImg: adminDealImg.value,
      productName: adminDealName.value,
      productOldPrice: adminOldPrice.value,
      productCategory: `product`,
      productNewPrice: adminNewPrice.value,
      productSavePrice: adminOldPrice.value - adminNewPrice.value,
      productOff: Math.ceil(
        ((adminOldPrice.value - adminNewPrice.value) / adminOldPrice.value) *
          100
      ),
    };
    allProducts[index].sponsorProduct.push(topDealProduct);
    localStorage.setItem("companyProduct", JSON.stringify(allProducts));
    // localStorage.setItem("currentUserIndex", index);
  }
};

setRecommended = () => {
  for (let index = 0; index < allProducts.length; index++) {
    let topDealProduct = {
      productImg: adminDealImg.value,
      productName: adminDealName.value,
      productOldPrice: adminOldPrice.value,
      productCategory: `product`,
      productNewPrice: adminNewPrice.value,
      productSavePrice: adminOldPrice.value - adminNewPrice.value,
      productOff: Math.ceil(
        ((adminOldPrice.value - adminNewPrice.value) / adminOldPrice.value) *
          100
      ),
    };
    allProducts[index].recommendedProduct.push(topDealProduct);
    localStorage.setItem("companyProduct", JSON.stringify(allProducts));
    // localStorage.setItem("currentUserIndex", index);
  }
};

setInspired = () => {
  for (let index = 0; index < allProducts.length; index++) {
    let topDealProduct = {
      productImg: adminDealImg.value,
      productName: adminDealName.value,
      productOldPrice: adminOldPrice.value,
      productCategory: `product`,
      productNewPrice: adminNewPrice.value,
      productSavePrice: adminOldPrice.value - adminNewPrice.value,
      productOff: Math.ceil(
        ((adminOldPrice.value - adminNewPrice.value) / adminOldPrice.value) *
          100
      ),
    };
    allProducts[index].inspiredProduct.push(topDealProduct);
    localStorage.setItem("companyProduct", JSON.stringify(allProducts));
    // localStorage.setItem("currentUserIndex", index);
  }
};

setBrowsingHistory = () => {
  for (let index = 0; index < allProducts.length; index++) {
    let topDealProduct = {
      productImg: adminDealImg.value,
      productName: adminDealName.value,
      productOldPrice: adminOldPrice.value,
      productCategory: `product`,
      productNewPrice: adminNewPrice.value,
      productSavePrice: adminOldPrice.value - adminNewPrice.value,
      productOff: Math.ceil(
        ((adminOldPrice.value - adminNewPrice.value) / adminOldPrice.value) *
          100
      ),
    };
    allProducts[index].browsingProduct.push(topDealProduct);
    localStorage.setItem("companyProduct", JSON.stringify(allProducts));
    // localStorage.setItem("currentUserIndex", index);
  }
};

// if(localStorage.getItem('img-BASE64')){
//   document.querySelector('#img').src=localStorage.getItem('img-BASE64')
// }
// function getBase64(file) {
//   return new Promise((resolve,reject)=>{
//   var reader = new FileReader();
//   reader.readAsDataURL(file);
//   reader.onload = function () {
//     resolve(reader.result)
//   };
//   reader.onerror = reject
//   })
// }
// document.querySelector('#adminDealImg').addEventListener('change', async(e)=>{
//   const data = await getBase64(e.target.files[0])
//   localStorage.setItem('img-BASE64', data)
// })
currentUserIndex = localStorage.getItem("currentUserIndex");
currentCustomerIndex = localStorage.getItem("currentCustomerIndex");

setEachCartItem = (setEach) => {
  allCustomer = JSON.parse(localStorage.getItem("ourCustomerDetails"));
  eachTopDealProduct = allCustomer[currentCustomerIndex].myProductSelect;
  for (let index = 0; index < eachTopDealProduct.length; index++) {
    let myCartHistory = {
      cartName: eachTopDealProduct[setEach].productSelectName,
      cartPrice: eachTopDealProduct[setEach].productSelectNewPrice,
      cartSoldBy: eachTopDealProduct[setEach].productSelectSoldBy,
      eachCartTotalPrice: eachTopDealProduct[setEach].productSelectNewPrice,
      eachItemNumber: eachTopDealProduct[setEach].productNumberOfItem + 1,
      eachItemTotalAvailable:
        eachTopDealProduct[setEach].productSelectTotalItem,
    };
    allCustomer[currentCustomerIndex].myCart.push(myCartHistory);
    localStorage.setItem("ourCustomerDetails", JSON.stringify(allCustomer));
    allCustomer[currentCustomerIndex].totalBalance =
      Number(allCustomer[currentCustomerIndex].totalBalance) +
      Number(eachTopDealProduct[index].productSelectNewPrice);
    allCustomer[currentCustomerIndex].totalCart =
      Number(allCustomer[currentCustomerIndex].totalCart) +
      Number(eachTopDealProduct[index].productNumberOfItem + 1);
    localStorage.setItem("ourCustomerDetails", JSON.stringify(allCustomer));
    window.location.href = "shoppingCart.html";
  }
};

showMyCart = () => {
  eachShoppingCart.innerHTML = "";
  myName.innerHTML = allCustomer[currentCustomerIndex].firstName;
  myNameLS.innerHTML = allCustomer[currentCustomerIndex].firstName;
  eachTopDealProduct = allCustomer[currentCustomerIndex].myCart;
  eachTopDealProduct.map((eachUser, index) => {
    totalCartNo.innerHTML = allCustomer[currentCustomerIndex].totalCart;
    totalCartNoOnSmallScreen.innerHTML =
      allCustomer[currentCustomerIndex].totalCart;
    eachShoppingCart.innerHTML += `
     <div class="d-flex bg-white px-3 cart-details">
     <div class="w-50 d-flex cart-img">
       <img
         src="Images/browsingHistory1.webp"
         alt=""
         style="width: 150px" class=""
       />
       <div class="d-flex flex-column gap-2 my-auto cart-name">
         <div class="text-capitalize" style="width: 90%">${eachTopDealProduct[index].cartName}</div>
         <div class="d-flex gap-1">
           <span class="my-auto" style="font-size: 12px">Sold by</span>
           <div class="my-auto fw-bold text-capitalize sold-by" style="font-size: 14px">${eachTopDealProduct[index].cartSoldBy}</div>
         </div>
       </div>
     </div>
     <div class="d-flex justify-content-around cart-price" style="width: 30%;">
     <div class="d-flex flex-column gap-2 my-auto">
       <div
       class="d-flex flex-row cart-btn-container "
     >
       <button
         class="btn btn-light btn-sm border fw-bold"
         style="border-radius: 2px 0px 0px 2px"
         onclick="decrement(${index})"
         id="minusBtn"
       >
         -
       </button>
       <button
         class="btn btn-light btn-sm border px-3"
         style="border-radius: 0px 0px 0px 0px"
         id="totalButtonCart"
       >
       ${eachTopDealProduct[index].eachItemNumber}
       </button>
       <button
         class="btn btn-light btn-sm border fw-bold"
         style="border-radius: 0px 2px 2px 0px"
         onclick="increment(${index})"
         id="plusBtn"
       >
         +
       </button>
       </div>
       <div class="d-none" id="leftItems" style="font-size: 12px">Only ${eachTopDealProduct[index].eachItemTotalAvailable} items left</div>
       </div>
     <div class="d-flex flex-column  my-auto">
       <div class="fw-bold fs-5" id="">???${eachTopDealProduct[index].eachCartTotalPrice}</div>
       <div
         class="d-flex gap-1"
         style="color: #bdc7d6; font-size: 14px"
       >
         <div>???${eachTopDealProduct[index].cartPrice}</div>
         <div>x</div>
         <div>${eachTopDealProduct[index].eachItemNumber}</div>
         <div id="totalForEach">Item</div>
       </div>
     </div>
     </div>
     <hr>
     <div
       class="text-end my-auto d-flex flex-column gap-1 cart-action"
       style="width: 20%; font-size: 14px; color: #94004f"
     >
       <div onclick="sav()" class="" style="cursor: pointer"><i class="fas fa-heart"></i>
         Save for Later
       </div>
       <div onclick="del(${index})" class="" style="cursor: pointer"><i class="fas fa-times-circle"></i>
         Remove item
       </div>
     </div>
   </div>
     `;

    subtotalAndTotalPrice.innerHTML = `
     <div id="item">Subtotal ( ${eachTopDealProduct.length} Item )</div>
     <div class="fw-bold" style="font-size: 14px" id="total">???${allCustomer[currentCustomerIndex].totalBalance}</div>
     `;

    orderSummaryOnLargeScreen.innerHTML = `
    <div class=" details-off">
    <div class="d-flex justify-content-between fw-bold details-off">
      <div>Order Summary</div>
      <div class="d-flex gap-2">
        <div>${eachTopDealProduct.length}</div>
        <div id="itemLScreen">Item</div>
      </div>
    </div>
    <hr>
    <div class="d-flex justify-content-between w-100">
          <div class="" style="font-size: 12px; width: 60%;">Delivery Charges:</div>
          <div class="text-end" style="font-size: 10px; width: 35%;">Add your Delivery address at checkout to see delivery charges</div>
    </div>
    <hr>
    <div class="d-flex justify-content-between w-100">
          <div class="" style="font-size: 12px;">Subtotal:</div>
          <div class="fw-bold" style="font-size: 14px;">???${allCustomer[currentCustomerIndex].totalBalance}</div>
    </div>
    <hr>
    <div class="d-flex justify-content-between w-100">
          <div class="fw-bold">Total:</div>
          <div class="fw-bold" style="font-size: 18px;">???${allCustomer[currentCustomerIndex].totalBalance}</div>
    </div>
    <hr>
    <div class="w-100 text-end" style="font-size: 12px; margin-top: -15px; color: #DD9E00;">Excluding delivery charges</div>
  </div>
  <div class="w-100 checkout-btn bg-white p-3">
  <button class="btn text-white fw-bold w-100" style="background-color: #33B27B;" id="paymentForm" onclick="setTotal()">Proceed To Delivery </button>
</div>
    <hr>
     `;
  });

  if (eachTopDealProduct.length == 0) {
    cartMain.innerHTML = `
    <div class="d-flex" id="" style="padding: 0px 20px; height: 100vh; width: 100%;">
      <div class="container-fluid shadow bg-white mx-auto mt-5 d-flex flex-column justify-content-center gap-3 w-100 h-50  empty-cart-container">
        <img src="Images/empty-cart.png" alt="" class="mx-auto" style="width: 100px;">
        <div class="mx-auto fw-bold" style="text-align: center;">Your cart is empty <br> You have not added any item to your cart </div>
      </div>
    </div>
    `;
  }
  if (eachTopDealProduct.length == 1) {
    item.innerHTML = `Subtotal ( ${eachTopDealProduct.length} Item ) `;
    itemLScreen.innerHTML = `Item`;
  } else {
    item.innerHTML = `Subtotal ( ${eachTopDealProduct.length} Items )`;
    itemLScreen.innerHTML = `Items`;
  }
};

setTotal = () => {
  // allCustomer[currentCustomerIndex].allTotalBalance = allCustomer[currentCustomerIndex].totalBalance +  allCustomer[currentCustomerIndex].myAddressChoice[currentCustomerIndex].pickDeliveryCharge
  localStorage.setItem("ourCustomerDetails", JSON.stringify(allCustomer));
  window.location.href = 'completeOrder.html'
}

let count = 0;
increment = (myIncrement) => {
  if (
    eachTopDealProduct[myIncrement].eachItemNumber ==
    eachTopDealProduct[myIncrement].eachItemTotalAvailable
  ) {
    // document.getElementById("leftItems").style.setProperty("display", "block", "important");
    alert(
      `Only ${eachTopDealProduct[myIncrement].eachItemTotalAvailable} items left`
    );
  } else {
    document
      .getElementById("leftItems")
      .style.setProperty("display", "block", "important");
    eachTopDealProduct = allCustomer[currentCustomerIndex].myCart;
    eachTopDealProduct[myIncrement].eachCartTotalPrice =
      Number(eachTopDealProduct[myIncrement].eachCartTotalPrice) +
      Number(eachTopDealProduct[myIncrement].cartPrice);
    (eachTopDealProduct[myIncrement].eachItemNumber =
      eachTopDealProduct[myIncrement].eachItemNumber + 1),
      (allCustomer[currentCustomerIndex].totalBalance =
        Number(allCustomer[currentCustomerIndex].totalBalance) +
        Number(eachTopDealProduct[myIncrement].cartPrice));
    allCustomer[currentCustomerIndex].totalCart =
      Number(allCustomer[currentCustomerIndex].totalCart) + 1;
    localStorage.setItem("ourCustomerDetails", JSON.stringify(allCustomer));
    showMyCart();
  }

  // if (eachTopDealProduct[myIncrement].eachItemNumber != 1) {
  //   totalForEach[myIncrement].innerHTML = `Items`;
  // }
};

decrement = (myDecrement) => {
  if (eachTopDealProduct[myDecrement].eachItemNumber == 1) {
    minusBtn.disabled = true;
  } else if (eachTopDealProduct[myDecrement].eachItemNumber >= 1) {
    minusBtn.disabled = false;
    count -= 1;
    eachTopDealProduct = allCustomer[currentCustomerIndex].myCart;
    eachTopDealProduct[myDecrement].eachCartTotalPrice =
      Number(eachTopDealProduct[myDecrement].eachCartTotalPrice) -
      Number(eachTopDealProduct[myDecrement].cartPrice);
    eachTopDealProduct[myDecrement].eachItemNumber =
      eachTopDealProduct[myDecrement].eachItemNumber - 1;
    allCustomer[currentCustomerIndex].totalBalance =
      Number(allCustomer[currentCustomerIndex].totalBalance) -
      Number(eachTopDealProduct[myDecrement].cartPrice);
    allCustomer[currentCustomerIndex].totalCart =
      Number(allCustomer[currentCustomerIndex].totalCart) - 1;
    localStorage.setItem("ourCustomerDetails", JSON.stringify(allCustomer));
    showMyCart();
  }

  // if (eachTopDealProduct[myDecrement].eachItemNumber == 1) {
  //   totalForEach.innerHTML = `Item`;
  // } else {
  //   totalForEach[myDecrement].innerHTML = `Items`;
  // }
};

del = (userDelete) => {
  eachTopDealProduct = allCustomer[currentCustomerIndex].myCart;
  allCustomer[currentCustomerIndex].totalBalance =
    Number(allCustomer[currentCustomerIndex].totalBalance) -
    Number(eachTopDealProduct[userDelete].eachCartTotalPrice);
  allCustomer[currentCustomerIndex].totalCart =
    Number(allCustomer[currentCustomerIndex].totalCart) -
    Number(eachTopDealProduct[userDelete].eachItemNumber);
  allCustomer[currentCustomerIndex].myCart.splice(userDelete, 1);
  localStorage.setItem("ourCustomerDetails", JSON.stringify(allCustomer));
  location.reload();
};

topDealProductPage = (eachTopDeal) => {
  allProducts = JSON.parse(localStorage.getItem("companyProduct"));
  allCustomer = JSON.parse(localStorage.getItem("ourCustomerDetails"));
  eachTopDealProduct = allProducts[currentUserIndex].topDeal;
  for (let index = 0; index < allProducts.length; index++) {
    let productSelect = {
      productSelectName: eachTopDealProduct[eachTopDeal].productName,
      productSelectNewPrice: eachTopDealProduct[eachTopDeal].productNewPrice,
      productSelectOldPrice: eachTopDealProduct[eachTopDeal].productOldPrice,
      productSelectSavePrice: eachTopDealProduct[eachTopDeal].productSavePrice,
      productSelectId: eachTopDealProduct[eachTopDeal].productIDNumber,
      productSelectSoldBy: eachTopDealProduct[eachTopDeal].productBy,
      productSelectBrand: eachTopDealProduct[eachTopDeal].productBrand,
      productNumberOfItem: 0,
      productSelectTotalItem: eachTopDealProduct[eachTopDeal].productTotalItem,
      myProductSelect: [],
    };
    allCustomer[currentCustomerIndex].myProductSelect.splice(0, 1, productSelect);
    localStorage.setItem("ourCustomerDetails", JSON.stringify(allCustomer));
  }
  window.location.href = "topDealProductPage.html";
};

hey = () => {
  myName.innerHTML = allCustomer[currentCustomerIndex].firstName;
  myNameLS.innerHTML = allCustomer[currentCustomerIndex].firstName;
  totalCartNo.innerHTML = allCustomer[currentCustomerIndex].totalCart;
  totalCartNoOnSmallScreen.innerHTML =
    allCustomer[currentCustomerIndex].totalCart;
  productPageDetails.innerHTML = "";
  productPageSoldBy.innerHTML = "";
  allCustomer = JSON.parse(localStorage.getItem("ourCustomerDetails"));
  eachTopDealProduct = allCustomer[currentCustomerIndex].myProductSelect;
  eachTopDealProduct.map((eachUser, index) => {
    productPageDetails.innerHTML = `
     <h2 class="text-capitalize">${eachTopDealProduct[index].productSelectName}</h2>
   <h5 class="d-flex gap-2" style="font-size: 14px; color: gray">
    Product Code: <div class="text-dark" id="productID">${eachTopDealProduct[index].productSelectId}</div>
   </h5>
   <h5 class="d-flex gap-2 text-capitalize" style="font-size: 14px; color: gray">Brand: ${eachTopDealProduct[index].productSelectBrand}</h5>
   <hr />
   <div class="d-flex gap-3">
    <h4 class="fw-bold my-auto">???${eachTopDealProduct[index].productSelectNewPrice}</h4>
    <h6 class="my-auto text-decoration-line-through text-secondary">
    ???${eachTopDealProduct[index].productSelectOldPrice}
    </h6>
    <h6 class="my-auto text-success" style="font-size: 12px">
    ???${eachTopDealProduct[index].productSelectSavePrice}
    </h6>
   </div>
   <hr />
   <div class="d-flex gap-4">
    Quantity:
    <div class="d-flex cart-btn-container">
      <button
        class="btn btn-light btn-sm border fw-bold"
        style="border-radius: 2px 0px 0px 2px" onclick="s(${index})" id="minusBtn"
      >
        -
      </button>
      <button
        class="btn btn-light btn-sm border px-3"
        style="border-radius: 0px 0px 0px 0px" id="totalButtonCart"
      >
      ${eachTopDealProduct[index].productNumberOfItem}
      </button>
      <button
        class="btn btn-light btn-sm border fw-bold"
        style="border-radius: 0px 2px 2px 0px" onclick="ds(${index})" id="plusBtn"
      >
        +
      </button>
    </div>
   </div>
  
   <div class="d-flex flex-column mt-4">
    <span class="text-secondary" style="font-size: 14px"
      >Call us for bulk purchases:</span
    >
    <a
      href="tel:+2347033959586"
      class="text-decoration-none"
      style="font-size: 14px; color: #ed017f"
      >Click here to show phone number</a
    >
   </div>
   <hr />
   <div class="d-flex gap-4 buy-now-and-save-btn">
    <button onclick="setEachCartItem(${index})"
      class="text-capitalize btn w-50 text-white"
      style="background-color: #33b27b"
    >
      buy now
    </button>
    <div class="d-flex gap-2 save-icon">
      <i
        class="fas fa-heart text-white justify-content-center d-flex fs-5 cart-heart"
        style="
          cursor: pointer;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          background-color: gray;
          padding: 10px 0px;
        "
      ></i>
      <span class="my-auto text-capitalize" style="font-size: 14px"
        >save For Later</span
      >
    </div>
   </div>
   <div
    class="d-flex gap-3 mt-4 get-free-delivery"
    style="height: 70px; background-color: #f8f8f8"
   >
    <img src="Images/Rectangle_81.webp" style="height: 100%" alt="" />
    <a href="" class="my-auto" style="color: #ed017f"
      >Get free delivery on items above ???4,599 in LAGOS, ABUJA &
      PORTHARCOURT</a
    >
   </div>
   <div class="d-flex mt-4 gap-5 pickup-and-pay">
    <div class="d-flex position-relative gap-4">
      <img
        src="Images/pink-building-icon.png"
        style="height: 30px"
        alt=""
      />
      <img
        src="Images/pink-truck-icon.png"
        style="height: 30px; z-index: 1 !important"
        class="position-absolute"
        alt=""
      />
      <div class="my-auto txt1" style="font-size: 14px">
        Pickup & Pay on Collection Available
      </div>
    </div>
    <div class="d-flex gap-3">
      <img
        src="Images/pink-building2.png"
        style="height: 30px"
        alt=""
      />
      <div class="my-auto txt2" style="font-size: 14px">
        Konga Warehouse
      </div>
    </div>
   </div>
   <hr />
   <div class="d-flex gap-3 txt3" style="font-size: 14px">
    <div>Next Day Delivery Available at:</div>
    <div
      class="w-75 py-2 px-2"
      style="height: 50px; background-color: #f8f8f8"
    >
      <div
        class="d-flex justify-content-center"
        style="
          width: 80px;
          height: 100%;
          border-radius: 45%;
          background-color: orange;
          padding-top: 4px;
        "
      >
        Lagos
      </div>
    </div>
   </div>
   <div class="d-grid gap-2 mt-4" style="font-size: 14px">
    <div class="">Share With Friends</div>
    <div class="d-flex gap-3">
      <i
        class="fab fa-facebook-f border d-flex justify-content-center"
        style="
          width: 30px;
          height: 30px;
          border-radius: 50%;
          padding: 7px 0px;
          color: #39579a;
        "
      ></i>
      <i
        class="fab fa-twitter border d-flex justify-content-center"
        style="
          width: 30px;
          height: 30px;
          border-radius: 50%;
          padding: 7px 0px;
          color: #03a9f4;
        "
      ></i>
      <i
        class="fab fa-whatsapp border d-flex justify-content-center"
        style="
          width: 30px;
          height: 30px;
          border-radius: 50%;
          padding: 7px 0px;
          color: #3ec850;
        "
      ></i>
    </div>
   </div>
     `;

    productPageSoldBy.innerHTML = `
     <div class="d-flex gap-3 mt-4 txt4"
            style="height: 80px; background-color: #fff"
          >
            <img src="Images/Rectangle_81.webp" style="height: 100%" alt="" />
            <div class="my-auto">Sold by</div>
            <a href="" class="my-auto text-capitalize" style="color: #ed017f"
              >${eachTopDealProduct[index].productSelectSoldBy}</a
            >
          </div>
     `;
  });
};

oderConfirm = () => {
  myNameHere.innerHTML = `Hi ` + allCustomer[currentCustomerIndex].firstName;
  addressContainer.innerHTML = "";
  mySelected = allCustomer[currentCustomerIndex].myAddressChoice
  // allCustomer[currentCustomerIndex].allTotalBalance = mySelected[index].pickDeliveryCharge;
  // localStorage.setItem("ourCustomerDetails", JSON.stringify(allCustomer));
  eachTopDealProduct = allCustomer[currentCustomerIndex].myCart;
  eachTopDealProduct.map((eachUser, index) => {
    addressContainer.innerHTML = `
    <div
      class="w-100 px-3 mt-3 bg-white d-flex justify-content-between">
      <div
        class="my-auto text-uppercase fw-bold"
        style="font-size: 14px"
      >
        1. choose delivery option
      </div>
      <button class="btn btn-white fw-bold" style="font-size: 12px; color: #F84CA2; border: 1px solid #F84CA2" onclick="bringMyAddress()">Change</button>
    </div>
    <div class="w-100 d-flex flex-column gap-2" id="addressHere">
      <div class="d-flex gap-3 ps-5 mt-4">
        <input type="radio" name="" id="" checked class="" />
        <span style="font-size: 12px; font-weight: bold">
          Deliver to me</span
        >
      </div>
      <div
        class="d-flex justify-content-evenly delivery-address"
        style="font-size: 12px; width: 100%"
      >
        <div
          class="bg-white py-4 ps-3 delivery-address1"
          style="width: 40%"
        >
          <div class="d-flex">
            <div class="text-capitalize">Hi ${allCustomer[currentCustomerIndex].firstName}</div>, Click on Add Address to specify a delivery
            address.
          </div>
          <button
            class="btn btn-lg text-capitalize text-white mt-3"
            style="
              background-color: #ed017f;
              font-size: 12px;
              border-radius: 3px;
            "
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
            onclick="displayAddress()"
          >
            add delivery address
          </button>
        </div>
        <div
          class="py-4 ps-3 delivery-address2"
          style="background-color: #fff8fc; width: 40%; color: #ed017f"
        >
          <div>
            Your item should be delivered to you in about 5 working days
            within Lagos & Abuja, and 7 to 14 days outside Lagos &
            Abuja.
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white mt-4 ps-5 pt-3 pb-4 pickup" id="pickUp">
      <div class="dropdown position-relative pb-3">
        <div
          class="d-flex gap-3"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <input type="checkbox" name="" id="" />
          <span style="font-size: 12px"
            >check this box if you have any instruction regarding this
            order</span
          >
        </div>
        <textarea
          class="dropdown-menu position-relative"
          name=""
          id=""
          cols="100"
          rows="3"
        >
        </textarea>
      </div>
      <div class="w-100 d-flex flex-column gap-2">
        <div class="d-flex gap-3 mt-4">
          <input type="radio" name="" id="" class="" />
          <span style="font-size: 12px; font-weight: bold">
            Pick up from a Store</span
          >
        </div>
        <div
          class="bg-white py-4 ps-3 border delivery-address11"
          style="width: 40%; font-size: 12px"
        >
          <div>
            Select a pickup location in your area from our 34 locations
            nationwide.
          </div>
          <button
            class="btn btn-lg text-capitalize text-white mt-3"
            style="
              background-color: #ed017f;
              font-size: 12px;
              border-radius: 3px;
            "
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          >
            select pickup location
          </button>
        </div>
      </div>
    </div>
    <div class="w-100 px-3 py-3 mt-3 bg-white">
      <div class="fw-bold text-capitalize mb-3" style="font-size: 14px">delivery options:</div>
      <div class="d-flex gap-3 mt-2">
        <input type="radio" name="" id="" class="" />
        <span class="d-flex gap-3" style="font-size: 12px; font-weight: bold">
          AdexNow - (1 - 6 hours Estimated time) <div> ???${allCustomer[currentUserIndex].deliveryCharge} </div></span
        >
      </div>
      <div class="d-flex gap-3 mt-2">
        <input type="radio" name="" id="" class="" />
        <span class="d-flex gap-3" style="font-size: 12px; font-weight: bold">
          Standard Delivery (3 - 5 Business days Estimated) <div> ???${allCustomer[currentUserIndex].deliveryCharge} </div></span
        >
      </div>
    </div>
    `
    subtotalAndTotalPriceOnCheckout.innerHTML = `
    <div class="d-flex w-100 justify-content-between">
      <div id="">Subtotal:</div>
      <div class="" style="font-size: 14px" id="">???${allCustomer[currentCustomerIndex].totalBalance}</div>
    </div>
    <div class="d-flex w-100 justify-content-between">
      <div id="">Delivery Fee:</div>
      <div class="" style="font-size: 14px" id="">???${mySelected[index].pickDeliveryCharge}</div>
    </div>
    <div class="d-flex w-100 justify-content-between">
      <div class="fw-bold">Total:</div>
      <div class="fw-bold" style="font-size: 14px" id="allTotal">???${allCustomer[currentCustomerIndex].allTotalBalance}</div>
    </div>
     `;

     orderSummaryOnLargeScreenForCheckout.innerHTML = `
    <div class=" details-off">
    <div class="d-flex justify-content-between fw-bold details-off">
      <div>Order Summary</div>
      <div class="d-flex gap-2">
        <div>${eachTopDealProduct.length}</div>
        <div id="itemLScreen">Item</div>
      </div>
    </div>
    <hr>
    <div class="d-flex justify-content-between w-100">
          <div class="" style="font-size: 12px;">Subtotal:</div>
          <div class="fw-bold" style="font-size: 14px;">???${allCustomer[currentCustomerIndex].totalBalance}</div>
    </div>
    <hr>
    <div class="d-flex justify-content-between w-100">
          <div class="" style="font-size: 12px;">Delivery Fee:</div>
          <div class="fw-bold" style="font-size: 14px;">???${mySelected[index].pickDeliveryCharge}</div>
    </div>
    <hr>
    <div class="d-flex justify-content-between w-100">
          <div class="fw-bold">Total:</div>
          <div class="fw-bold" style="font-size: 18px;">???${allCustomer[currentCustomerIndex].allTotalBalance}</div>
    </div>
    <hr>
    </div>
  <div class="w-100 checkout-btn bg-white p-3">
  <button class="btn text-white fw-bold w-100" style="background-color: #33B27B;" id="paymentForm" onclick="window.location.href = 'payment.html'">Proceed To Payment</button>
</div>
    <hr>
     `;
  });

  if (eachTopDealProduct.length == 0) {
    cartMain.innerHTML = `
    <div class="d-flex" id="" style="padding: 0px 20px; height: 100vh; width: 100%;">
      <div class="container-fluid shadow bg-white mx-auto mt-5 d-flex flex-column justify-content-center gap-3 w-100 h-50  empty-cart-container">
        <img src="Images/empty-cart.png" alt="" class="mx-auto" style="width: 100px;">
        <div class="mx-auto fw-bold" style="text-align: center;">Your cart is empty <br> You have not added any item to your cart </div>
      </div>
    </div>
    `;
  }
  // if (eachTopDealProduct.length == 1) {
  //   item.innerHTML = `Subtotal ( ${eachTopDealProduct.length} Item ) `;
  //   itemLScreen.innerHTML = `Item`;
  // } else {
  //   item.innerHTML = `Subtotal ( ${eachTopDealProduct.length} Items )`;
  //   itemLScreen.innerHTML = `Items`;
  // }


  mySelected.map((eachUser, index) => {
    if (allCustomer[currentCustomerIndex].myAddressChoice.length == 0) {
      addressHere.innerHTML = `
      <div class="d-flex gap-3 ps-5 mt-4">
      <input type="radio" name="" id="" checked class="" />
      <span style="font-size: 12px; font-weight: bold"> Deliver to me</span>
    </div>
    <div
      class="d-flex justify-content-evenly delivery-address"
      style="font-size: 12px; width: 100%"
    >
      <div class="bg-white py-4 ps-3 delivery-address1" style="width: 40%">
        <div class="d-flex">
          <div class="text-capitalize">
            Hi ${allCustomer[currentCustomerIndex].firstName}
          </div>
          , Click on Add Address to specify a delivery address.
        </div>
        <button
          class="btn btn-lg text-capitalize text-white mt-3"
          style="background-color: #ed017f; font-size: 12px; border-radius: 3px"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          onclick="displayAddress()"
        >
          add delivery address
        </button>
      </div>
      <div
        class="py-4 ps-3 delivery-address2"
        style="background-color: #fff8fc; width: 40%; color: #ed017f"
      >
        <div>
          Your item should be delivered to you in about 5 working days within
          Lagos & Abuja, and 7 to 14 days outside Lagos & Abuja.
        </div>
      </div>
    </div>
    
      `
    } else {
      pickUp.style.display = 'none';
      addressHere.innerHTML = `
      <div class="d-flex flex-column gap-1 ps-4 mt-2 py-4 bg-white">
      <div class="d-flex text-capitalize fw-bold mb-2" style="font-size: 14px">${allCustomer[currentCustomerIndex].myAddressChoice[index].pickFirstName} ${allCustomer[currentCustomerIndex].myAddressChoice[index].pickLastName}</div>
      <div class="my-auto text-capitalize" style="font-size: 12px">${allCustomer[currentCustomerIndex].myAddressChoice[index].pickStreet} ${allCustomer[currentCustomerIndex].myAddressChoice[index].pickCity}  ${allCustomer[currentCustomerIndex].myAddressChoice[index].pickState}</div>
      <div class="my-auto" style="font-size: 12px">${allCustomer[currentCustomerIndex].myAddressChoice[index].pickPhoneNumber}</div>
      <div class="dropdown position-relative pb-3">
        <div
          class="d-flex gap-3"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <input type="checkbox" name="" id="" />
          <span style="font-size: 12px"
            >check this box if you have any instruction regarding this
            order</span
          >
        </div>
        <textarea
          class="dropdown-menu position-relative"
          name=""
          id=""
          cols="100"
          rows="3"
        >
        </textarea>
      </div>
      </div>
      `
    }
  })
 
}

displayAddress = () => {
  // offcanvasAddressContainer.innerHTML = "";
  allCustomer = JSON.parse(localStorage.getItem("ourCustomerDetails"));
  eachCustomerAddress = allCustomer[currentCustomerIndex].myAddress
  eachCustomerAddress.map((eachUser, index) => {
    if (allCustomer[currentCustomerIndex].myAddress.length == 0) {
      offcanvasAddressContainer.innerHTML = `
      <div class="row h-100 position-relative">
  <div class="col-md-6">
    <label for="validationServer01" class="form-label"
      >First name</label
    >
    <input
      type="text"
      class="form-control text-capitalize"
      id="addressFname"
      value=""
      required
    />
    <!-- <div class="valid-feedback">
  Looks good!
</div> -->
  </div>
  <div class="col-md-6">
    <label for="validationServer02" class="form-label">Last name</label>
    <input
      type="text"
      class="form-control text-capitalize"
      id="addressLname"
      value=""
      required
    />
    <!-- <div class="valid-feedback">
  Looks good!
</div> -->
  </div>
  <div class="col-md-12">
    <label for="validationServer03" class="form-label"
      >Phone Number</label
    >
    <input
      type="tel"
      class="form-control text-capitalize"
      id="addressPhoneNumber"
      aria-describedby="validationServer03Feedback"
      required
    />
    <!-- <div id="validationServer03Feedback" class="invalid-feedback">
  Please provide a valid city.
</div> -->
  </div>
  <div class="col-md-12">
    <label for="validationServer03" class="form-label"
      >Street Address</label
    >
    <input
      type="text"
      class="form-control text-capitalize"
      id="addressStreet"
      aria-describedby="validationServer03Feedback"
      required
    />
    <!-- <div id="validationServer03Feedback" class="invalid-feedback">
  Please provide a valid city.
</div> -->
  </div>
  <div class="col-md-12">
    <label for="validationServer03" class="form-label"
      >Direction (Optional)</label
    >
    <input
      type="text"
      class="form-control text-capitalize"
      id="addressDirection"
      aria-describedby="validationServer03Feedback"
      required
    />
    <!-- <div id="validationServer03Feedback" class="invalid-feedback">
  Please provide a valid city.
</div> -->
  </div>
  <div class="col-md-12">
    <label for="validationServer03" class="form-label">City</label>
    <input
      type="text"
      class="form-control text-capitalize"
      id="addressCity"
      aria-describedby="validationServer03Feedback"
      required
    />
    <!-- <div id="validationServer03Feedback" class="invalid-feedback">
  Please provide a valid city.
</div> -->
  </div>
  <div class="col-md-12 position-relative">
    <label for="validationServer04" class="form-label">State</label>
    <select
      class="form-select position-relative"
      id="addressState"
      aria-describedby="validationServer04Feedback"
      required
    >
      <option selected disabled value="">Choose...</option>
      <option class="text-capitalize" value="oyo">oyo state</option>
      <option class="text-capitalize" value="osun">osun state</option>
      <option class="text-capitalize" value="lagos">lagos state</option>
      <option class="text-capitalize" value="ondo">ondo state</option>
      <option class="text-capitalize" value="ogun">ogun state</option>
      <option class="text-capitalize" value="kwara">kwara state</option>
      <option class="text-capitalize" value="ekiti">ekiti state</option>
      <option class="text-capitalize" value="akwaibom">
        akwa ibom state
      </option>
      <option class="text-capitalize" value="imo">imo state</option>
      <option class="text-capitalize" value="abia">abia state</option>
      <option class="text-capitalize" value="rivers">
        rivers state
      </option>
      <option class="text-capitalize" value="anambra">
        anambra state
      </option>
      <option class="text-capitalize" value="kano">kano state</option>
      <option class="text-capitalize" value="kaduna">
        kaduna state
      </option>
      <option class="text-capitalize" value="benue">benue state</option>
    </select>
    <!-- <div id="validationServer04Feedback" class="invalid-feedback">
  Please select a valid state.
</div> -->
  </div>
  <div class="col-md-12">
    <label for="validationServer05" class="form-label"
      >LGA (Local Government Area)</label
    >
    <input
      type="text"
      class="form-control text-capitalize"
      id="addressLGA"
      aria-describedby="validationServer05Feedback"
      required
    />
    <!-- <div id="validationServer05Feedback" class="invalid-feedback">
  Please provide a valid zip.
</div> -->
  </div>
  <div class="col-12 mt-4">
    <button class="btn btn-primary col-12" onclick="submitAddress()">
      Submit form
    </button>
  </div>
</div>
      `
    } else if (allCustomer[currentCustomerIndex].myAddress.length != 0) {
      offcanvasAddressContainer.innerHTML += `
      <div class="border shadow px-3 pt-3 pb-3 mb-3" style="cursor: pointer" onclick="pickThisAddressForMe(${index})">
        <div class="d-flex gap-3">
          <input type="radio">
          <div>${eachCustomerAddress[index].addressFirstName} ${eachCustomerAddress[index].addressLastName}</div>
        </div>
        <hr>
        <div class="d-flex gap-3 py-2">
          <i class="fas fa-user  my-auto"></i>
          <div class="my-auto">${eachCustomerAddress[index].addressFirstName} ${eachCustomerAddress[index].addressLastName}</div>
        </div>
        <div class="d-flex gap-3 py-2">
          <i class="fas fa-location-dot  my-auto"></i>
          <div class="my-auto">${eachCustomerAddress[index].addressStreet} ${eachCustomerAddress[index].addressCity}  ${eachCustomerAddress[index].addressState}</div>
        </div>
        <div class="d-flex gap-3 py-2">
          <i class="fas fa-phone  my-auto"></i>
          <div class="my-auto">${eachCustomerAddress[index].addressPhoneNumber}</div>
        </div>
        <div class="d-flex justify-content-center mt-2"><i class="fas fa-user fs-3 text-danger"></i></div>
      </div>
      `
    }
  })
}

function submitAddress() {
  allCustomer = JSON.parse(localStorage.getItem("ourCustomerDetails"));
  if (addressFname.value == "" || addressPhoneNumber == "") {
    sweet2()
  }
  else {
    if (addressState.value == "oyo") {
      allCustomer[currentCustomerIndex].deliveryCharge = 300
    } else if (addressState.value == "lagos") {
      allCustomer[currentCustomerIndex].deliveryCharge = 500
    }
  allCustomer.map((eachUser, index) => {
  let customerAddress = {
    addressFirstName: addressFname.value,
    addressLastName: addressLname.value,
    addressPhoneNumber: addressPhoneNumber.value,
    addressStreet: addressStreet.value,
    addressDirection: addressDirection.value,
    addressCity: addressCity.value,
    addressState: addressState.value,
    addressLGA: addressLGA.value,
    addressStateDeliveryCharge: allCustomer[currentCustomerIndex].deliveryCharge,
  }
  allCustomer[currentCustomerIndex].myAddress.push(customerAddress);
  localStorage.setItem("ourCustomerDetails", JSON.stringify(allCustomer));
})
window.location.href = `completeOrder.html`
  }
  
}

bringMyAddress = () => {
  addressContainer.innerHTML = `
  <div
    class="w-100 px-3 mt-3 bg-white d-flex justify-content-between">
    <div
      class="my-auto text-uppercase fw-bold"
      style="font-size: 14px"
    >
      1. choose delivery option
    </div>
    <button class="btn btn-white d-flex fw-bold" style="font-size: 12px; color: #F84CA2; border: 1px solid #F84CA2" onclick="bringMyAddress()">Change</button>
  </div>
  <div class="w-100 d-flex flex-column gap-2" id="addressHere">
    <div class="d-flex gap-3 ps-5 mt-4">
      <input type="radio" name="" id="" checked class="" />
      <span style="font-size: 12px; font-weight: bold">
        Deliver to me</span
      >
    </div>
    <div
      class="d-flex justify-content-evenly delivery-address"
      style="font-size: 12px; width: 100%"
    >
      <div
        class="bg-white py-4 ps-3 delivery-address1"
        style="width: 40%"
      >
        <div class="d-flex">
          <div class="text-capitalize">Hi ${allCustomer[currentCustomerIndex].firstName}</div>, Click on Add Address to specify a delivery
          address.
        </div>
        <button
          class="btn btn-lg text-capitalize text-white mt-3"
          style="
            background-color: #ed017f;
            font-size: 12px;
            border-radius: 3px;
          "
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          onclick="displayAddress()"
        >
          add delivery address
        </button>
      </div>
      <div
        class="py-4 ps-3 delivery-address2"
        style="background-color: #fff8fc; width: 40%; color: #ed017f"
      >
        <div>
          Your item should be delivered to you in about 5 working days
          within Lagos & Abuja, and 7 to 14 days outside Lagos &
          Abuja.
        </div>
      </div>
    </div>
  </div>
  <div class="bg-white mt-4 ps-5 pt-3 pb-4 pickup" id="pickUp">
    <div class="dropdown position-relative pb-3">
      <div
        class="d-flex gap-3"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <input type="checkbox" name="" id="" />
        <span style="font-size: 12px"
          >check this box if you have any instruction regarding this
          order</span
        >
      </div>
      <textarea
        class="dropdown-menu position-relative"
        name=""
        id=""
        cols="100"
        rows="3"
      >
      </textarea>
    </div>
    <div class="w-100 d-flex flex-column gap-2">
      <div class="d-flex gap-3 mt-4">
        <input type="radio" name="" id="" class="" />
        <span style="font-size: 12px; font-weight: bold">
          Pick up from a Store</span
        >
      </div>
      <div
        class="bg-white py-4 ps-3 border delivery-address11"
        style="width: 40%; font-size: 12px"
      >
        <div>
          Select a pickup location in your area from our 34 locations
          nationwide.
        </div>
        <button
          class="btn btn-lg text-capitalize text-white mt-3"
          style="
            background-color: #ed017f;
            font-size: 12px;
            border-radius: 3px;
          "
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
        >
          select pickup location
        </button>
      </div>
    </div>
  </div>
  <div class="w-100 px-3 py-3 mt-3 bg-white">
      <div class="fw-bold text-capitalize mb-3" style="font-size: 14px">delivery options:</div>
      <div class="d-flex gap-3 mt-2">
        <input type="radio" name="" id="" class="" />
        <span class="d-flex gap-3" style="font-size: 12px; font-weight: bold">
          AdexNow - (1 - 6 hours Estimated time) <div> ???${allCustomer[currentUserIndex].deliveryCharge} </div></span
        >
      </div>
      <div class="d-flex gap-3 mt-2">
        <input type="radio" name="" id="" class="" />
        <span class="d-flex gap-3" style="font-size: 12px; font-weight: bold">
          Standard Delivery (3 - 5 Business days Estimated) <div> ???${allCustomer[currentUserIndex].deliveryCharge} </div></span
        >
      </div>
    </div>
  `
}

addNewAddress = () => {
  allCustomer = JSON.parse(localStorage.getItem("ourCustomerDetails"));
  eachCustomerAddress = allCustomer[currentCustomerIndex].myAddress
  allCustomer.map((eachUser, index) => {
      offcanvasAddressContainer.innerHTML = `
      <div class="row h-100 position-relative">
  <div class="col-md-6">
    <label for="validationServer01" class="form-label"
      >First name</label
    >
    <input
      type="text"
      class="form-control text-capitalize"
      id="addressFname"
      value=""
      required
    />
    <!-- <div class="valid-feedback">
  Looks good!
</div> -->
  </div>
  <div class="col-md-6">
    <label for="validationServer02" class="form-label">Last name</label>
    <input
      type="text"
      class="form-control text-capitalize"
      id="addressLname"
      value=""
      required
    />
    <!-- <div class="valid-feedback">
  Looks good!
</div> -->
  </div>
  <div class="col-md-12">
    <label for="validationServer03" class="form-label"
      >Phone Number</label
    >
    <input
      type="tel"
      class="form-control text-capitalize"
      id="addressPhoneNumber"
      aria-describedby="validationServer03Feedback"
      required
    />
    <!-- <div id="validationServer03Feedback" class="invalid-feedback">
  Please provide a valid city.
</div> -->
  </div>
  <div class="col-md-12">
    <label for="validationServer03" class="form-label"
      >Street Address</label
    >
    <input
      type="text"
      class="form-control text-capitalize"
      id="addressStreet"
      aria-describedby="validationServer03Feedback"
      required
    />
    <!-- <div id="validationServer03Feedback" class="invalid-feedback">
  Please provide a valid city.
</div> -->
  </div>
  <div class="col-md-12">
    <label for="validationServer03" class="form-label"
      >Direction (Optional)</label
    >
    <input
      type="text"
      class="form-control text-capitalize"
      id="addressDirection"
      aria-describedby="validationServer03Feedback"
      required
    />
    <!-- <div id="validationServer03Feedback" class="invalid-feedback">
  Please provide a valid city.
</div> -->
  </div>
  <div class="col-md-12">
    <label for="validationServer03" class="form-label">City</label>
    <input
      type="text"
      class="form-control text-capitalize"
      id="addressCity"
      aria-describedby="validationServer03Feedback"
      required
    />
    <!-- <div id="validationServer03Feedback" class="invalid-feedback">
  Please provide a valid city.
</div> -->
  </div>
  <div class="col-md-12 position-relative">
    <label for="validationServer04" class="form-label">State</label>
    <select
      class="form-select position-relative"
      id="addressState"
      aria-describedby="validationServer04Feedback"
      required
    >
      <option selected disabled value="">Choose...</option>
      <option class="text-capitalize" value="oyo">oyo state</option>
      <option class="text-capitalize" value="osun">osun state</option>
      <option class="text-capitalize" value="lagos">lagos state</option>
      <option class="text-capitalize" value="ondo">ondo state</option>
      <option class="text-capitalize" value="ogun">ogun state</option>
      <option class="text-capitalize" value="kwara">kwara state</option>
      <option class="text-capitalize" value="ekiti">ekiti state</option>
      <option class="text-capitalize" value="akwaibom">
        akwa ibom state
      </option>
      <option class="text-capitalize" value="imo">imo state</option>
      <option class="text-capitalize" value="abia">abia state</option>
      <option class="text-capitalize" value="rivers">
        rivers state
      </option>
      <option class="text-capitalize" value="anambra">
        anambra state
      </option>
      <option class="text-capitalize" value="kano">kano state</option>
      <option class="text-capitalize" value="kaduna">
        kaduna state
      </option>
      <option class="text-capitalize" value="benue">benue state</option>
    </select>
    <!-- <div id="validationServer04Feedback" class="invalid-feedback">
  Please select a valid state.
</div> -->
  </div>
  <div class="col-md-12">
    <label for="validationServer05" class="form-label"
      >LGA (Local Government Area)</label
    >
    <input
      type="text"
      class="form-control text-capitalize"
      id="addressLGA"
      aria-describedby="validationServer05Feedback"
      required
    />
    <!-- <div id="validationServer05Feedback" class="invalid-feedback">
  Please provide a valid zip.
</div> -->
  </div>
  <div class="col-12 mt-4">
    <button class="btn btn-primary col-12" onclick="submitAddress()">
      Submit form
    </button>
  </div>
</div>
      `
  })
}


pickThisAddressForMe = (myChoice) => {
  allCustomer = JSON.parse(localStorage.getItem("ourCustomerDetails"));
  mySelected = allCustomer[currentCustomerIndex].myAddressChoice
  spliceAddress = allCustomer[currentCustomerIndex].myAddress;
  allCustomer.map((eachUser, index) => {
    let ourCustomerAddressChoice = {
      pickFirstName: spliceAddress[myChoice].addressFirstName,
      pickLastName: spliceAddress[myChoice].addressLastName,
      pickPhoneNumber: spliceAddress[myChoice].addressPhoneNumber,
      pickStreet: spliceAddress[myChoice].addressStreet,
      pickDirection: spliceAddress[myChoice].addressDirection,
      pickCity: spliceAddress[myChoice].addressCity,
      pickState: spliceAddress[myChoice].addressState,
      pickLGA: spliceAddress[myChoice].addressLGA,
      pickDeliveryCharge: spliceAddress[myChoice].addressStateDeliveryCharge,
  }
  allCustomer[currentCustomerIndex].myAddressChoice.splice(0, 1, ourCustomerAddressChoice);
  localStorage.setItem("ourCustomerDetails", JSON.stringify(allCustomer));
  let latestPrice = mySelected[index].pickDeliveryCharge + allCustomer[currentCustomerIndex].totalBalance
  allCustomer[currentCustomerIndex].allTotalBalance = latestPrice
  localStorage.setItem("ourCustomerDetails", JSON.stringify(allCustomer));
  })
  window.location.href = "completeOrder.html"
}

displayProducts = () => {
  // totalCartNo.innerHTML = allCustomer[currentCustomerIndex].totalCart
  // totalCartNoOnSmallScreen.innerHTML = allCustomer[currentCustomerIndex].totalCart
  // myNameHere.innerHTML = `Hi ` + allCustomer[currentCustomerIndex].firstName;
  todaysDeal.innerHTML = "";
  eachTopDealProduct = allProducts[currentUserIndex].topDeal;
  for (let index = 0; index < eachTopDealProduct.length; index++) {
    todaysDeal.innerHTML += `
    <div
    onclick="topDealProductPage(${index})"
    class="d-flex p-3 shadow each-todays-deal gap-3 position-relative"
    id="eachTodaysDeal"
    style="width: 32.7%; height: 120px; cursor: pointer"
  >
    <div
      id="percentOff"
      class="text-white fw-bold d-flex position-absolute"
      style="
        width: 55px;
        height: 35px;
        border-top-right-radius: 40%;
        border-bottom-right-radius: 40%;
        background-color: #ff3b3b;
        font-size: 10px;
      "
    >
      <span class="my-auto mx-auto"
        >${eachTopDealProduct[index].productOff}% OFF</span
      >
    </div>
    <img src="Images/todays_deal8.webp" alt="" id="dealsImg" />
    <div class="d-flex flex-column gap-3 pro-details w-100" id="proDetails">
      <div class="text-capitalize" style="font-size: 14px" id="dealsProductName">
        ${eachTopDealProduct[index].productName}
      </div>
      <div class="">
        <div class="d-flex gap-2">
          <div class="fw-bold fs-5" id="dealsNewPrice">
            ???${eachTopDealProduct[index].productNewPrice}
          </div>
          <div
            class="my-auto text-decoration-line-through text-secondary" style="font-size: 12px"
            id="dealsOldPrice"
          >
            ???${eachTopDealProduct[index].productOldPrice}
          </div>
        </div>
        <div
          class="fw-bold"
          style="font-size: 10px; color: #33b27b"
          id="dealsSave"
        >
          You save ???${eachTopDealProduct[index].productSavePrice}
        </div>
      </div>
    </div>
  </div>
        `;
  }

  eachSponsoredProduct = allProducts[currentUserIndex].sponsorProduct;
  for (let index = 0; index < eachSponsoredProduct.length; index++) {
    sponsoredPro.innerHTML += `
  <div
      class="d-flex flex-column shadow pt-2 pb-5 position-relative"
      style="height: 300px; min-width: 19.5%; cursor: pointer"
      id="sponsoredProProduct"
    >
      <div
        id="sponsorPercentOff"
        class="text-white fw-bold d-flex position-absolute"
        style="
          width: 55px;
          height: 35px;
          border-top-right-radius: 40%;
          border-bottom-right-radius: 40%;
          background-color: #ff3b3b;
          font-size: 10px;
        "
      >
        <span class="my-auto mx-auto">${eachSponsoredProduct[index].productOff}% OFF</span>
      </div>
      <img
        src="Images/sponsor14.jpg"
        class="w-100"
        style="height: 80%; object-fit: contain;"
        alt=""
      />
      <div class="px-2">
      <div class="mb-2 mt-0 fw-bold text-capitalize" id="sponsorProductName" style="font-size: 12px;">${eachSponsoredProduct[index].productName}</div>
      <div class="">
      <div class="d-flex gap-2">
        <div class="fw-bold fs-5" id="dealsNewPrice">
          ???${eachSponsoredProduct[index].productNewPrice}
        </div>
        <div
          class="my-auto text-decoration-line-through text-secondary" style="font-size: 12px"
          id="dealsOldPrice"
        >
          ???${eachSponsoredProduct[index].productOldPrice}
        </div>
      </div>
      <div
        class="fw-bold"
        style="font-size: 10px; color: #33b27b"
        id="dealsSave"
      >
        You save ???${eachSponsoredProduct[index].productSavePrice}
      </div>
    </div>
    </div>
    </div>
  `;
  }

  eachRecommendedProduct = allProducts[currentUserIndex].recommendedProduct;
  for (let index = 0; index < eachRecommendedProduct.length; index++) {
    recommendedPro.innerHTML += `
    <div
    onclick="topDealProductPage(${index})"
    class="d-flex p-3 shadow each-todays-deal gap-3 position-relative"
    id="eachTodaysDeal"
    style="width: 32.5%; height: 120px; cursor: pointer"
  >
    <div
      id="percentOff"
      class="text-white fw-bold d-flex position-absolute"
      style="
        width: 55px;
        height: 35px;
        border-top-right-radius: 40%;
        border-bottom-right-radius: 40%;
        background-color: #ff3b3b;
        font-size: 10px;
      "
    >
      <span class="my-auto mx-auto"
        >${eachRecommendedProduct[index].productOff}% OFF</span
      >
    </div>
    <img src="Images/recommended2.webp" alt="" id="dealsImg" />
    <div class="d-flex flex-column gap-3 pro-details w-100" id="proDetails">
      <div class="text-capitalize" id="dealsProductName" style="font-size: 14px">
        ${eachRecommendedProduct[index].productName}
      </div>
      <div class="">
        <div class="d-flex gap-2">
          <div class="fw-bold fs-5" id="dealsNewPrice">
            ???${eachRecommendedProduct[index].productNewPrice}
          </div>
          <div
            class="my-auto text-decoration-line-through text-secondary" style="font-size: 12px"
            id="dealsOldPrice"
          >
            ???${eachRecommendedProduct[index].productOldPrice}
          </div>
        </div>
        <div
          class="fw-bold"
          style="font-size: 10px; color: #33b27b"
          id="dealsSave"
        >
          You save ???${eachRecommendedProduct[index].productSavePrice}
        </div>
      </div>
    </div>
  </div>
        `;
  }

  eachInspiredProduct = allProducts[currentUserIndex].inspiredProduct;
  for (let index = 0; index < eachInspiredProduct.length; index++) {
    inspiredPro.innerHTML += `
  <div
      class="d-flex flex-column shadow pt-2 pb-5 position-relative"
      style="height: 300px; min-width: 19.5%; cursor: pointer"
      id="inspiredProProduct"
    >
      <div
        id="sponsorPercentOff"
        class="text-white fw-bold d-flex position-absolute"
        style="
          width: 55px;
          height: 35px;
          border-top-right-radius: 40%;
          border-bottom-right-radius: 40%;
          background-color: #ff3b3b;
          font-size: 10px;
        "
      >
        <span class="my-auto mx-auto">${eachInspiredProduct[index].productOff}% OFF</span>
      </div>
      <img
        src="Images/inspiredby6.webp"
        class="w-100"
        style="height: 80%; object-fit: contain;"
        alt=""
      />
      <div class="px-2">
      <div class="mb-2 mt-0 fw-bold text-capitalize" id="sponsorProductName" style="font-size: 14px;">${eachInspiredProduct[index].productName}</div>
      <div class="">
      <div class="d-flex gap-2">
        <div class="fw-bold fs-5" id="dealsNewPrice">
          ???${eachInspiredProduct[index].productNewPrice}
        </div>
        <div
          class="my-auto text-decoration-line-through text-secondary" style="font-size: 12px"
          id="dealsOldPrice"
        >
          ???${eachInspiredProduct[index].productOldPrice}
        </div>
      </div>
      <div
        class="fw-bold"
        style="font-size: 10px; color: #33b27b"
        id="dealsSave"
      >
        You save ???${eachInspiredProduct[index].productSavePrice}
      </div>
    </div>
    </div>
    </div>
  `;
  }

  eachBrowsingProduct = allProducts[currentUserIndex].browsingProduct;
  for (let index = 0; index < eachBrowsingProduct.length; index++) {
    browsingHistoryPro.innerHTML += `
  <div
      class="d-flex flex-column shadow pt-2 pb-5 position-relative"
      style="height: 300px; min-width: 19.5%; cursor: pointer"
      id="browsingProProduct"
    >
      <div
        id="sponsorPercentOff"
        class="text-white fw-bold d-flex position-absolute"
        style="
          width: 55px;
          height: 35px;
          border-top-right-radius: 40%;
          border-bottom-right-radius: 40%;
          background-color: #ff3b3b;
          font-size: 10px;
        "
      >
        <span class="my-auto mx-auto">${eachBrowsingProduct[index].productOff}% OFF</span>
      </div>
      <img
        src="Images/browsingHistory2.webp"
        class="w-100"
        style="height: 80%; object-fit: contain;"
        alt=""
      />
      <div class="px-2">
      <div class="mb-2 mt-0 fw-bold text-capitalize" id="sponsorProductName" style="font-size: 14px;">${eachBrowsingProduct[index].productName}</div>
      <div class="">
      <div class="d-flex gap-2">
        <div class="fw-bold fs-5" id="dealsNewPrice">
          ???${eachBrowsingProduct[index].productNewPrice}
        </div>
        <div
          class="my-auto text-decoration-line-through text-secondary" style="font-size: 12px"
          id="dealsOldPrice"
        >
          ???${eachBrowsingProduct[index].productOldPrice}
        </div>
      </div>
      <div
        class="fw-bold"
        style="font-size: 10px; color: #33b27b"
        id="dealsSave"
      >
        You save ???${eachBrowsingProduct[index].productSavePrice}
      </div>
    </div>
    </div>
    </div>
  `;
  }
};

showForEach = () => {
  let myAngle = document.querySelectorAll(".fa-angle-down");
  for (let index = 0; index < myAngle.length; index++) {
    myAngle[index].classList.toggle("fa-angle-up");
  }
};
showForEachLargeScreen = (param) => {
  showThis.innerHTML = "";
  if (param == "overview") {
    showThis.innerHTML = `
    <h6 class="text-uppercase text-secondary">features</h6>
        <ul class="text-secondary">
                <li>Enjoy 4G Speeds on your 3G Device</li>
                <li>Connects up to 10 users on WIFI</li>
                <li>Up to 8 hours of battery backup</li>
                <li>Fits in Pocket</li>
        </ul>
    `;
  } else if (param == "description") {
    showThis.innerHTML = `
    <div class="text-secondary px-2">
    <div class="d-flex w-100">
      <div
        class="border border-secondary py-2 px-2 fw-bold"
        style="width: 15%"
      >
        colour
      </div>
      <div class="border border-secondary py-2 px-2" style="width: 85%">
        Not Available
      </div>
    </div>
    <div class="pt-2">
      Adex 5G Internet Pocket Mifi offers super-fast 4G LTE internet
      browsing and download speed, for home, office, and when you are on
      the move.
    </div>
    <div class="pt-4">
      It is a battery-operated 4G Hotspot LTE Router with Wi-Fi support.
      You just need to slip it into your pocket and create a Wi-Fi zone
      anywhere you go.
    </div>
    <h6 class="text-uppercase text-secondary mt-4">features</h6>
    <ul class="text-secondary">
      <li>Enjoy 4G Speeds on your 3G Device</li>
      <li>Connects up to 10 users on WIFI</li>
      <li>Up to 8 hours of battery backup</li>
      <li>Fits in Pocket</li>
    </ul>
    <h6 class="text-uppercase text-secondary mt3">customer benefits</h6>
    <ul class="text-secondary">
      <li>UP TO 150GB BONUS DATA</li>
      <li>Comes with 30GB of data free valid for 30 days</li>
      <li>
        100% BONUS monthly for 6 months upon recharge of N5,000- N15,000
        bundles
      </li>
      <li>Connects up to 10 WiFi-enabled devices at once</li>
      <li>
        Pocket Wifi now includes a WPS push button for ease of connection
      </li>
      <li>Up to 8 hours battery life</li>
    </ul>
  </div>
    `;
  } else if (param == "shipping") {
    showThis.innerHTML = `
    <div class="d-flex gap-3">
              <img
                src="Images/pink-truck-icon.png"
                alt=""
                style="
                  width: 50px;
                  height: 50px;
                  background-color: #f2f2f2;
                  border-radius: 5px;
                "
              />
              <div class="d-grid" style="font-size: 12px">
                <div>Delivery</div>
                <div class="text-secondary">
                  Estimated delivery time: 1 - 7 days
                </div>
              </div>
            </div>
    `;
  } else if (param == "warranty") {
    showThis.innerHTML = `
    <div>Warranty information unavailable for this item.</div>
    `;
  } else if (param == "reviews") {
    showThis.innerHTML = `
    <div>No product review yet. Be the first to review this product.</div>
    `;
  } else if (param == "returnPolicy") {
    showThis.innerHTML = `
    <div class="d-flex gap-3">
              <img
                src="Images/NTFS_icon_restart.png"
                alt=""
                style="
                  width: 60px;
                  height: 40px;
                  background-color: #f2f2f2;
                  border-radius: 5px;
                "
              />
              <div class="d-grid" style="font-size: 12px">
                <div>7 Day Return Guarantee</div>
                <div class="text-secondary">
                For more information on the return shipping options, go to <a href="" style="color: #ed017f" class="text-decoration-none">Adex Return Policy</a>
                </div>
              </div>
            </div>
    `;
  }
};

var mediaQuery = window.matchMedia("(max-width: 600px)");
if (mediaQuery.matches) {
  othersAdsOne.src = "Images/ads.jpg";
}

function readMore() {
  if (readDots.style.display === "none") {
    readDots.style.display = "inline";
    readBtn.innerHTML = "Read more";
    moreText.style.display = "none";
    readBtn.style.backgroundColor = "blue";
  } else {
    readDots.style.display = "none";
    readBtn.innerHTML = "Read less";
    moreText.style.display = "inline";
    readBtn.style.backgroundColor = "purple";
  }
}

// let footerIcon = document.querySelectorAll('.fa-plus')
// texting = (eachIcon) => {
//   for (let index = 0; index < footerIcon.length; index++) {
//     footerIcon[eachIcon].classList.toggle("fa-square-minus");
//     // break;
//   }
// }




function payWithPaystack() {
  allCustomer = JSON.parse(localStorage.getItem("ourCustomerDetails"));
  let handler = PaystackPop.setup({
    key: 'pk_test_a70c6dbb491c1021f98ea8cf0b840542607c2537',
    email: allCustomer[currentCustomerIndex].email,
    amount: allCustomer[currentCustomerIndex].allTotalBalance * 100,
    ref: 'Adex'+Math.floor((Math.random() * 1000000000) + 1), 
    onClose: function(){
      let message = "You just cancel this transaction";
      Swal.fire({
        icon: "error",
        title: "Dear " + allCustomer[currentCustomerIndex].firstName,
        text: message,
        footer: 'For further assistance, please call us at +2347033959586 or email us at adeoluamole@gmail.com',
      });
    },
    callback: function(response){
      allCustomer = JSON.parse(localStorage.getItem("ourCustomerDetails"));
      let message = 'Payment completed! Your Reference Number is: ' + response.reference;
      Swal.fire({
        icon: "success",
        title: "Thank You " + allCustomer[currentCustomerIndex].firstName,
        text: message,
        footer: 'Your Order is on the way Click <a href="#">here</a>' + 'to track your order',
      });
    }
  });

  handler.openIframe();
}


function makePayment() {
  FlutterwaveCheckout({
    public_key: "FLWPUBK_TEST-20234fad6166a9e0d3fbb7f9ed6b4d86-X",
    tx_ref: "Adex-48981487343MDI0NzMx",
    amount: allCustomer[currentCustomerIndex].allTotalBalance,
    currency: "NGN",
    payment_options: "card, banktransfer, ussd",
    redirect_url: "completeOrder.html",
    meta: {
      consumer_id: 23,
      consumer_mac: "92a3-912ba-1192a",
    },
    customer: {
      email: allCustomer[currentCustomerIndex].email,
      phone_number: allCustomer[currentCustomerIndex].phoneNumber,
      name: allCustomer[currentCustomerIndex].firstName,
    },
    customizations: {
      title: "Adex International Limited",
      description: "Payment for an awesome cruise",
      logo: "http://127.0.0.1:5501/Images/ade.png",
    },
    onclose: function(incomplete) {
      if (incomplete === true) {
        let message = "You just cancel this transaction";
      Swal.fire({
        icon: "error",
        title: "Dear " + allCustomer[currentCustomerIndex].firstName,
        text: message,
        footer: 'For further assistance, please call us at +2347033959586 or email us at adeoluamole@gmail.com',
      });
      }
  }
  
  });

  
}




