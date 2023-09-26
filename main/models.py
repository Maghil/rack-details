from django.db import models

class Rack(models.Model):
    rack_ip = models.CharField(max_length=16)