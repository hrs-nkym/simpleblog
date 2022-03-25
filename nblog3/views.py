# from django.shortcuts import render

# Create your views here.

from rest_framework import generics, pagination
from .models import Post, Category
from .serializers import CategorySerializer, PostSerializer, SimplePostSerializer


class CategoryList(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class StandardResultsSetPagination(pagination.PageNumberPagination):
    page_size = 10


class PostList(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = SimplePostSerializer
    pagination_class = StandardResultsSetPagination


class PostDetail(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
