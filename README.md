# ♿ AccessChain

**Design Out the Daily Struggle**  
AccessChain is a web platform built to support people with disabilities in navigating public spaces. It enables users to search, review, and share accessibility details of places like cafes, libraries, malls, and hospitals — helping ensure every space is more inclusive and welcoming.

---

## 🧭 Our Mission

> “Accessibility is not an option — it's a necessity.”  
AccessChain empowers communities to crowdsource accessibility information so individuals with mobility, visual, hearing, or cognitive impairments can make informed decisions about where to go and what to expect.

---

## 🚀 Demo

- Live:   https://github.com/Jwl06/accesschain-app
- Local: `http://localhost:3000`

---

## 🌟 Features

- 🔍 **Smart Search & Filters** — by name, category, location
- 🧾 **Community Reviews** — shared by real users
- 📊 **Accessibility Score** — visual progress bars for inclusivity
- 🏷️ **Accessibility Tags** — like ramps, Braille menus, or wide aisles
- 📍 **Sorting** — by rating, distance, accessibility
- 📱 **Mobile-Responsive Design** — built with everyone in mind

---

## 🧱 Tech Stack

| Layer            | Tools                                      |
|------------------|--------------------------------------------|
| **Framework**     | Next.js (App Router) + React               |
| **Language**      | TypeScript                                 |
| **Styling**       | Tailwind CSS                               |
| **UI Components** | ShadCN UI (Card, Button, Input, Select)    |
| **Icons**         | Lucide React Icons                         |
| **Routing**       | `useSearchParams` from Next Navigation     |

---

## 📁 Project Structure

accesschain/
├── app/
│ ├── page.tsx # Home Page
│ ├── places/page.tsx # Filter/Search Results
│ ├── about/page.tsx # About Page
│ └── add-review/page.tsx # Submit Review Form
├── components/ # SearchBar, UI widgets
├── data/mockPlaces.ts # Static sample data
├── styles/globals.css # Tailwind base styling
├── tailwind.config.ts
└── README.md


---

## 🧠 Accessibility Categories Covered

- ♿ **Mobility Access**: Ramps, elevators, wide aisles, accessible restrooms
- 👁️ **Visual Support**: Braille signage, high contrast, good lighting
- 👂 **Hearing Support**: Captions, sign language, visual alerts
- 🧭 **Cognitive Support**: Clear navigation, easy-to-understand layout


