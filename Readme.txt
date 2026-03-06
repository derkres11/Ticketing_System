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