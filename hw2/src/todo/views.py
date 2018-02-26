from django.shortcuts import render

# Create your views here.
from django.urls import reverse_lazy
from django.views.generic import CreateView, UpdateView

from todo.forms import TodoListViewForm, UpdateTodoForm
from todo.models import Todo


class TodoList(CreateView):
    template_name = 'todo/list.html'
    form_class = TodoListViewForm
    success_url = reverse_lazy('todo:todo_list')

    def form_valid(self, form):
        #form.instance.author = self.request.user
        form.instance.completed = False
        return super(TodoList, self).form_valid(form)

    def get_context_data(self, **kwargs):
        context = super(TodoList, self).get_context_data(**kwargs)
        context['list'] = Todo.objects.all()
        return context

class UpdateTodo(UpdateView):
    template_name = 'todo/update_todo.html'
    form_class = UpdateTodoForm
    model = Todo
    success_url = reverse_lazy('todo:todo_list')