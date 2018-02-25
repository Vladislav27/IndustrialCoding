FROM python:3.4

ADD requirements.txt requirements.txt
RUN pip install -r requirements.txt

ADD . /pp1/producer
WORKDIR /pp1/producer

CMD ["python", "producer.py"]
