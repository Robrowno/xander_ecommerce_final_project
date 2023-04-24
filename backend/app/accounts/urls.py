from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.RegisterUserView.as_view(), name='register'),
    path('user/', views.UserDetailView.as_view(), name='user-detail'),
    path('user/update/', views.UserUpdateView.as_view(), name='user-update'),
    path('user/profile/', views.UserProfileDetailView.as_view(), name='user-profile-detail'),
]
