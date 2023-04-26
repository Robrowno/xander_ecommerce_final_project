from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product, Tag
from .serializers import ProductSerializer
from rest_framework.permissions import AllowAny
from rest_framework.decorators import permission_classes, authentication_classes
from rest_framework import status

# Create your views here.
@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
@authentication_classes([])
def hello_world(request):
    if request.method == 'POST':
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'GET':
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response({'data': serializer.data, 'message': 'Hello, world!'})
