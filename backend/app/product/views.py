from rest_framework import generics
from .models import Product
from .serializers import ProductSerializer

# class MyModelList(generics.ListCreateAPIView):
#     queryset = MyModel.objects.all()
#     serializer_class = MyModelSerializer

# class MyModelDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = MyModel.objects.all()
#     serializer_class = MyModelSerializer


from django.shortcuts import render

# Create your views here.
class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
