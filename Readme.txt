1. Install Python 3.9+ from https://python.org

2. Open the project folder in Visual Studio Code.

3. Open a terminal in VS Code:
   Terminal → New Terminal

4. Create a virtual environment:
   python -m venv venv

5. Activate the virtual environment:
   # For PowerShell:
   .\venv\Scripts\Activate.ps1
   # For CMD:
   venv\Scripts\activate.bat

6. Install dependencies:
   pip install -r requirements.txt

7. Run the server:
   uvicorn app.main:app --reload

8. Open the documentation in your browser:
   http://127.0.0.1:8000/docs


🚀 Project Roadmap & Implementation Status
Below is the current development progress of the CIU Ticketing System. Tasks are categorized by their role in the system architecture.

🛡️ Security & Authentication
--- Implement Password Hashing — Securely store user credentials using passlib[bcrypt].

--- OAuth2/JWT Authentication — Upgrade from Basic Auth to secure Token-based authentication.

--- Role-Based Access Control (RBAC) — Restrict endpoints based on user roles: Student, Instructor, Admin.

🏗️ Infrastructure & DevOps
--- Dockerization — Added Dockerfile and docker-compose.yml for seamless deployment.

--- Configuration Management — Move sensitive data to .env using python-dotenv or Pydantic Settings.

--- Database Migrations — Integrate Alembic to automate schema changes and table creation.

--- Repository Hygiene — Add .gitignore to exclude venv, __pycache__, and secrets.

⚙️ Core Logic & Quality Assurance
--- Error Handling & Validation — Enhanced Pydantic schemas to ensure unique usernames/emails and data integrity.

--- Unit Testing — Create a tests/ suite covering all CRUD operations to prevent regressions.

--- API Documentation — Enrich Swagger UI with detailed descriptions and example payloads.

--- System Logging — Implement centralized logging for errors and critical user actions.