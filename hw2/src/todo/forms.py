from django import forms
from .models import Todo


class TodoListViewForm(forms.ModelForm):
    description = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control',
                                                                'placeholder' : 'Что у вас нового?'}))
    class Meta:
        model = Todo
        fields = ('description',)

class UpdateTodoForm(forms.ModelForm):
    class Meta:
        model = Todo
        fields = ('description', 'completed')