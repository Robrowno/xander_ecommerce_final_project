"""Product models."""

from django.db import models

# Create your models here.
class Product(models.Model):
    """Product model."""
    
    name = models.CharField(max_length=255)
    # tag = models.CharField(ProductTag, max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    image = models.ImageField(upload_to='product_images/')
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        """Return name."""
        return self.name
    
class ProductTag(models.Model):
    """Product tag model."""
    
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='tag')
    tag = models.CharField(max_length=255)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        """Return product name."""
        return self.product.name
    
class ProductDetails(models.Model):
    """Product details model."""
    
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='details')
    size = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        """Return product name."""
        return self.product.name
    
class ProductInventory(models.Model):
    """Product inventory model."""
    
    product = models.OneToOneField(ProductDetails, on_delete=models.CASCADE, related_name='inventory')
    quantity = models.IntegerField(max_length=10)
    