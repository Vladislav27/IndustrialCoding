from django.db import models
from django.conf import settings
# Create your models here.


class Todo(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.PROTECT)
    description = models.TextField(max_length=1000)
    completed = models.BooleanField()
    date = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.description[:30]

# class TodoQuerySet(models.QuerySet):
#
#     def annotate_everything(self):
#         qs = self.select_related('author')
#         return qs

