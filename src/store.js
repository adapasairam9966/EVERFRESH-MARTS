import { configureStore, createSlice } from '@reduxjs/toolkit';

const vegSlice = createSlice({
  name: 'products',
  initialState: {
  vegItems : [
  { id: 1, name: "Tomato", description: "Fresh red tomatoes full of flavor, perfect for curries, salads, and soups.", price: 1, image: "/veg images/TAMATO.jpg" },
  { id: 2, name: "Potato", description: "Golden potatoes rich in starch, used in fries, curries, and parathas.", price: 30, image: "public/veg images/POTATO (2).jpg" },
  { id: 3, name: "Ladies Finger (Bhindi)", description: "Green bhindi with a crunchy taste, ideal for stir-fries and curries.", price: 50, image: "public/veg images/BANDA.jpg" },
  { id: 4, name: "Bottle Gourd", description: "Light and healthy vegetable for curries, soups, and dals.", price: 35, image: "public/veg images/Bottle Gourds.webp" },
  { id: 5, name: "Carrot", description: "Crunchy and sweet carrots, rich in Vitamin A, great for salads and curries.", price: 45, image: "public/veg images/CARROT.jpg" },
  { id: 6, name: "Cabbage", description: "Fresh green cabbage, perfect for stir-fry, curries, and momos stuffing.", price: 25, image: "public/veg images/Cabbage.jpg" },
  { id: 7, name: "Cauliflower", description: "White florets of cauliflower, delicious in curries and pakoras.", price: 55, image: "public/veg images/Cauliflower.jpg" },
  { id: 8, name: "Spinach (Palak)", description: "Green leafy spinach rich in iron, best for palak paneer and dals.", price: 20, image: "public/veg images/Spinach (Palak).jpg" },
  { id: 9, name: "Brinjal (Eggplant)", description: "Purple brinjal, soft and tasty, great for curries and bharta.", price: 40, image: "public/veg images/Brinjal (Eggplant).jpg" },
  { id: 10, name: "Capsicum (Bell Pepper)", description: "Colorful bell peppers with crunchy texture, perfect for fried rice and curries.", price: 60, image: "public/veg images/Capsicum (Bell Pepper).jpg" },
  { id: 11, name: "Green Peas", description: "Sweet and fresh peas, used in curries, pulao, and snacks.", price: 70, image: "public/veg images/Green Peas.jpg" },
  { id: 12, name: "Onion", description: "Fresh red onions, essential for curries, gravies, and salads.", price: 35, image: "public/veg images/Onion.jpg" },
  { id: 13, name: "Garlic", description: "Aromatic garlic pods, widely used for flavoring dishes and curries.", price: 90, image: "public/veg images/Garlic.jpg" },
  { id: 14, name: "Ginger", description: "Fresh ginger roots with strong flavor, perfect for teas and curries.", price: 120, image: "public/veg images/Ginger.jpg" },
  { id: 15, name: "Coriander Leaves", description: "Fresh green coriander leaves to garnish and add flavor to dishes.", price: 15, image: "public/veg images/Coriander Leaves.jpg" },
  { id: 16, name: "Mint Leaves", description: "Refreshing mint leaves used in chutneys, biryanis, and drinks.", price: 20, image: "public/veg images/Mint Leaves.jpg" },
  { id: 17, name: "Radish", description: "White radish with crunchy texture, great for parathas and salads.", price: 25, image: "public/veg images/Radish.jpg" },
  { id: 18, name: "Drumstick (Moringa)", description: "Nutritious drumsticks used in sambhar, curries, and dals.", price: 40, image: "public/veg images/Drumstick (Moringa).jpg" },
  { id: 19, name: "Pumpkin", description: "Yellow pumpkin with sweet taste, ideal for curries and soups.", price: 35, image: "public/veg images/Pumpkin.jpg" },
  { id: 20, name: "Bitter Gourd (Karela)", description: "Green bitter gourd, healthy and commonly used in stir-fries and curries.", price: 45, image: "public/veg images/Bitter Gourd (Karela).jpg" }
]
,
nonvegItems :[
  { id: 101, name: "Chicken", description: "Fresh farm chicken, tender and juicy, perfect for curries, biryanis, and roasts.", price: 200, image: "public/nonveg/Chicken (2) - Copy.jpg" },
  { id: 102, name: "Mutton", description: "Premium quality mutton, soft and delicious, ideal for curries and biryanis.", price: 550, image: "public/nonveg/Mutton (2) - Copy.jpg" },
  { id: 103, name: "Fish", description: "Fresh river fish, rich in protein, great for fries, curries, and soups.", price: 300, image: "public/nonveg/Fish - Copy.jpg" },
  { id: 104, name: "Prawns", description: "Juicy prawns full of flavor, perfect for curries, stir-fries, and biryanis.", price: 400, image: "/public/nonveg/Prawns - Copy.jpg" },
  { id: 105, name: "Eggs", description: "Farm-fresh eggs, full of protein, ideal for omelets, curries, and snacks.", price: 60, image: "public/nonveg/Eggs - Copy.jpg" },
  { id: 106, name: "Crab", description: "Fresh sea crab, juicy and rich in flavor, great for curries and seafood dishes.", price: 500, image: "public/nonveg/Crab (2) - Copy.jpg" },
  { id: 107, name: "Lamb", description: "Tender lamb meat, perfect for kebabs, curries, and grills.", price: 600, image: "/public/nonveg/lamb.png" },
  { id: 108, name: "Duck", description: "Farm-raised duck, flavorful and rich, ideal for roasts and curries.", price: 450, image: "/public/nonveg/duck.png" },
  { id: 109, name: "Squid (Calamari)", description: "Fresh squid, tender and delicious, best for fried rings and curries.", price: 350, image: "/public/nonveg/squid.png" },
  { id: 110, name: "Turkey", description: "Lean and protein-rich turkey meat, great for roasts, curries, and grills.", price: 500, image: "/public/nonveg/turkey.png" },
  { id: 112, name: "Goat", description: "Fresh goat meat, rich in taste, ideal for traditional curries and stews.", price: 550, image: "/public/nonveg/goat.png" },
  { id: 113, name: "Beef", description: "Premium beef cuts, juicy and tender, best for steaks, curries, and grills.", price: 700, image: "/public/nonveg/beef.png" },
  { id: 114, name: "Pork", description: "Farm-raised pork, rich and flavorful, perfect for roasts, curries, and chops.", price: 400, image: "/public/nonveg/pork.png" },
  { id: 115, name: "Salmon", description: "Fresh Atlantic salmon, rich in omega-3, great for grills and sushi.", price: 800, image: "/public/nonveg/salmon.png" },
  { id: 117, name: "Octopus", description: "Tender octopus, perfect for Mediterranean grills and seafood curries.", price: 600, image: "/public/nonveg/octopus.png" },
  { id: 118, name: "Lobster", description: "Premium lobster, sweet and juicy, best for seafood platters and curries.", price: 1200, image: "/public/nonveg/lobster.png" },
  { id: 120, name: "Oysters", description: "Juicy oysters, fresh from the sea, great for grills, soups, and raw dishes.", price: 500, image: "/public/nonveg/oyster.png" },
  { id: 121, name: "Anchovies", description: "Small, salty anchovies, great for pizzas, salads, and curries.", price: 250, image: "/public/nonveg/anchovis.png" },
  { id: 122, name: "Sardines", description: "Fresh sardines, rich in calcium and flavor, best for fries and grills.", price: 220, image: "/public/nonveg/sardine.png" },
  { id: 123, name: "Ham", description: "Smoked ham, rich in flavor, perfect for sandwiches, pizzas, and grills.", price: 600, image: "/public/nonveg/ham.png" },
  { id: 124, name: "Bacon", description: "Crispy bacon strips, smoky and delicious, great for breakfast and burgers.", price: 450, image: "/public/nonveg/bacon.png" },
  { id: 126, name: "Venison", description: "Lean venison meat, tender and healthy, ideal for steaks and curries.", price: 900, image: "/public/nonveg/venison.png" },
  ],
 milkItems :
   [
  { id: 301, name: "Milk", image: "/milk/Milk.avif", price: 60 },
  { id: 302, name: "Yogurt", image: "/milk/Yogurt.avif", price: 50 },
  { id: 303, name: "Butter", image: "/milk/Butter.avif", price: 200 },
  { id: 304, name: "Ghee", image: "/milk/Ghee.avif", price: 600 },
  { id: 305, name: "Cheese", image: "/milk/Cheese.avif", price: 400 },
  { id: 306, name: "Paneer", image: "/milk/Paneer.webp", price: 300 },
  { id: 307, name: "Cream", image: "/milk/Cream.avif", price: 150 },
  { id: 308, name: "Condensed Milk", image: "/milk/Condensed Milk.avif", price: 120 },
  { id: 309, name: "Evaporated Milk", image: "/milk/Evaporated Milk.avif", price: 100 },
  { id: 310, name: "Flavored Milk", image: "/milk/Flavored Milk.avif", price: 80 },
  { id: 311, name: "Milk Powder", image: "/milk/Milk Powder.avif", price: 200 },
  { id: 312, name: "Buttermilk", image: "/milk/Buttermilk.avif", price: 35 },
  { id: 313, name: "Khoya", image: "/milk/Khoya.avif", price: 250 },
  { id: 314, name: "Ice Cream", image: "/milk/ice cream.avif", price: 100 }
],
medicineItems :[
  { id: 301, name: "Apple", image: "/public/fruits/apple.jpeg", price: 120 },
  { id: 302, name: "Banana", image: "/public/fruits/banana.jpeg", price: 50 },
  { id: 303, name: "Orange", image: "/public/fruits/orange.jpeg", price: 80 },
  { id: 304, name: "Mango", image: "/public/fruits/mango.jpeg", price: 150 },
  { id: 305, name: "Grapes", image: "/public/fruits/grapes.jpeg", price: 90 },
  { id: 306, name: "Pineapple", image: "/public/fruits/pineapple.jpeg", price: 100 },
  { id: 307, name: "Watermelon", image: "/public/fruits/watermelon.jpeg", price: 60 },
  { id: 308, name: "Papaya", image: "/public/fruits/papaya.jpeg", price: 70 },
  { id: 309, name: "Pomegranate", image: "/public/fruits/pomegranate.jpeg", price: 180 },
  { id: 310, name: "Strawberry", image: "/public/fruits/trawberry.jpeg", price: 200 },
  { id: 311, name: "Kiwi", image: "/public/fruits/kivi.jpeg", price: 250 },
  { id: 312, name: "Guava", image: "/public/fruits/Guava.jpeg", price: 60 },
  { id: 313, name: "Pear", image: "/public/fruits/pear.png", price: 140 },
  { id: 314, name: "Cherry", image: "/public/fruits/unnamed.png", price: 300 },
  { id: 315, name: "Blueberry", image: "/public/fruits/blueberry.jpeg", price: 400 },
  { id: 316, name: "Plum", image: "/public/fruits/plum.jpeg", price: 160 },
  { id: 317, name: "Peach", image: "/public/fruits/peach.jpeg", price: 180 },
  { id: 318, name: "Custard Apple (Sitaphal)", image: "/public/fruits/custedapple.jpeg", price: 120 },
  { id: 319, name: "Dragon Fruit", image: "/public/fruits/draganfruit.jpeg", price: 350 },
  { id: 320, name: "Muskmelon", image: "/public/fruits/Muskmelon.jpeg", price: 90 }
],

  },
  reducers: {}
});

