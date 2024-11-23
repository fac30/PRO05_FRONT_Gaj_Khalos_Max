# PokéLike

![Pikachu welcomes you!](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg "Pikachu")

Welcome to the **PokeLike**! This project helps you track Pokémon you find cute 🥰 using an a Typescript and React front-end bootstrapped by Vite.

## Table of Contents

- [Introduction](#introduction)
- [Branches](#branches)
- [Committing](#committing)

## Introduction

This document serves as a comprehensive guide for the team to document new features, describe their functionality, and provide instructions for usage or implementation. It ensures consistency and clarity across the project, making it easier for team members to contribute, understand the purpose of changes, and collaborate effectively.

Each section of this document outlines important practices for:

- Writing clear and concise commit messages.
- Naming branches according to convention.
- Maintaining a standardized project file structure.

Following these guidelines will help streamline the development process, improve code quality, and ensure smooth integration of features.

## Branches

To keep the codebase organized and ensure clear understanding, we follow these branch naming conventions:

### Feature Branches:

- `feature/<short-description>` – Use this for adding new features.
  - Example: `feature/user-authentication`

### Bugfix Branches:

- `bugfix/<short-description>` – Use this for fixing bugs.
  - Example: `bugfix/fix-login-error`

### Hotfix Branches:

- `hotfix/<short-description>` – For urgent fixes that need to go directly into production.
  - Example: `hotfix/critical-security-patch`

### Other Branch Types:

- `chore/<short-description>` – For miscellaneous tasks that don't fit into features or bugfixes, such as updating dependencies or cleanup.
  - Example: `chore/update-dependencies`
- `test/<short-description>` – For branches specifically focused on testing.
  - Example: `test/integration-testing`

### Guidelines:

- Branch names should be all lowercase.
- Use hyphens (`-`) to separate words, not spaces or underscores.
- Keep branch names descriptive but concise.

## Committing

1. **feat**: A new feature for the user.

   - Example: `feat: add login functionality`

2. **fix**: A bug fix for the user.

   - Example: `fix: correct hover state color`

3. **docs**: Documentation only changes.

   - Example: `docs: update setup instructions`

4. **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semicolons, etc.).

   - Example: `style: fix spacing issues`

5. **refactor**: Code changes that neither fix a bug nor add a feature.

   - Example: `refactor: optimize profile picture loading`

6. **perf**: A code change that improves performance.

   - Example: `perf: improve query performance for large datasets`

7. **test**: Adding missing tests or correcting existing tests.

   - Example: `test: add unit tests for profile component`

8. **build**: Changes that affect the build system or external dependencies (e.g., `gulp`, `webpack`, `npm`).

   - Example: `build: update webpack to v5`

9. **ci**: Changes to our CI configuration files and scripts (e.g., GitHub Actions, CircleCI, Travis).

   - Example: `ci: add Node.js version matrix for testing`

10. **chore**: Other changes that don't modify `src` or `test` files, such as tooling, package updates, etc.

    - Example: `chore: bump eslint version`

11. **revert**: Reverts a previous commit.

# Pokémon Collections Web Application

## Table of Contents

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Features](#features)
- [Pages Overview](#pages-overview)
  - [Homepage](#homepage)
  - [Collections](#collections)
  - [Modal for Creating Collections](#modal-for-creating-collections)
- [Components](#components)
  - [Header](#header)
  - [Footer](#footer)
  - [Logo](#logo)
  - [Button](#button)
- [Form Validation and Data Handling](#form-validation-and-data-handling)
- [Accessibility](#accessibility)
- [Styling](#styling)
- [Installation](#installation)
- [Future Improvements](#future-improvements)

---

## Introduction

Welcome to the **Pokémon Collections** web application! This project allows users to create, view, and manage their own Pokémon collections. The goal was to build a responsive and accessible web application using React and TypeScript with a focus on good coding practices, reusability, and accessibility.

## Project Structure

The project is structured as follows:

src/
├── assets/ # Images and assets (logo, favicon, etc.)
├── components/ # Reusable React components
├── pages/ # Pages for the app (Homepage, Collections, etc.)
├── App.tsx # Main application entry point
├── index.tsx # React root entry point
└── styles/ # CSS and Tailwind configuration

## Features

- **Responsive Design**: The website is fully responsive and mobile-friendly.
- **Accessibility**: Focus on making the site accessible, including `aria-labels` for important buttons.
- **Collection Management**: Users can create collections with a name and description.
- **Modal Window**: Utilizes modals for creating new collections without leaving the current page.
- **Customizable Components**: Reusable `Button`, `Modal`, and other components.
- **Dynamic Routing**: Navigation between different pages using React Router.

## Pages Overview

### Homepage

- The homepage (`Home.tsx`) displays a welcome message and a navigation menu.
- Clicking on the Pokémon logo in the header redirects users to the homepage.
- **Features**:
  - Navigation bar with links to other pages.
  - Accessible design with keyboard navigation support.

### Collections

- The **Collections** page (`Collections.tsx`) is where users can view all existing collections and create new ones.
- A floating **Add (+)** button is provided for users to create a new collection. The button has an `aria-label` for accessibility.
- On clicking the **Add** button, a modal appears for collection creation.

### Modal for Creating Collections

- The **CollectionForm** component is displayed inside a modal.
- The form takes in two inputs:
  - **Name** (required)
  - **Description** (optional)
- Basic front-end validation ensures that the collection name is not empty before submission.
- The form sanitizes input to prevent XSS attacks.

## Components

### Header

- Displays the logo and a navigation bar.
- Clicking the Pokémon logo redirects users to the homepage.
- Uses the `Logo` component with custom sizing.

### Footer

- Contains social media links (GitHub, Twitter, Instagram).
- Displays copyright information.
- Features a custom Pokémon logo (`logo2`) on the bottom right corner with a playful effect.
- The logo appears to "peek" out of the main content area into the footer, especially visible on larger screens.

### Logo

- The `Logo.tsx` component is used in both the header and footer.
- In the footer, the logo is rotated and positioned to give a playful effect.
- Responsive design ensures it adapts to different screen sizes.

### Button

- A reusable `Button.tsx` component with support for different types (`button`, `submit`, `reset`).
- Automatically applies styles based on props.
- Supports both internal button actions and external links (`<a>` tags).

## Form Validation and Data Handling

While the **front-end** handles basic form validation (like checking if the collection name is not empty), more robust validation and sanitization are planned for the **back-end**. This ensures that all data submitted is secure and free from potential threats.

### Basic Validation Code in `CollectionForm.tsx`:

```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const sanitizedName = name.trim().replace(/<[^>]*>?/gm, "");
  if (sanitizedName.length < 3) {
    alert("Collection name must be at least 3 characters long.");
    return;
  }
  onSubmit(sanitizedName, description);
  setName("");
  setDescription("");
};
```

## Accessibility

The app is designed with accessibility in mind:

- `aria-label` attributes on buttons for screen readers.
- Keyboard navigability.
- Clear visual focus states.
- The modal dialog uses focus trapping to ensure keyboard users can interact with it efficiently.

## Styling

- **Tailwind CSS** is used for styling, ensuring a consistent and responsive design.
- Custom colors (`electric-yellow`, `midnight-blue`, etc.) are used to match the Pokémon theme.

### Example:

```tsx
<button
  type="submit"
  className="bg-electric-yellow text-white py-2 px-4 rounded"
>
  Create Collection
</button>
```

## Conclusion

Thank you for exploring the **Pokémon Collections** project! 🎉

We aimed to create a visually engaging and user-friendly platform where Pokémon enthusiasts can curate and manage their favorite collections. This project reflects our commitment to accessibility, responsive design, and an intuitive user experience. Whether you're a developer exploring the code or a Pokémon fan enjoying the interface, we hope you find this project both fun and inspiring.

Feel free to contribute, raise issues, or suggest improvements. Let's continue to evolve this project together! 🚀

If you enjoyed this project, don't forget to ⭐️ star the repository on GitHub!

Happy coding, and may your collections grow ever stronger! ⚡️🐾

---

**Made with ❤️ by the Pokémon Collections team**
