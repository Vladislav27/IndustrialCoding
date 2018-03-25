#bash
python3 django/manage.py makemigrations core todolist
python3 django/manage.py migrate
cd react
python3 ../django/manage.py runserver 0.0.0.0:8000 & npm start