const savedCart = localStorage.getItem("cart");
const initialSt = savedCart && savedCart !== "undefined" ? JSON.parse(savedCart) : [];
const cartSlice = createSlice({
  name :"Cart",
  initialState:initialSt,
  reducers:{
    addToCart : (state,action)=>{
      const item = action.payload;
      const existingItem = state.find(i => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...item, quantity: 1 });
        // console.log(item);
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
 incrementQuantity: (state, action) => {
      const item = state.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    decrementQuantity: (state, action) => {
      const item = state.find(i => i.id === action.payload.id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          // if quantity == 1, remove item from cart
          return state.filter(i => i.id !== action.payload.id);
        }
      localStorage.setItem("cart", JSON.stringify(state));
      }
      return state;
    },
    removeFromCart: (state, action) => {
      const updatedState = state.filter(item => item.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify(updatedState));
      return updatedState;
    },
    clearCart: () => {
      return [];
    },
  },
});

const orderSlice = createSlice({
  name : "orders",
  initialState: [],
  reducers: {
    addOrder: (state, action) => {
      state.push(action.payload);
    },
    removeOrder: (state, action) => {
      return state.filter(order => order.id !== action.payload.id);
    },
    clearOrders: () => {
      return [];
    },
  },
 });

// Wishlist Slice
const savedwishlist = localStorage.getItem("wishlist");
const initialwishlist = savedwishlist && savedwishlist !== "undefined" ? JSON.parse(savedwishlist) : [];


