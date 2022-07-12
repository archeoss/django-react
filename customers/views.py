from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import Customer
from .serializers import CustomerSerializer


@api_view(['GET', 'POST'])
def customers_list(req):
    """
    List customers
    or
    Create a new customer
    """

    if req.method == 'GET':
        data = []
        nextPage = 1
        prevPage = 1
        customers = Customer.objects.all()
        page = req.GET.get('page', 1)
        paginator = Paginator(customers, 10)

        try:
            data = paginator.page(page)
        except PageNotAnInteger:
            data = paginator.page(1)
        except EmptyPage:
            data = paginator.page(paginator.num_pages)

        serializer = CustomerSerializer(data, context={'request': req}, many=True)

        if data.has_next():
            nextPage = data.next_page_number()
        if data.has_previous():
            prevPage = data.previous_page_number()

        res = Response({'data': serializer.data,
                        'count': paginator.count,
                        'numpages': paginator.num_pages,
                        'nextlink': f'/api/customers/?page={nextPage}',
                        'prevlink': f'/api/customers/?page={prevPage}'})
    elif req.method == 'POST':
        serializer = CustomerSerializer(data=req.data)
        if serializer.is_valid():
            serializer.save()
            res = Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            res = Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    else:
        res = Response({}, status=status.HTTP_400_BAD_REQUEST)

    return res


@api_view(['GET', 'PUT', 'DELETE'])
def customers_detail(req, pk):
    """
    Retrieve, update or delete a customer by id/pk.
    """

    try:
        customer = Customer.objects.get(pk=pk)
    except Customer.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if req.method == 'GET':
        serializer = CustomerSerializer(customer,
                                        context={'request': req})
        res = Response(serializer.data)
    elif req.method == 'PUT':
        serializer = CustomerSerializer(customer,
                                        data=req.data,
                                        context={'request': req})
        if serializer.is_valid():
            serializer.save()
            res = Response(serializer.data)
        else:
            res = Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif req.method == 'DELETE':
        customer.delete()
        res = Response(status=status.HTTP_204_NO_CONTENT)
    else:
        res = Response(status=status.HTTP_400_BAD_REQUEST)

    return res
