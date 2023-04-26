from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import render
from .models import Product, Tag

# Create your views here.
class AllProducts(APIView):
    """View to list all products in the system."""
    
    authentication_classes = []
    
    def get(self, request):
        """Return a list of all products."""
        
        return Response(Product.objects.all())
    
class IndividualProduct(APIView):
    """View for handling individual products."""
    
    authentication_classes = []
    
    def get(self, request, pk):
        """Return a single product."""
        
        return Response(Product.objects.get(pk=pk))
    
    def post(self, request):
        """Create a new product."""
        
        return Response(Product.objects.create(request.data))
    
    def put(self, request, pk):
        """Update a product."""
        
        return Response(Product.objects.update(request.data))
    
    def delete(self, request, pk):
        """Delete a product."""
        
        return Response(Product.objects.delete(pk=pk))
    
class AllCategories(APIView):
    """View to list all categories in the system."""
    
    authentication_classes = []
    
    def get(self, request):
        """Return a list of all categories."""
        
        return Response(Tag.objects.all())

class CategoryProducts(APIView):
    """View for handling products by category."""
    
    authentication_classes = []
    
    def get(self, request, pk):
        """Return a list of products by category."""
        
        return Response(Product.objects.filter(category=pk))
    
    def post(self, request):
        """Create a new product."""
        
        return Response(Product.objects.create(request.data))
    
    def put(self, request, pk):
        """Update a product."""
        
        return Response(Product.objects.update(request.data))
    
    def delete(self, request, pk):
        """Delete a product."""
        
        return Response(Product.objects.delete(pk=pk))