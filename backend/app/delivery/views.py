from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Shipment, ShipmentLineItem
from .serializers import DeliverySerializer
from django.shortcuts import render

# Create your views here.
class AllShipments(APIView):
    """View to list all shipments in the system."""
    
    def get(self, request):
        """Return a list of all shipments."""
        
        return Response(Shipment.objects.all())
    
class IndividualShipment(APIView):
    """View for handling individual shipments."""
    
    def get(self, request, pk):
        """Return a single shipment."""
        
        return Response(Shipment.objects.get(pk=pk))
    
    def post(self, request):
        """Create a new shipment."""
        
        return Response(Shipment.objects.create(request.data))
    
    def put(self, request, pk):
        """Update a shipment."""
        
        return Response(Shipment.objects.update(request.data))
    
    def delete(self, request, pk):
        """Delete a shipment."""
        
        return Response(Shipment.objects.delete(pk=pk))
    
    
class AllShipmentLineItems(APIView):
    """View to list all shipment line items in the system."""
    
    def get(self, request):
        """Return a list of all shipment line items."""
        
        return Response(ShipmentLineItem.objects.all())
    
class IndividualShipmentLineItem(APIView):
    """View for handling individual shipment line items."""
    
    def get(self, request, pk):
        """Return a single shipment line item."""
        
        return Response(ShipmentLineItem.objects.get(pk=pk))
    
    def post(self, request):
        """Create a new shipment line item."""
        
        return Response(ShipmentLineItem.objects.create(request.data))
    
    def put(self, request, pk):
        """Update a shipment line item."""
        
        return Response(ShipmentLineItem.objects.update(request.data))
    
    def delete(self, request, pk):
        """Delete a shipment line item."""
        
        return Response(ShipmentLineItem.objects.delete(pk=pk))