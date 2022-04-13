from rest_framework.permissions import BasePermission


class PublicOrSuperUser(BasePermission):
    def has_object_permission(self, request, view, object):
        return bool(object.is_public or request.user.is_superuser)
