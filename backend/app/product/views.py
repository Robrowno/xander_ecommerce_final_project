from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import render
from .models import Product

# Create your views here.
class AllProducts(APIView):
    """View to list all products in the system."""
    
    def get(self, request):
        """Return a list of all products."""
        
        return Response(Product.objects.all())
    
class IndividualProduct(APIView):
    """View for handling individual products."""
    
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
