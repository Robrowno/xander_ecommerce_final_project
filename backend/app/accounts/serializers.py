from django.contrib.auth import authenticate
from rest_framework import serializers
from .models import User, UserProfile


class UserProfileSerializer(serializers.ModelSerializer):
    """
    UserProfile serializer for representing the UserProfile model.
    """

    class Meta:
        model = UserProfile
        fields = ('phone_number', 'address', 'city', 'country', 'zip_code')


class UserSerializer(serializers.ModelSerializer):
    """
    User serializer for representing the User model.
    """
    profile = UserProfileSerializer()

    class Meta:
        model = User
        fields = ('id', 'email', 'first_name', 'last_name', 'is_active', 'is_staff', 'profile')

    def create(self, validated_data):
        """
        Create a new user with the provided data.
        """
        profile_data = validated_data.pop('profile')
        user = User.objects.create_user(
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            password=validated_data['password'],
        )
        UserProfile.objects.create(user=user, **profile_data)
        return user



class RegisterSerializer(serializers.ModelSerializer):
    """
    Register serializer for handling user registration.
    """

    profile = UserProfileSerializer()

    class Meta:
        model = User
        fields = ('email', 'first_name', 'last_name', 'password', 'profile')

    # Make sure the password is write-only
    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        """
        Create a new user with the provided data, setting the password securely.
        """
        profile_data = validated_data.pop('profile')
        user = User.objects.create_user(
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            password=validated_data['password'],
        )
        UserProfile.objects.create(user=user, **profile_data)
        return user

class LoginSerializer(serializers.Serializer):
    """
    Login serializer for handling user authentication.
    """

    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        """
        Validate the provided email and password, authenticating the user.
        """

        email = data.get("email", "")
        password = data.get("password", "")

        if email and password:
            user = authenticate(request=self.context.get("request"), email=email, password=password)

            if user:
                if user.is_active:
                    data["user"] = user
                else:
                    raise serializers.ValidationError("This user is not active.")
            else:
                raise serializers.ValidationError("Invalid email or password.")
        else:
            raise serializers.ValidationError("Both email and password must be provided.")

        return data