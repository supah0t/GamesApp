from django.db import models

class PlayerScore(models.Model):
    user = models.CharField(max_length=40)
    score = models.PositiveIntegerField(default=0)
    
    def __str__(self):
        return str(self.score)
