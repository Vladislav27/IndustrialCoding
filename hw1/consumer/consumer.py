#!/usr/bin/env python3

import pika
import time
import sys
import psycopg2

flag = False
while not flag:
	try:
		time.sleep(0.05)
		connection = pika.BlockingConnection(pika.URLParameters("amqp://guest:guest@rabbitmq:5672"))
		flag = True
	except:
		print("Error")
		flag = False

flag = False
while not flag:
	try:
		time.sleep(0.05)
		connection = psycopg2.connect(host='db', dbname='db', user='testuser')
		flag = True
	except:
		print("Error")
		flag = False

cursor = connection.cursor()
cursor.execute("CREATE TABLE IF NOT EXISTS messages (id SERIAL PRIMARY KEY, message TEXT);")

cursor.execute("SELECT * FROM messages;")
channel = connection.channel()
channel.queue_declare(queue='hello')

def callback(ch, method, properties, body):
	data = body.decode()
	cursor.execute("INSERT INTO messages VALUES (DEFAULT,%s)",(data,))
	print(" Data %r" % rec)

channel.basic_consume(callback, queue='hello', no_ack=True)

print(' Wait... To exit press CTRL+C')
channel.start_consuming()