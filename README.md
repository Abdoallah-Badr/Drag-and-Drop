# Drag and Drop with ReactDnD
<br>

## Project Overview

This project that utilizes React, React DnD, and Redux The main goal of the project is to implement a drag and drop functionality where users can drag boxes from a list component into another container component. The project also displays the offset from the container's border after dropping a box. Additionally, users can delete boxes from the container, which will return the boxes to the original list.

[✨ live website ](https://draganddropapp.vercel.app/)

<br>
<br>

## Features

1. Drag and Drop: From the list component, click and drag a box to the container component. The box will be moved to the container.

2. Track Offset Changing : After dropping the box into the container, the project calculates the offset of the box from the container's border and displays it on the screen.

3. Return to the list : In the container component, users can click on a box to select it and then click the "Delete" button to remove the box from the container. The box will be returned to the original list.

<br>

### React DnD

React DnD (Drag and Drop) is utilized to implement the drag-and-drop functionality. The `boxesRow` component is wrapped in a DnD container, and each box in the list is made draggable. The `Container` component is wrapped in another DnD container to allow dropping the boxes.

<br>

### Components

The project is structured using reusable React components. Here is a list of the main components:

1. `App`: The main component that sets up the application layout and renders the `List` and `Container` components.

2. `Container`: The component that receives and displays the boxes dropped from the `List` component. It also calculates and displays the offset of the boxes from the container's border.
   
4. `boxesRow`: The component that displays the initial list of boxes.

5. `box`: The component that displays the boxe item. This component handles the drag functionality by ReactDnD.

<br>

### Redux State Management

Redux is used for state management in the project. The state is organized as follows:

1. `boxesRow`: An array containing all the boxes available in the list.

2. `containerBoxes`: An array containing the boxes currently present in the container.

The Redux actions and reducers handle the updates to these states based on user interactions.

<br>


Happy coding!
