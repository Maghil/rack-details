from django.http import HttpResponse
from django.shortcuts import render
from .models import Rack
from django.template import loader

def index(request):
    rack_list = Rack.objects.order_by("rack_ip")
    template = loader.get_template("racks.html")
    context = {
        "rack_list": rack_list,
    }
    return HttpResponse(template.render(context, request))