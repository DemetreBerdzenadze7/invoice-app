# Invoice App

A responsive invoice management app built with **React 19**, **TypeScript**, **Redux Toolkit** and **Tailwind CSS v4**. You can create, edit, filter and track invoices. Light and dark themes are included, and all data persists in the browser.

---

## Features

- **Create invoices** with sender and client details, invoice date, payment terms, project description and any number of line items
- **Save as draft** or **Save & Send** (the invoice is stored as *pending*)
- **Edit invoices** in a slide-in form that opens with the current values filled in
- **Mark as paid** and **delete** from the invoice detail page
- **Filter by status**: Draft, Pending or Paid
- **Form validation** with React Hook Form and Yup: required fields, email format, numeric quantity and price, and at least one item
- **Totals per line item** that update as you type
- **Unique invoice IDs** in the format `AB1234`
- **Light / dark mode** that is remembered between visits
- **Persistent storage**: invoices are saved to `localStorage` and survive page reloads
- **Responsive layout**, built mobile-first for phone, tablet and desktop
- **Empty state** illustration when there are no invoices to show

## Tech Stack

| Category      | Tools                                   |
| ------------- | --------------------------------------- |
| Framework     | React 19, TypeScript                    |
| Build tool    | Vite                                    |
| State         | Redux Toolkit, React Redux, Context API |
| Routing       | React Router                            |
| Forms         | React Hook Form, Yup                    |
| Styling       | Tailwind CSS v4                         |
| Dates         | Day.js                                  |
| Linting       | ESLint, typescript-eslint               |

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm

### Installation

```bash
git clone <repository-url>
cd invoice-app
npm install
```

### Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the development server             |
| `npm run build`   | Type-check and build for production      |
| `npm run preview` | Preview the production build locally     |
| `npm run lint`    | Run ESLint                               |

## Project Structure

```
src/
├── components/
│   ├── header/          # App header with theme toggle and avatar
│   ├── invoices/        # Invoice list, filter dropdown, status badge, empty state
│   ├── invoice/         # Invoice detail view: info, address, items table, actions
│   └── invoice-form/    # Create/edit forms, fields, item list, Yup schema
├── container/           # Page container
├── context/             # NewInvoiceContext (form and filter state)
├── layout/              # Root layout
├── pages/               # Home and InvoicePage routes
├── redux/
│   ├── store.ts         # Store setup and localStorage sync
│   └── slices/          # Invoice slice: submit, edit, mark as paid, remove
├── types.d.ts           # Shared global types
├── index.css            # Tailwind theme tokens and dark mode variables
└── main.tsx             # App entry point and router
```

## Routes

| Path           | Page                              |
| -------------- | --------------------------------- |
| `/`            | Redirects to `/home`              |
| `/home`        | Invoice list with filter          |
| `/invoice/:id` | Invoice details and actions       |

## Design

The UI follows the [Frontend Mentor](https://www.frontendmentor.io) Invoice App design. Colors, typography and shadows are defined as Tailwind theme tokens in [src/index.css](src/index.css), and the `.dark` class overrides them for dark mode.

## Author

**Demetre Berdzenadze**

- GitHub: [github.com/DemetreBerdzenadze7](https://github.com/DemetreBerdzenadze7)
