from django.db import models

class PlayerScore(models.Model):
    user = models.CharField(max_length=40)
    score = models.DecimalField(max_digits=5, decimal_places=2)
    
    def __str__(self):
        return str(self.score)
