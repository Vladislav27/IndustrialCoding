from django.conf.urls import url
from .views import *

app_name="todo"

urlpatterns = [
    url(r'^$', TodoList.as_view(), name="todo_list"),
    url(r'^(?P<pk>\d+)/edit/$', UpdateTodo.as_view(), name="update_todo"),
]