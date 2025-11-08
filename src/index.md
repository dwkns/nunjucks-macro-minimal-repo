<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="generator" content="{{ eleventy.generator }}" />
    <title>Just a title</title>
  </head>
  <body>
    {% from 'macros/someMacro.njk' import showName %}
    <p>M1</p>
    {{ showName('some name goes here') }}
      <p>M2</p>
    {{ showName('another name goes here') }}
  </body>
</html>
