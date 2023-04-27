"""Serializers for product app."""

from rest_framework import serializers
from .models import Product, Tag

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True)

    class Meta:
        model = Product
        fields = '__all__'

    def create(self, validated_data):
        tags_data = validated_data.pop('tags')
        product = Product.objects.create(**validated_data)
        for tag_data in tags_data:
            tag, created = Tag.objects.get_or_create(**tag_data)
            if 'friendly_name' in tag_data:
                tag.friendly_name = tag_data['friendly_name']
                tag.save()
            product.tags.add(tag)
        product.save()
        return product
