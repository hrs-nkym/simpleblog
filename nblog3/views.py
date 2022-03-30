# from django.shortcuts import render

# Create your views here.

from rest_framework import generics, response, pagination
from .models import Post, Category
from .serializers import CategorySerializer, PostSerializer, SimplePostSerializer


class CategoryList(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class StandardResultsSetPagination(pagination.PageNumberPagination):
    page_size = 1

    def get_paginated_response(self, data):
        return response.Response(
            {
                "next": self.get_next_link(),
                "previous": self.get_previous_link(),
                "count": self.page.paginator.count,
                "total_pages": self.page.paginator.num_pages,
                "current_page": self.page.number,
                "results": data,
                "page_size": self.page_size,
                "range_first": (self.page.number * self.page_size)
                - (self.page_size)
                + 1,
                "range_last": min(
                    (self.page.number * self.page_size), self.page.paginator.count
                ),
            }
        )


class PostList(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = SimplePostSerializer
    pagination_class = StandardResultsSetPagination


class PostDetail(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
