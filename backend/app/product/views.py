from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Product, Tag
from .serializers import ProductSerializer

from django.shortcuts import render

# Create your views here.
class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class Categories(APIView):
    """Handles requests for categories"""
    
    def get(self, request):
        """Handles GET requests
        
        Get all categories"""
        
        products = Tag.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        """Handles POST requests
        
        Add a new category"""
        
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        else:
            return Response(serializer.errors, status=400)
    