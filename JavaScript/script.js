"use strict";

// Phần Thông tin cá nhân

// Input email
const inputEmail = document.getElementById("checkEmail");

// Nội dung thông tin cá nhân
const personal_info = document.querySelector(".show-personal-info");

// Form kiểm tra email
const check_email = document.querySelector(".check-Email");

// Note email
const note_email = document.querySelector(".noteEmail");

// Nút Kiểm tra email
const submit_button_checkEmail = document.querySelector(".btn-checkEmail");

// Hàm kiểm tra email
const checkMail = (email) => {
  const pattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return pattern.test(email) ? true : false;
};

// hàm kiểm tra dữ liệu đầu vào của form
const validateForm = function () {
  if (checkMail(inputEmail.value)) {
    personal_info.classList.remove("d-none"); // bỏ ẩn nội dung thông tin cá nhân
    check_email.classList.add("d-none"); // ẩn phần kiểm tra email
  } else {
    // hiện thống báo email không hợp lệ
    inputEmail.classList.add("is-invalid");
    note_email.classList.add("d-none");
  }
};

// Click nút Kiểm tra
submit_button_checkEmail.addEventListener("click", validateForm);

/* ============================================================================= */

// Phần Thông tin nghề nghiệp

// Hiển thị nút Chi tiết
const showButton = (classjobInfo_groupButtonContent) => {
  const groupButtonContent = document.querySelector(
    classjobInfo_groupButtonContent
  );
  groupButtonContent.classList.remove("d-none");
};

// Ẩn nút Chi tiết
const hideButton = (classjobInfo_groupButtonContent) => {
  const groupButtonContent = document.querySelector(
    classjobInfo_groupButtonContent
  );
  groupButtonContent.classList.add("d-none");
};

// Nút Chi tiết
const btn_jobInfo_click = (classButton, classButtonContainer, classContent) => {
  const buttonContainer = document.querySelector(classButtonContainer);
  const viewMore = document.querySelector(classButton);
  const buttonDropup = document.querySelector(classButton + ".btn-up");

  // Phần nội dung chi tiết
  const jobInfoContent = document.querySelector(classContent);

  if (buttonDropup === null) {
    buttonContainer.classList.add("dropup");
    viewMore.classList.remove("btn-primary");
    viewMore.classList.add("btn-info");
    viewMore.innerHTML = "Thu gọn";
    viewMore.classList.add("btn-up");
    jobInfoContent.classList.remove("d-none");
  } else {
    buttonContainer.classList.remove("dropup");
    viewMore.classList.remove("btn-info");
    viewMore.classList.add("btn-primary");
    viewMore.innerHTML = "Chi tiết";
    viewMore.classList.remove("btn-up");
    jobInfoContent.classList.add("d-none");
  }
};
