 * Let’s navigate to django_app/settings.py. In the DATABASES section, you’ll see the code snippet below.
Alterar para
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'helloworld',
        'USER': '<yourname>',
        'PASSWORD': 'password',
        'HOST': 'localhost',
        'PORT': '',
    }
}
 rodar python manage.py makemigrations
python manage.py migrate
