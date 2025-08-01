<<<<<<< HEAD
# iBuild Backend

## Setup & Run (Docker)

1. Build and start all services (backend, PostgreSQL, Redis):
   ```bash
   docker-compose up --build
   ```
   - Backend: http://localhost:4000/api/v1

## Setup & Run (Local)

=======
# iBuild Frontend

## Setup & Run
#If you wanted to see main code of the project, navigate to src/components/...
>>>>>>> c08939ed904f727e9e6410ce3f6e6687a3fd8972
1. Install dependencies:
   ```bash
   npm install
   ```
<<<<<<< HEAD
2. Create a `.env` file with the following variables (see `docker-compose.yml` for values):
   - DATABASE_URL
   - REDIS_URL
   - JWT_SECRET
   - S3_BUCKET_NAME
   - AWS_ACCESS_KEY_ID
   - AWS_SECRET_ACCESS_KEY
   - AWS_REGION
3. Run Prisma migrations:
   ```bash
   npx prisma migrate dev --name init
   ```
4. Start the backend:
   ```bash
   npm run dev
   ```

## Notes
- The backend expects a `src/` directory with TypeScript source files (e.g., `src/index.ts`).
- If missing, you must add the backend source code for the server to run.
- API documentation: see `openapi.yaml`. 
=======
2. Start the development server:
   ```bash
   npm start
   ```
   The app will be available at http://localhost:3000

## Notes
- Make sure the backend is running at http://localhost:4000/api/v1
- API base URL is configured in `src/Components/axios.js`. 
>>>>>>> c08939ed904f727e9e6410ce3f6e6687a3fd8972
