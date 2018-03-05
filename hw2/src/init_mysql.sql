DROP DATABASE IF EXISTS `django_hw`;
create database `django_hw` default character set utf8 default collate utf8_general_ci;
use `mysql`;
grant all privileges on `django_hw`.* to 'django'@'localhost';
flush privileges;