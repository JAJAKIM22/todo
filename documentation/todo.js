/**
 * @swagger
 * components:
 *   schemas:
 *     Todo:
 *       type: object
 *       required:
 *         - title
 *         - description
 *       properties:
 *         title:
 *           type: string
 *           description: The title of the todo item.
 *         description:
 *           type: string
 *           description: A brief description of the todo item.
 *       example:
 *         title: "Buy groceries"
 *         description: "Milk, eggs, and bread."
 *
 * tags:
 *   name: Todos
 *   description: API for managing todo items
 *
 * /todo/posttodo:
 *   post:
 *     summary: Create a new todo item
 *     tags: [Todos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     responses:
 *       201:
 *         description: Todo created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       500:
 *         description: Internal Server Error
 *
 * /todo/todos:
 *   get:
 *     summary: Retrieve all todos
 *     tags: [Todos]
 *     responses:
 *       200:
 *         description: Todos retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Todo'
 *       500:
 *         description: Internal Server Error
 *
 * /todo/todo/{todoId}:
 *   get:
 *     summary: Retrieve a specific todo by ID
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: todoId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the todo to retrieve
 *     responses:
 *       200:
 *         description: Todo retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       404:
 *         description: Todo not found
 *       500:
 *         description: Internal Server Error
 *
 *   put:
 *     summary: Update a specific todo by ID
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: todoId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the todo to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     responses:
 *       200:
 *         description: Todo updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       404:
 *         description: Todo not found
 *       500:
 *         description: Internal Server Error
 *
 *   delete:
 *     summary: Delete a specific todo by ID
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: todoId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the todo to delete
 *     responses:
 *       200:
 *         description: Todo deleted successfully
 *       404:
 *         description: Todo not found
 *       500:
 *         description: Internal Server Error
 */
