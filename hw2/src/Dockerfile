FROM python:latest

ENV PYTHONUNBUFFERED 1

RUN mkdir /django
WORKDIR /django
ADD . /django/

EXPOSE 8000

RUN pip install --upgrade pip
ADD requirements.txt requirements.txt
RUN pip install -r requirements.txt


