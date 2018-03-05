from django.conf.urls import url
from .views import *
from django.contrib.auth.decorators import login_required

app_name = "todo"

urlpatterns = [
    url(r'^$', TodoList.as_view(), name="todo_list"),
    url(r'^(?P<pk>\d+)/edit/$', login_required(UpdateTodo.as_view()), name="update_todo"),
]
