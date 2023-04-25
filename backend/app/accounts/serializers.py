from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import User, UserProfile


class UserProfileSerializer(serializers.ModelSerializer):
    """
    UserProfile serializer for representing the UserProfile model.
    """

    class Meta:
        model = UserProfile
        fields = ('phone_number', 'address', 'city', 'country', 'zip_code', 'photo')


class RegisterSerializer(serializers.ModelSerializer):
    """
    Register serializer for handling user registration.
    """

    profile = UserProfileSerializer(required=False)

    class Meta:
        model = User
        fields = ('email', 'first_name', 'last_name', 'password', 'profile')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        profile_data = validated_data.pop('profile', {})
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)
        user.save()

        UserProfile.objects.create(user=user, **profile_data)
        return user


class UserSerializer(serializers.ModelSerializer):
    """
    User serializer for representing the User model.
    """

    profile = UserProfileSerializer(required=False, partial=True)

    class Meta:
        model = User
        fields = ('id', 'email', 'first_name', 'last_name', 'is_active', 'is_staff', 'profile')

    def update(self, instance, validated_data):
        # Update user instance
        instance.email = validated_data.get('email', instance.email)
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.is_active = validated_data.get('is_active', instance.is_active)
        instance.is_staff = validated_data.get('is_staff', instance.is_staff)
        instance.save()

        # Update user profile
        profile_data = validated_data.get('profile')
        if profile_data:
            profile = instance.profile
            for field, value in profile_data.items():
                setattr(profile, field, value)
            profile.save()

        return instance


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

        email = data.get('email', '')
        password = data.get('password', '')

        if email and password:
            user = authenticate(request=self.context.get('request'), email=email, password=password)

            if user:
                if user.is_active:
                    data['user'] = user
                else:
                    raise serializers.ValidationError('This user is not active.')
            else:
                raise serializers.ValidationError('Invalid email or password.')
        else:
            raise serializers.ValidationError('Both email and password must be provided.')

        return data




