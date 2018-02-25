FROM python:3.4

ADD requirements.txt requirements.txt
RUN pip install -r requirements.txt

ADD . /pp1/consumer
WORKDIR /pp1/consumer

CMD ["python", "consumer.py"]
