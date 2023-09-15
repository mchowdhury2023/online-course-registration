# Course Registration

## Main Functionalities of the Project:

1. Project shows available courses and course related info like name, cost, credit hour, and a short description of the course.
2. Show functionality of which courses are selected for registration.
3. Registration section displays information on how much credit is left, the total cost of the courses, and the remaining credit hours left.

## How I Handle State?

To retrieve and store data, I utilized the `courses` state and stored the data there as an array. I employed the same strategy for the selection of courses for registration. All selected courses are stored in an array and rendered. I used state to maintain credit, price, and remaining credit calculations and passed those states as props.

