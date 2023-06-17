# Lian-Dashboard

Design patterns used:

1- Presentation / Container Components (In Users Table Component)
In this design pattern, we separate UI and logic.

This design pattern makes the management of each section separate (UI and logic management).

Advantages of this design pattern:

- Testing on the component is possible.
- Our component is reusable.
- Debugging is much faster and easier.
- Much more readability.

2 - HOCs

This design pattern makes us use common functions without repetition between different components.

such as state management (dark mode, etc.) or shared UIs such as header and footer.

In this project, the following components are implemented with the help of this design pattern:

Header,
Footer ,
MainLayout

Advantages of this design pattern:

- No repetition of UI or state in child components
- Faster and easier scalability

---

some notes:

- I did not have a backend in this project And I used a test backend just to get the list of users.
- Delete and edit operations were implemented locally.