const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: initialwishlist,
  reducers: {
    addToWishlist: (state, action) => {
      if (!state.find(item => item.id === action.payload.id)) {
        state.push(action.payload);
      }
      localStorage.setItem("wishlist", JSON.stringify(state));
    },
    removeFromWishlist: (state, action) => {
      const updatedState = state.filter(item => item.id !== action.payload);
      localStorage.setItem("wishlist", JSON.stringify(updatedState));
      return updatedState;
    }
  }
});


// ================= USERS SLICE =================
const savedUsers = JSON.parse(localStorage.getItem("users") || "[]");
const savedAuthState = JSON.parse(localStorage.getItem("authState") || "null");


const initialState = {
  allUsers: savedUsers, // ✅ List of all registered users
  isAuthenticated: savedAuthState?.isAuthenticated || false,
  currentUser: savedAuthState?.currentUser || null,
  error: null, // ✅ Track login errors
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // ✅ Register new user
    registerUser: (state, action) => {
      state.allUsers.push(action.payload); // add new user to list
      localStorage.setItem("users", JSON.stringify(state.allUsers));
    },

    // ✅ Login user (set current user + authentication)
    loginUser: (state, action) => {
       // clear error before checking
  state.error = null;
      const user = state.allUsers.find(
        (u) =>
          u.email === action.payload.email &&
          u.password === action.payload.password
      );

      if (user) {
        state.isAuthenticated = true;
        state.currentUser = user;
        state.error = null; // clear previous errors
        localStorage.setItem(
          "authState",
          JSON.stringify({
            isAuthenticated: true,
            currentUser: user,
          })
        );
      } else {
        state.isAuthenticated = false;
        state.currentUser = null;
        state.error = "Invalid login credentials"; // set error for useEffect
      }
    },

    // ✅ Update currently logged-in user (profile update)
    updateCurrentUser: (state, action) => {
      if (state.currentUser) {
        state.currentUser = { ...state.currentUser, ...action.payload };

        // also update in allUsers list
        const index = state.allUsers.findIndex(
          (u) => u.email === state.currentUser.email
        );
        if (index !== -1) state.allUsers[index] = state.currentUser;

        localStorage.setItem("users", JSON.stringify(state.allUsers));
        localStorage.setItem(
          "authState",
          JSON.stringify({
            isAuthenticated: state.isAuthenticated,
            currentUser: state.currentUser,
          })
        );
      }
    },

    // ✅ Logout user
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.currentUser = null;
      state.error = null;
      localStorage.setItem(
        "authState",
        JSON.stringify({
          isAuthenticated: false,
          currentUser: null,
        })
      );
    },

    // ✅ Check login state from localStorage (useful on app reload)
    checkLogin: (state) => {
      const savedAuth = JSON.parse(localStorage.getItem("authState") || "null");
      if (savedAuth) {
        state.isAuthenticated = savedAuth.isAuthenticated;
        state.currentUser = savedAuth.currentUser;
        state.error = null;
      }
    },
  },
});


// Step 3: Configure store
const store = configureStore({
  reducer: {
    products: vegSlice.reducer,
    Cart : cartSlice.reducer,
    orders : orderSlice.reducer,
    wishlist: wishlistSlice.reducer,
    users: usersSlice.reducer
  }
});
export const {
  registerUser,
  loginUser,
  updateCurrentUser,
  logoutUser,
  checkLogin,
} = usersSlice.actions;
export const {addToCart, incrementQuantity, decrementQuantity, removeFromCart, clearCart } = cartSlice.actions;
export const { addOrder, removeOrder, clearOrders } = orderSlice.actions;
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default store;
