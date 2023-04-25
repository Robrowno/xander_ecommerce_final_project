from django import forms

class PaymentForm(forms.Form):
    stripe_token = forms.CharField(widget=forms.HiddenInput)
    email = forms.EmailField()
