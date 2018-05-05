В данном задании требуется привести примеры антипаттернов в своем коде и исправить их.

1. Название переменных:
В одном из задании по курсу WinApi мне требовалось реализовать функцию, которая проверяет: является ли слово палиндром или нет.

Изначально она называлась:
```С++
bool Palindrome(std::string str){
...
}
```
После исправления:
```С++
bool isPalindrome(std::string str){
...
}
```


2. Магическая константа:

В нашем django-проекте по инновационному практикуму в файле settings.py был следующий код:
```Python
DATABASES = {
'default': {
'ENGINE': 'django.db.backends.postgresql_psycopg2',
'NAME': Name...,
'USER': User...,
'PASSWORD': Password...,
'HOST': Host...,
'PORT': Port...,
}
}
```


Стало:

```Python
DATABASES = {
'default': {
'ENGINE': 'django.db.backends.postgresql_psycopg2',
'NAME': os.environ.get('DATABASE_NAME'),
'USER': os.environ.get('DATABASE_USER'),
'PASSWORD': os.environ.get('DATABASE_PASSWORD'),
'HOST': os.environ.get('DATABASE_HOST'),
'PORT': os.environ.get('DATABASE_PORT'),
}
}
```
