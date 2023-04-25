from django.shortcuts import get_object_or_404
from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import User, UserProfile
from .serializers import UserSerializer, UserProfileSerializer, RegisterSerializer

from rest_framework.authtoken.models import Token

class RegisterUserView(generics.CreateAPIView):
    """
    View to register a new user.
    """
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [permissions.AllowAny]

    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)
        response.status_code = 201  # Set status code to 'Created'
        user = User.objects.get(email=request.data['email'])
        token = Token.objects.create(user=user)
        data = {
            'token': token.key,
        }
        response.data = data
        return response

class UserDetailView(generics.RetrieveAPIView):
    """
    View to retrieve user details.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return self.request.user


class UserUpdateView(generics.UpdateAPIView):
    """
    View to update user details.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return self.request.user


class UserProfileDetailView(generics.RetrieveUpdateAPIView):
    """
    View to retrieve and update user profile details.
    """
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return get_object_or_404(UserProfile, user=self.request.user)


class RootView(APIView):
    def get(self, request):
        return Response({"message": "Welcome to the API!"})
