#!/usr/bin/env python3

import pika

connection = pika.BlockingConnection(pika.ConnectionParameters(host='rabbitmq'))
channel = connection.channel()
channel.queue_declare(queue='hello')
line = input()
channel.basic_publish(exchange='', routing_key='hello', body=line.encode())
print(" [x] Sent '{}'".format(line))
connection.close()
