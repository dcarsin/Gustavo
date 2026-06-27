# Restaurant Ordering System

## Overview
The Restaurant Ordering System is a web application that allows users to browse a menu, place orders, and receive order summaries. It is built using TypeScript and Express, providing a robust and scalable solution for restaurant management.

## Features
- Create and manage menu items
- Place orders with selected items and sauces
- Generate detailed order summaries
- Support for different delivery and payment methods
- User-friendly interface for easy navigation

## Project Structure
```
restaurant-ordering-system
├── src
│   ├── app.ts
│   ├── controllers
│   │   ├── menuController.ts
│   │   └── orderController.ts
│   ├── models
│   │   ├── menuItem.ts
│   │   ├── order.ts
│   │   ├── sauce.ts
│   │   └── address.ts
│   ├── services
│   │   ├── menuService.ts
│   │   └── orderService.ts
│   ├── routes
│   │   ├── menuRoutes.ts
│   │   └── orderRoutes.ts
│   ├── utils
│   │   └── orderSummary.ts
│   └── types
│       └── index.ts
├── tests
│   ├── menu.test.ts
│   └── order.test.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd restaurant-ordering-system
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
To start the application, run:
```
npm start
```
The application will be available at `http://localhost:3000`.

## API Endpoints
- **Menu**
  - `GET /menu` - Retrieve all menu items
  - `POST /menu` - Create a new menu item

- **Orders**
  - `POST /orders` - Place a new order
  - `GET /orders/:orderNumber` - Retrieve order summary by order number

## Testing
To run the tests, use:
```
npm test
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.