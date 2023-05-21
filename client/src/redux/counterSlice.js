import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

export const counterSlice = createSlice({
  name: "user",
  initialState: {
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
    item: localStorage.getItem("item")
      ? JSON.parse(localStorage.getItem("item"))
      : [],
    accunt: localStorage.getItem("itemaccount")
      ? JSON.parse(localStorage.getItem("itemaccount"))
      : [],
    favcount: localStorage.getItem("favcount")
      ? localStorage.getItem("favcount")
      : 0,
    Contacted: 0,
    mynotes: 0,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Signed in successfully",
      });
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    logout: (state, action) => {
      state.user = null;
      localStorage.setItem("user", state.user);
      return state;
    },
    AddProdectInItemPage: (state, action) => {
      state.item = [];
      let pluscount = { ...action.payload };
      state.item.push(pluscount);
      localStorage.setItem("item", JSON.stringify(state.item));
    },
    AdditemInfavpage: (state, action) => {
      if (state.user) {
        const heart = document.querySelector(".fav .fa-heart");
        const navbars = document.querySelector(".navbars .redpointbars");
        const redpoint = document.querySelector(".redpoint");
        heart.style.color = "red";
        redpoint.style.display = "block";
        navbars.style.display = "block";
        const indexitem = state.accunt.findIndex(
          (Item) => Item.id === action.payload.id
        );
        if (indexitem >= 0) {
          state.accunt[indexitem] = {
            ...state.accunt[indexitem],
          };
          state.favcount = 1;
        } else {
          let pluscount = { ...action.payload };
          state.accunt.push(pluscount);
          state.favcount++;
        }
        const Toast = Swal.mixin({
          toast: true,
          position: "bottom-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: " Property saved",
        });
      } else {
        Swal.fire("pleas Login first ");
      }
      localStorage.setItem("itemaccount", JSON.stringify(state.accunt));
      localStorage.setItem("favcount", state.favcount);
    },
    delet: (state, action) => {
      const nextCartItems = state.accunt.filter(
        (item) => item.id !== action.payload.id
      );
      state.favcount--;
      state.accunt = nextCartItems;
      localStorage.setItem("itemaccount", state.accunt);
      localStorage.setItem("favcount", state.favcount);
    },
    DeletAll: (state, action) => {
      state.accunt = [];
      state.favcount = 0;
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: " Property Delet",
      });
      localStorage.setItem("itemaccount", state.accunt);
      localStorage.setItem("favcount", state.favcount);
    },
    messege: (state, action) => {
      if (state.user) {
        Swal.fire({
          input: "textarea",
          inputLabel: "Message",
          inputPlaceholder: "Type your message here...",
          inputAttributes: {
            "aria-label": "Type your message here",
          },
          showCancelButton: true,
        });
      } else {
        Swal.fire("pleas Login first ");
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  login,
  logout,
  AddProdectInItemPage,
  AdditemInfavpage,
  DeletAll,
  delet,
  messege,
} = counterSlice.actions;
export const selector = (state) => state.user.user;
export const selectoritem = (state) => state.user.item;
export const selectoraccont = (state) => state.user.accunt;
export const favcounter = (state) => state.user.favcount;
export const Contact = (state) => state.user.Contacted;
export const mynotes = (state) => state.user.mynotes;

export default counterSlice.reducer;
