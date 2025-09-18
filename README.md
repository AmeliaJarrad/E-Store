# E‑Store

A React + Vite e-commerce frontend app powered by Firebase Firestore. Currently supports basic product management (add/update). Future plans include splitting into separate Admin and Client sections with authentication.

## Demo & Snippets

Live demo: [Insert deployment URL if available]

Screenshots:
(You can include UI shots of the product list, product form, etc.)

## Requirements / Purpose

The E‑Store project is a lightweight e-commerce frontend prototype. It connects to a Firebase Firestore backend to manage product data. This version is primarily admin-focused (managing product listings), with plans to evolve into a full client + admin e-commerce experience.

### MVP

- Display a list of products
- Add new products to Firestore
- Update existing product details
- Sync UI in real time with Firestore updates
- Form validation for product fields

 
### Stack Used & Why

- **Frontend:** React + Vite
- **Database:** Firebase Firestore
- **Why:**
- Vite for fast dev environment and build optimization
- React for UI modularity and state management
- Firestore for quick and scalable NoSQL database integration — no need for manual backend setup

## Build Steps

```bash 
# Clone the repo
git clone https://github.com/AmeliaJarrad/E-Store.git
cd E-Store

# Install dependencies
npm install

# Run the development server
npm run dev

# Visit http://localhost:5173 in your browser (or as specified in console)

```

## Environment Setup:

A config folder to store firestore.js is required, it will house the necessary firebase configuration to access the database. 

## Design Goals / Approach

- Simple admin interface for managing products
- Use Firestore for real-time database sync without writing backend logic
- Use React component structure to prepare for future scalability
- Focus on clean UX for adding/updating products

## Features

✅ View product list synced from Firestore

✅ Add new product

✅ Edit/update product details

✅ Form validation

✅ Toast notifications for cart actions and stock limits

✅ Firebase integration for seamless data management

## Known Issues

⚠ No user authentication implemented yet

⚠ Admin and Client sections are not separated — all functionality is in one place

⚠ No image uploads or media handling

⚠ No checkout logic (yet)

⚠ Some UI elements may need polish

## Future Goals

🔐 Add authentication and protect admin features behind login

👥 Split site into Admin Dashboard and Client Storefront

🛒 Add shopping cart, checkout simulation

🖼 Add support for product images

📦 Add inventory tracking / stock levels

📱 Improve mobile responsiveness

## Change Logs

2025 - fix dates 

Finished basic CRUD functionality for products using Firestore

Hooked up forms to database with validation

Set up initial routing for navigation

## What did you struggle with?

Structuring data for Firestore and managing state locally

Avoiding excessive Firestore reads/writes during updates

Designing reusable cart logic while ensuring stock limits

Handling async interactions with good UX feedback (toasts help here!)

## Licensing Details

This project is licensed under the MIT License. See the LICENSE
 file for more info.

## Further Details & Related Projects

Standalone project

Could be extended with a backend for more complex business logic

May serve as a base for a fully hosted e-commerce app in the future
