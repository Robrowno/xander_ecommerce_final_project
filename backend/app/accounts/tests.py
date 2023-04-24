from django.test import TestCase
from django.contrib.auth import get_user_model
from .models import UserProfile

User = get_user_model()

class UserModelTest(TestCase):
    """
    Test class for the User model.
    """

    def test_create_user(self):
        """
        Test the creation of a new user.
        """
        user = User.objects.create_user(
            email='test@example.com',
            password='testpassword',
            first_name='Test',
            last_name='User'
        )
        self.assertEqual(user.email, 'test@example.com')
        self.assertEqual(user.first_name, 'Test')
        self.assertEqual(user.last_name, 'User')
        self.assertFalse(user.is_staff)
        self.assertFalse(user.is_superuser)

    def test_create_superuser(self):
        """
        Test the creation of a new superuser.
        """
        user = User.objects.create_superuser(
            email='test@example.com',
            password='testpassword',
            first_name='Test',
            last_name='User'
        )
        self.assertEqual(user.email, 'test@example.com')
        self.assertTrue(user.is_staff)
        self.assertTrue(user.is_superuser)

class UserProfileModelTest(TestCase):
    """
    Test class for the UserProfile model.
    """

    def setUp(self):
        """
        Set up the test data for the UserProfile tests.
        """
        self.user = User.objects.create_user(
            email='test@example.com',
            password='testpassword',
            first_name='Test',
            last_name='User'
        )
        self.profile = UserProfile.objects.create(
            user=self.user,
            address='123 Test St',
            phone_number='1234567890'
        )

    def test_user_profile_creation(self):
        """
        Test the creation of a new UserProfile instance.
        """
        self.assertEqual(self.profile.user, self.user)
        self.assertEqual(self.profile.address, '123 Test St')
        self.assertEqual(self.profile.phone_number, '1234567890')