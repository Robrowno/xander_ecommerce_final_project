<<<<<<< HEAD
from django.contrib.auth import authenticate
from rest_framework import generics, permissions, status
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import User, UserProfile
from .serializers import (
    LoginSerializer,
    RegisterSerializer,
    UserSerializer,
    UserProfileSerializer,
)


class RootView(APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request, *args, **kwargs):
        return Response({"message": "Welcome to the API!"})


class RegisterUserView(generics.CreateAPIView):
    """
    View to register a new user.
    """
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [permissions.AllowAny]

    def create(self, request, *args, **kwargs):
        data = request.data
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        user = self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        token = Token.objects.create(user=user)
        response_data = {
            "token": token.key,
        }
        return Response(response_data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        user = serializer.save()
        return user


class LoginUserView(generics.CreateAPIView):
    """
    View to log in a user and obtain an authentication token.
    """
    queryset = User.objects.all()
    serializer_class = LoginSerializer
    permission_classes = [permissions.AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        token, created = Token.objects.get_or_create(user=user)
        return Response({"token": token.key}, status=status.HTTP_200_OK)


class UserDetailView(generics.RetrieveAPIView):
    """
    View to retrieve user details.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        """
        Get the current authenticated user.
        """
        return self.request.user


class UserUpdateView(generics.UpdateAPIView):
    """
    View to update user details.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        """
        Get the current authenticated user.
        """
        return self.request.user

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)


class UserProfileDetailView(generics.RetrieveUpdateAPIView):
    """
    View to retrieve and update user profile details.
    """
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        """
        Get the current authenticated user's profile.
        """
        return self.request.user.profile
=======
from django.shortcuts import render

# Create your views here.
>>>>>>> backend
