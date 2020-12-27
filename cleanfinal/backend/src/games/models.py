from django.db import models


class PlayerScore(models.Model):
    score = models.PositiveIntegerField(default=0)
    
    def __str__(self):
        return str(self.score)
