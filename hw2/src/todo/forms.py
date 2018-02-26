from django import forms
from .models import Todo


class TodoListViewForm(forms.ModelForm):
    class Meta:
        model = Todo
        fields = ('description',)

class UpdateTodoForm(forms.ModelForm):
    class Meta:
        model = Todo
        fields = ('description', 'completed')