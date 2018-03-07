===============================
Data healer
===============================

A Flasky app to categorize unlabeled datasets.


Motivation
----------

In machine learning world, sometimes you need to categorize an unlabeled dataset. Probably yo have obtained
the data from a third party and in most cases the dataset is big and you try to categorize it using an unsupervised
learning algorithm such as `Latent Dirichlet Allocation <https://en.wikipedia.org/wiki/Latent_Dirichlet_allocation/>`_,
`KMeans <https://en.wikipedia.org/wiki/K-means_clustering/>`_, `DBSCAN <https://en.wikipedia.org/wiki/DBSCAN/>`_, ...
However, depending on the nature of your data, get a good categorization with these algorithms is really hard and you
need that a human supervise the categorization.

With this purpose we have developed `data-healer`. A simple web application that helps you to label your datasets with
a fast and friendly interface. You just have to define some configs and give it a CSV input and start to categorize.
Each new categorization is registered in a new CSV with the same shape as the input one and an extra category column.

Finally, if you have tried first to infer the category with an unsupervised learning algorithm you can specify this
inferred column as a default option to speed up the category selection process.



Quickstart
----------

First, set your app's secret key as an environment variable. For example,
add the following to ``.bashrc`` or ``.bash_profile``.

.. code-block:: bash

    export DATA_HEALER_SECRET='something-really-secret'

Run the following commands to bootstrap your environment ::

    git clone https://github.com/bertini36/data-healer
    cd data-healer
    pip install -r requirements.txt
    npm install
    npm start  # run the webpack dev server and flask server using concurrently

In general, before running shell commands, set the ``FLASK_APP`` and
``FLASK_DEBUG`` environment variables ::

    export FLASK_APP=healer_app.py
    export FLASK_DEBUG=1


Deployment
----------

To deploy::

    export FLASK_DEBUG=0
    npm run build   # build assets with webpack
    flask run       # start the flask server

In your production environment, make sure the ``FLASK_DEBUG`` environment
variable is unset or is set to ``0``, so that ``ProdConfig`` is used.


Shell
-----

To open the interactive shell, run ::

    flask shell

By default, you will have access to the flask ``app``.


Running Tests
-------------

To run all tests, run ::

    flask test


Asset Management
----------------

Files placed inside the ``assets`` directory and its subdirectories
(excluding ``js`` and ``css``) will be copied by webpack's
``file-loader`` into the ``static/build`` directory, with hashes of
their contents appended to their names.  For instance, if you have the
file ``assets/img/favicon.ico``, this will get copied into something
like
``static/build/img/favicon.fec40b1d14528bf9179da3b6b78079ad.ico``.
You can then put this line into your header::

    <link rel="shortcut icon" href="{{ asset_url_for('img/favicon.ico') }}">

to refer to it inside your HTML page.  If all of your static files are
managed this way, then their filenames will change whenever their
contents do, and you can ask Flask to tell web browsers that they
should cache all your assets forever by including the following line
in your ``settings.py``::

    SEND_FILE_MAX_AGE_DEFAULT = 31556926  # one year
